var gridDiv = document.getElementById("grid-container");
var initialSize = 16;
var currentSize = 16;

function setupGrid(size) {
    var fullsize = size * size;
    for (var i=0;i<fullsize;i++)
    {
            var newDiv = document.createElement('div');
            newDiv.style.cssText = "border : 1px solid black; height: 30px; width: 30px"
            newDiv.addEventListener("mouseover", function (){
                this.style.cssText = "background-color: " + getColor();
            });
            gridDiv.append(newDiv);
    }
}

function getColor(){
    var color = document.getElementById("color").value;
    return color;
}

function removeGrid(){
    for (var i=0;i<(currentSize*currentSize);i++)
    {
        gridDiv.removeChild(gridDiv.firstChild);
    }
}

function changeGrid(){
    nextSize = prompt("Enter the new grid size:");
    removeGrid();
    setupGrid(nextSize);
    currentSize = nextSize;
}

window.onload = setupGrid(initialSize);



