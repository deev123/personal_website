//get the position of the mouse as a % at anytime with mouseX and mouseY
let screenLog = document.getElementById("screen-log");
document.addEventListener("mousedown", mousePos);

var mouseX;
var mouseY;

function mousePos(e) 
{
    mouseX = e.clientX /*/ window.innerWidth * 100*/;
    mouseY = e.clientY /*/ window.innerHeight * 100*/;

    //frame is not always a square so it includes empty space on either the sides or the top and bottom

    if(e.buttons == 1)
    {
        game.playerTryDropPiece(1);
    }

    else if(e.buttons == 16)
    {
        game.playerTryDropPiece(2);
    }

    /*screenLog.innerText = `${document.getElementById("frame").getBoundingClientRect().left}, ${document.getElementById("frame").getBoundingClientRect().y}
    Client X/Y: ${mouseX}, ${mouseY}`;*/

    

}

