
function setupGrid() {
    for (var i=0;i<256;i++)
    {
            var newDiv = document.createElement('div');
            var grid = document.getElementById("container");
            newDiv.style.cssText = "border : 1px solid black; height: 30px; width: 30px"
            newDiv.addEventListener("mouseover", function (){
                this.style.cssText = "background-color: " + getColor();
            });
            grid.appendChild(newDiv);
    }
}

function getColor(){
    var color = document.getElementById("color").value;
    return color;
}
window.onload = setupGrid;

