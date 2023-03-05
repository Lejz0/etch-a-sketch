var gridDiv = document.getElementById("grid-container");
var initialSize = 16;
var currentSize = 16;
var ActiveEraser = false;
var singlesize;

function setupGrid(size) {
    var fullsize = size * size;
    singlesize = parseFloat(500/size)
    for (var i=0;i<fullsize;i++)
    {
            var newDiv = document.createElement('div');
            newDiv.style.border = "none";
            newDiv.style.height = singlesize + "px";
            newDiv.style.width= singlesize+ "px";
            newDiv.addEventListener("mouseover", function (){
                this.style.cssText = "background-color: " + getColor() + "; height: "+ singlesize + "px;  width: + " + singlesize + "px";
            });
            gridDiv.style.cssText = "grid-template-columns: repeat("+ size +", "+ singlesize +"px);"
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
    for (var i=0;i<gridDiv.childElementCount;i++)
    {
        gridDiv.children[i].style.backgroundColor = Canvascolor.value;
    }
})

function eraser(){
    for (var j=0;j<gridDiv.childElementCount;j++)
    {
    gridDiv.children[j].removeEventListener("mouseover", function(){
        this.style.cssText = "background-color: " + getColor() + "; height: "+ singlesize + "px;  width: + " + singlesize + "px";
    })
    gridDiv.children[j].addEventListener("mouseover", function (){
        this.style.backgroundColor = Canvascolor.value; 
    })
    }
    ActiveEraser = true;
}

function clearCanvas(){
    for (var i=0;i<gridDiv.childElementCount;i++)
    {
        gridDiv.children[i].style.backgroundColor = Canvascolor.value;
    }
}

var colorPicker = document.getElementById("color");
colorPicker.addEventListener("change", function () {
    if (ActiveEraser)
    {
    for (var j=0;j<gridDiv.childElementCount;j++)
    {
    gridDiv.children[j].removeEventListener("mouseover", function(){
        this.style.backgroundColor = Canvascolor.value; 
    })
    gridDiv.children[j].addEventListener("mouseover", function (){
        this.style.cssText = "background-color: " + getColor() + "; height: "+ singlesize + "px;  width: + " + singlesize + "px";
    })
    } 
    }
})

var slider = document.getElementById("rangeInput");
slider.addEventListener("change", function (){
    console.log("1")
})
window.onload = setupGrid(initialSize);



