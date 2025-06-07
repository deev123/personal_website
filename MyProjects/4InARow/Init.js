//let x = document.createElement("h1");
//x.innerText = "Connect 4 Game";
//document.body.appendChild(x);

//let board = new Board();
//board.render();
//generateGrid(6, 7);

/*function generateGrid(pRows, pColumns)
{
    //let rows = 6;
    //let columns = 7;
    let heightPercent = 100 / pRows;
    let widthPercent = 100 / pColumns;

    let cellPercent;

    let frameSize;

    if(heightPercent < widthPercent)
    {
        cellPercent = heightPercent;
    }
    else
    {
        cellPercent = widthPercent;
    }
    
    let frame = document.getElementById("frame");
    frame.textContent = ""; //clear the frame element to create a new frame
    frameSize = frame.clientWidth;
    //console.log(frameSize);
    

    for(let y = pRows; y > 0; y--)
    {
        let rowElement = document.createElement("div");
        rowElement.className = "frameRow";
        //framerow height
        
        for(let x = pColumns; x > 0; x--)
        {



            cell = document.createElementNS("http://www.w3.org/2000/svg","svg");
            //cell.className = "frameCell";
            cell.setAttribute("class", "frameCell");
            cell.setAttribute("viewBox", "0 0 40 40");
            cell.style.width = cellPercent + "%";
            
            //cell.setAttribute("class", "frameCell");
            
            let defs = document.createElementNS("http://www.w3.org/2000/svg","defs");

            let mask = document.createElementNS("http://www.w3.org/2000/svg","mask");
            mask.setAttribute("id", "alpha");

            let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
            rect.setAttribute("x", "0");
            rect.setAttribute("y", "0");
            rect.setAttribute("width", "40");
            rect.setAttribute("height", "40");
            rect.setAttribute("fill", "white");

            let circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
            circle.setAttribute("cx", "20");
            circle.setAttribute("cy", "20");
            circle.setAttribute("r", "15");
            circle.setAttribute("fill", "black");

            mask.appendChild(rect);
            mask.appendChild(circle);
            defs.appendChild(mask);

            cell.appendChild(defs);

            let rect2 = document.createElementNS("http://www.w3.org/2000/svg","rect");
            rect2.setAttribute("x", "0");
            rect2.setAttribute("y", "0");
            rect2.setAttribute("width", "40");
            rect2.setAttribute("height", "40");
            rect2.setAttribute("mask", "url(#alpha)");
            rect2.setAttribute("fill", "blue");

            cell.appendChild(rect2);

            / cell.innerHtml = 
            `<svg viewBox="0 0 40 40" width="20%" class="frameCell">
                <defs>
                    <mask id="alpha">
                        <rect x="0" y="0" width="40" height="40" fill="white"/>
                        <circle cx="20" cy="20" r="15" fill="black"/>
                    </mask>
                </defs>
                <rect x="0" y="0" width="40" height="40" mask="url(#alpha)" fill="blue"/>
            </svg>`; /

            rowElement.appendChild(cell);

        }
        frame.appendChild(rowElement);
    }

    function getCellPosition(pRow, pColumn, size)
    {

    }

}*/



//var board = new Board();
//board.generate();

var game = new Game();