class Game
{
    turn;
    board;

    
    

    constructor()
    {
        this.turn = 1;
        this.board = new Board();
        this.board.generate();
    }

    start()
    {
        this.turn = 1;
        this.board.generate();
    }

    playerTryDropPiece(pToken)
    {
        if(!Ai.isWon(this.board.map))
        {
            if(this.turn == 1)
            {
                if(this.board.tryDrop(1)) //player go successful
                {
                    this.turn = 2;

                    
                    if(!Ai.isWon(this.board.map))
                    {


                    /*render function being removed and functionality added to adding token functions
                    this.board.render();*/

                    //console.log(minmaxOutput);
                    //let map = new BoardMap(this.board.map);
                    //console.log(this.board.map);
                
                    //the red and yellow being placed at the same time is caused because javascript updates the page graphics when code has finished
                    //need to force it to update the graphics
                    //FIXED

                    //need to fix bug where you can double click where that should be prevented by the turn variable

                    //if the function after (minmax) takes a long time it for some reason delays the one before (render)
                setTimeout(
                    function()
                    {
                    let minmaxOutput = Ai.minMax(game.board.map, 5, game.turn);
                    //console.log(minmaxOutput);

                    game.board.addTokenToMap(minmaxOutput.bestMove, 2);

                    /*render function being removed and functionality added to adding token functions
                    game.board.render();*/
                
                    game.turn = 1;
                    game.board.highlightWinner();
                    }
                , 100);


                    }
                    
                }
                

            }
        }
        game.board.highlightWinner();

    }

    aiGo()
    {

    }

    loop()
    {
        this.playerGo()
        //this.aiGo()

    }



}