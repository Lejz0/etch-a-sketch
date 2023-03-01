var gridDiv = document.getElementById("grid-container");
var initialSize = 16;
var currentSize = 16;

function setupGrid(size) {
    var fullsize = size * size;
    for (var i=0;i<fullsize;i++)
    {
            var newDiv = document.createElement('div');
            newDiv.style.cssText = "border : none; height: 30px; width: 30px"
            newDiv.addEventListener("mouseover", function (){
                this.style.cssText = "background-color: " + getColor() + "; height: 30px;  width: 30px";
            });
            gridDiv.style.cssText = "grid-template-columns: repeat("+ size +", 30px);"
            gridDiv.append(newDiv);
    }
}

function getColor(){
    var color = document.getElementById("color").value;
    return color;
}

function removeGrid(){
    for (var i=-1;i<(currentSize*currentSize);i++)
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

var Canvascolor = document.getElementById("background-color");
Canvascolor.addEventListener("change", function () {
    gridDiv.style.backgroundColor = Canvascolor.value;
})

function eraser(){
    for (var j=0;j<gridDiv.childElementCount;j++)
    {
    gridDiv.children[j].removeEventListener("mouseover", function(){
        this.style.cssText = "background-color: " + getColor() + "; height: 30px;  width: 30px";
    })
    gridDiv.children[j].addEventListener("mouseover", function (){
        this.style.backgroundColor = Canvascolor.value; 
    })
    }
}
window.onload = setupGrid(initialSize);



