var gridDiv = document.getElementById("grid-container");
console.log(gridDiv)

function setupGrid(size) {
    var fullsize = size * size;
    console.log(fullsize);
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

function changeGrid(){
    var golemina = prompt("Enter the new grid size:");
    console.log(golemina)
    setupGrid(golemina);
}

window.onload = setupGrid(16);



