
/*
The Ai class uses a gamemap array to work out best moves
*/

var Ai = (function()
    {

        const score = function(pMap, pDepth)
        {
            let score = 0;

            if(Ai.isWon(pMap, 1))
            {
                return score + 99999 + (pDepth * 2);
            }

            else if (Ai.isWon(pMap, 2))
            {
                return score + (-99999 - (pDepth * 2));
            }

            return score + Math.random() - 0.5; //incase scores are the same so the score isnt always the leftmost
        }

        /**
         * parameter: array of rows of the board
         * applies sheen affect to the board
         * returns true if the board has been won, false if not
         */
        const isWon = function(pMap, pToken = null, sayhow = false)
        {
            let won = false;

            //check each cell to see if there is a row of 4
            for(let i = 0; i < pMap.length; i++)
            {
                for(let j = 0; j < pMap[i].length; j++)
                {
                    
                    if(pMap[i][j] != 0)
                    {
                        let tally = 1;

                        
                        // horizontal check
                        tally = 1;
                        let k = j;
                        while(k + 1 < pMap[i].length)
                        {
                            k++;

                            if(pMap[i][k] == pMap[i][k - 1])
                            {
                                tally++;
                            }
                            else
                            {
                            break;
                            }

                            if(tally >= 4)
                            {
                                if(pMap[i][j] == pToken || pToken == null)
                                {
                                    if(sayhow){   console.log("4 in a row rightwards from " + i +"," + j + " " + pMap[i][j]);  }
                                    return true;
                                }
                            }
                        }
                        // /horizontal check


                        // vertical check
                        tally = 1;
                        k = i;
                        while(k + 1 < pMap.length)
                        {
                            k++;

                            if(pMap[k][j] == pMap[k - 1][j])
                            {
                                tally++;
                            }
                            else
                            {
                            break;
                            }

                            if(tally >= 4)
                            {
                                if(pMap[i][j] == pToken || pToken == null)
                                {
                                    if(sayhow){   console.log("4 in a row downwards from " + i +"," + j + " " + pMap[i][j]);  }
                                    return true;
                                }
                            }
                        }
                        // /vertical check

                        // right down diagonal check
                        tally = 1;
                        k = i;
                        l = j;
                        while(k + 1 < pMap.length && l + 1 < pMap[k].length)
                        {
                            k++;
                            l++;

                            if(pMap[k][l] == pMap[k - 1][l - 1])
                            {
                                tally++;
                            }
                            else
                            {
                            break;
                            }

                            if(tally >= 4)
                            {
                                if(pMap[i][j] == pToken || pToken == null)
                                {
                                    if(sayhow){   console.log("4 in a row down rightwards from " + i +"," + j + " " + pMap[i][j]);  }
                                    return true;
                                }
                            }
                        }
                        // /right down diagonal check

                        // left down diagonal check
                        tally = 1;
                        k = i;
                        l = j;
                        while(k + 1 < pMap.length && l - 1 >= 0)
                        {
                            k++;
                            l--;

                            if(pMap[k][l] == pMap[k - 1][l + 1])
                            {
                                tally++;
                            }
                            else
                            {
                            break;
                            }

                            if(tally >= 4)
                            {
                                if(pMap[i][j] == pToken || pToken == null)
                                {
                                    if(sayhow){   console.log("4 in a row down leftwards from " + i +"," + j + " " + pMap[i][j]);  }
                                    return true;
                                }
                            }
                        }
                        // /left down diagonal check

                    }



                }
            }
            return false;
        }
        
        /**
         * goes through every possible move from the board (map) given to (depth) moves in the future for the player (player) given
         * 
         * map must be a Map object
         * 
         * returns an object {bestScore: (the score of the best move), bestMove: (which column the best move is)}
         */
        const minMax = function(pMap, pDepth, pPlayer)
        {
            //console.log(pMap + " " + pDepth);
            //there are (width) number of possible moves each turn

            let score = null; //set to random to make work
            let move = null;

            if(pDepth <= 0 || Ai.isWon(pMap))
            {
                //console.log(Ai.score(pMap));
                return {bestScore: Ai.score(pMap, pDepth), bestMove: null};
            } //if the player can win whatever move it makes the move choice is random as minimax doesnt go past won boards
            //when theres two ways a player can win, each move results in a predicted win in minmax for each column since no column prevents a win. This is where the scoring system comes in, each move needs to be ranked so it knows to at least try to win


            //after the for loop move will always be over (<game.board.columns) because that is the exit condition

            if(pPlayer == 1)
            {
                //for every column in the board score it and compare to current move
                for(let i = 0; i < game.board.columns; i++)
                {
                    let map = new BoardMap(pMap);
                    if(map.addTokenToMap(i, 1))
                    {
                        let minmax = minMax(map.map, pDepth - 1, 2);
                        if(minmax.bestScore > score || score == null) //move is set to the first valid move
                        {
                            score = minmax.bestScore;
                            move = i;

                        }

                    }
                }
                return {bestScore: score, bestMove: move};
                
            }

            else if(pPlayer == 2)
            {
                //for every column in the board score it and compare to current move
                for(let i = 0; i < game.board.columns; i++)
                {
                    let map = new BoardMap(pMap);
                    if(map.addTokenToMap(i, 2))
                    {
                        //console.log(map.map);
                        let minmax = minMax(map.map, pDepth - 1, 1);
                        if(minmax.bestScore < score || score == null) //move is set to the first valid move
                        {
                            //console.log("score: " + score + " best score was: " + minmax.bestScore);
                            score = minmax.bestScore;
                            move = i;

                        }

                    }
                }
                return {bestScore: score, bestMove: move};
                
            }

        }
        //could have it return an array of every best move in each situation which would save it from calculating minmax every go
        return{minMax: minMax, score: score, isWon: isWon};

    })();


