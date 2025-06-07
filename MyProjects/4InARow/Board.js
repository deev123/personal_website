class Board
{
    rows;
    columns;
    frame;
    cellPercent;
    map;
    
    constructor()
    {
        this.frame = document.getElementById("frame");
        this.rows = 6;
        this.columns = 7;
    }


    generate()
    {
        this.map = this.generateMap(this.rows, this.columns);
        this.render();
        
        //temporary
        //console.clear();
        //console.log(this.map);
        //
    }

    //needs a class=frame div to render
    //needs to be square
    render()
    {
        let heightPercent = 100 / this.rows;
        let widthPercent = 100 / this.columns;
        this.cellPercent = Math.min(heightPercent, widthPercent);

        this.frame.textContent = ""; //clear the frame element to create a new frame
        
        for(let y = this.rows; y > 0; y--)
        {
            for(let x = this.columns; x > 0 ; x--)
            {
                /*
                for(let y = this.rows; y > 0; y--)
        {
            for(let x = this.columns; x > 0 ; x--)
            */
                let position = this.getCellPosition(y, x);

                //1 = red token, 2 = yellow token, 1.1 = dropping red, 2.1 = dropping yellow, 1.2 = shiny red, 2.2 = shiny yellow

                /*
                //writing a number

                let num = document.createElement("p");
                num.innerText = this.map[y-1][x-1];
                num.style.width = this.cellPercent + 0.1 + "%";
                num.style.height = this.cellPercent + 0.1 + "%";
                num.style.position = "absolute";
                num.style.top = position[0] + "%";
                num.style.left = position[1] + "%";
                num.style.textAlign = "center";

                this.frame.appendChild(num); //number
                */

                //red token svg
                /*if(this.map[y-1][x-1] == 1)
                {
                    let token = document.createElement("img");
                    token.src = "redToken.svg";
                    token.className = "redToken";
                    token.style.width = this.cellPercent + 0.1 + "%";
                    token.style.height = this.cellPercent + 0.1 + "%";
                    token.style.position = "absolute";
                    token.style.top = position[0] + "%";
                    token.style.left = position[1] + "%";

                    this.frame.appendChild(token);
                }*/

                //red token css version
                if(this.map[y-1][x-1] == 1)
                {
                    let token = document.createElement("div");
                    token.className = "redToken shiny";
                    token.style.width = this.cellPercent + 0.1 + "%";
                    token.style.height = this.cellPercent + 0.1 + "%";
                    token.style.top = position[0] + "%";
                    token.style.left = position[1] + "%";

                    this.frame.appendChild(token);
                }

                //yellow token svg
                /*else if(this.map[y-1][x-1] == 2)
                {
                    let token = document.createElement("img");
                    token.src = "yellowToken.svg";
                    token.className = "yellowToken";
                    token.style.width = this.cellPercent + 0.1 + "%";
                    token.style.height = this.cellPercent + 0.1 + "%";
                    token.style.position = "absolute";
                    token.style.top = position[0] + "%";
                    token.style.left = position[1] + "%";

                    this.frame.appendChild(token);
                }*/

                //red token css version
                else if(this.map[y-1][x-1] == 2)
                {
                    let token = document.createElement("div");
                    token.className = "yellowToken shiny";
                    token.style.width = this.cellPercent + 0.1 + "%";
                    token.style.height = this.cellPercent + 0.1 + "%";
                    token.style.top = position[0] + "%";
                    token.style.left = position[1] + "%";

                    this.frame.appendChild(token);
                }

                if(true) //always draw frame
                {
                    /*svg
                    let cell = document.createElement("img");
                    cell.src = "frame.svg";
                    cell.className = "frameCell";
                    cell.style.width = this.cellPercent + 0.1 + "%"; // 0.1 overlaps to remove small gap in some board sizes
                    cell.style.height = this.cellPercent + 0.1 + "%";
                    cell.style.position = "absolute";
                    cell.style.top = position[0] + "%";
                    cell.style.left = position[1] + "%";

                    this.frame.appendChild(cell);*/


                    //css version

                    let cell = document.createElement("div");
                    cell.className = "frameCell";
                    cell.style.width = this.cellPercent + 0.1 + "%"; // 0.1 overlaps to remove small gap in some board sizes
                    cell.style.height = this.cellPercent + 0.1 + "%";
                    cell.style.top = position[0] + "%";
                    cell.style.left = position[1] + "%";

                    this.frame.appendChild(cell);

                    /*//inline svg
                    let cell = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    //cell.className = "frameCell";
                    
                    cell.style.width = this.cellPercent + 0.1 + "%"; // 0.1 overlaps to remove small gap in some board sizes
                    cell.style.height = this.cellPercent + 0.1 + "%";
                    cell.style.top = position[0] + "%";
                    cell.style.left = position[1] + "%";
                    this.frame.appendChild(cell);*/

                }
                
            }
            
        }

    }

    /***
     * adds the token in the row and column in map to the screen as a div
     */
    visualiseToken(pRow, pColumn)
    {
        let heightPercent = 100 / this.rows;
        let widthPercent = 100 / this.columns;
        this.cellPercent = Math.min(heightPercent, widthPercent);

        let position = this.getCellPosition(pRow + 1, pColumn + 1);

        //general
        let token = document.createElement("div");
        token.style.width = this.cellPercent + 0.1 + "%";
        token.style.height = this.cellPercent + 0.1 + "%";
        token.style.top = position[0] + "%";
        token.style.left = position[1] + "%";
        token.id = "(" + pRow + ", " + pColumn + ")";

        if(this.map[pRow][pColumn] == 1)
        {
            token.className = "redToken drop";
            /*this.frame.appendChild(token);*/
            this.frame.insertBefore(token, this.frame.firstChild);
        }

        else if(this.map[pRow][pColumn] == 2)
        {
            token.className = "yellowToken drop";
            /*this.frame.appendChild(token);*/
            this.frame.insertBefore(token, this.frame.firstChild);
        }

    }

    /**
     * returns a row array of column arrays filled with 0s
     */
    generateMap(pRows, pColumns)
    { 
        let array = [];
        for(let i = 0; i < pRows; i++)
        {
            array[i] = [];
            for(let j = 0; j < pColumns; j++)
            {
                array[i][j] = 0;
            }
        }
        return array;
    }

    /**
     * Adds token to the map in the bottom most space in the column
     * returns true if space is found, false if not or pColumn was invalid
     */
    addTokenToMap(pColumn, pToken)
    {
        let row = this.map.length - 1;

        if(pColumn >= 0 && pColumn < this.map[0].length) //column valid
        {
            while(this.map[row][pColumn] != 0 && row > -1) //row = bottom most or -1 if none found
            {
                row = row - 1;
                if(row <= -1)
                {
                    break;
                }
            }
        }
        else //column invalid
        {
            return false;
        }   

        if(row != -1) //space found for token
        {
            //console.log("space found for token"); //seems to work
            //console.log(pToken + " " + this.map);
            this.map[row][pColumn] = pToken;
            this.visualiseToken(row, pColumn);
            return true;
        }
        else
        {
            return false;
        }

    }

    /**
     * Adds a token to the board in the column indicated by mouseX and mouseY.
     * Returns true if valid, false if not
     */
    tryDrop(pToken)
    {
        let index = this.screenPositionToIndex({x:mouseX, y:mouseY});
        if(index != null)
        {
            //this.map[index.row][index.column] = 1;
            if(this.addTokenToMap(index.column, pToken))
            {
                /*this.render();*/
                return true;
            }
            else
            {
                /*this.render();*/
                return false;
            }
        }
        else
        {
            /*this.render();*/
            return false;
        }
    }


    /**
     * Convert client coodinate to an index of map object with a .x and .y (if the mouse is on the board)
     */
    screenPositionToIndex(pScreenPos)
    {
        let frame = document.getElementById("frame");
        let boardLocation = {x:frame.getBoundingClientRect().x, y:frame.getBoundingClientRect().y};
        let frameWidth = frame.getBoundingClientRect().width;
        let frameHeight = frame.getBoundingClientRect().height;
        let frameCenter = { x: (boardLocation.x + (0.5 * frameWidth) ) , y: (boardLocation.y + (0.5 * frameHeight) ) };
        let cellSize = (this.cellPercent / 100) * frame.getBoundingClientRect().width //width or height works
        
        //find the column
        for(let i = 0; i < this.columns; i++)
        {
            if(pScreenPos.x > (frameCenter.x - ( ((this.columns * 0.5) - i) * cellSize ) ) /*left side*/
            && pScreenPos.x < (frameCenter.x - (((this.columns * 0.5) - i - 1) * cellSize))) /*rigth side*/
            {
                //find the row
                for(let j = 0; j < this.rows; j++)
                {
                    if(pScreenPos.y > (frameCenter.y - ( ((this.rows * 0.5) - j) * cellSize ) ) /*top*/
                    && pScreenPos.y < (frameCenter.y - (((this.rows * 0.5) - j - 1) * cellSize))) /*bottom*/
                    {
                        return {row: j, column: i};
                    }

                }

            }

        }

        //mouse not in frame if above code didnt return
        return null;

    }

    /**
     * converts row and column into distance from center of board as % of board
     */
    getCellPosition(pRow, pColumn)
    {
        //basically we are converting coordinates relative to a top left origin to coordinates relative to a center origin
        //50 is the center
        //( ((pRow - 1) - (0.5 * this.rows)) * this.cellPercent) = distance between the cell and the center of the board
        return [50 + ( ((pRow - 1) - (0.5 * this.rows)) * this.cellPercent), 50 + (((pColumn - 1) - (0.5 * this.columns)) * this.cellPercent)];
    }

    /*
    applies sheen to winners tokens 
     */
    highlightWinner()
    {
        //check each cell to see if there is a row of 4
        for(let i = 0; i < this.map.length; i++)
        {
            for(let j = 0; j < this.map[i].length; j++)
            {
                
                if(this.map[i][j] != 0)
                {
                    let tally = 1;

                    
                    // horizontal check
                    tally = 1;
                    let k = j;
                    while(k + 1 < this.map[i].length)
                    {
                        k++;

                        if(this.map[i][k] == this.map[i][k - 1])
                        {
                            tally++;
                        }
                        else
                        {
                            break;
                        }
                        
                    }
                    if (tally >= 4)
                    {

                        while(tally > 0)
                        {
                        console.log("(" + i + ", " + (j + tally - 1) + ")");
                        let token = document.getElementById("(" + i + ", " + (j + tally - 1) + ")");
                        token.classList.add("shiny");
                        tally--;
                        }

                    }

                    // /horizontal check


                    // vertical check
                    tally = 1;
                    k = i;
                    while(k + 1 < this.map.length)
                    {
                        k++;

                        if(this.map[k][j] == this.map[k - 1][j])
                        {
                            tally++;
                        }
                        else
                        {
                            break;
                        }
                        
                    }
                    if(tally >= 4)
                    {
                        while(tally > 0)
                        {
                        //console.log("(" + (i + tally - 1) + ", " + j + ")");
                        let token = document.getElementById("(" + (i + tally - 1) + ", " + j + ")");
                        token.classList.add("shiny");
                        tally--;
                        }
                    }
                    // /vertical check

                    // right down diagonal check
                    tally = 1;
                    k = i;
                    l = j;
                    while(k + 1 < this.map.length && l + 1 < this.map[k].length)
                    {
                        k++;
                        l++;

                        if(this.map[k][l] == this.map[k - 1][l - 1])
                        {
                            tally++;
                        }
                        else
                        {
                            break;
                        }
                    }
                    if(tally >= 4)
                    {
                        while(tally > 0)
                        {
                        //console.log("(" + (i + tally - 1) + ", " + (j + tally - 1) + ")");
                        let token = document.getElementById("(" + (i + tally - 1) + ", " + (j + tally - 1) + ")");
                        token.classList.add("shiny");
                        tally--;
                        }
                    }
                    // /right down diagonal check

                    // left down diagonal check
                    tally = 1;
                    k = i;
                    l = j;
                    while(k + 1 < this.map.length && l - 1 >= 0)
                    {
                        k++;
                        l--;

                        if(this.map[k][l] == this.map[k - 1][l + 1])
                        {
                            tally++;
                        }
                        else
                        {
                            break;
                        }
                    }
                    if(tally >= 4)
                    {
                        while(tally > 0)
                        {
                        //console.log("(" + (i + tally - 1) + ", " + (j - (tally - 1)) + ")");
                        let token = document.getElementById("(" + (i + tally - 1) + ", " + (j - (tally - 1)) + ")");
                        token.classList.add("shiny");
                        tally--;
                        }
                    }
                    // /left down diagonal check

                    //tallys may not catch a row that is more than 4, instead of >= 4 just go until a different token is reached

                }



            }
        }
    }

}