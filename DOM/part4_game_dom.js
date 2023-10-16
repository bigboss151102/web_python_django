var restar = document.querySelector("#b");
var squares = document.querySelectorAll("td");

function clearBoard(){
    for(var i=0; i < squares.length; i++){
        squares[i].textContent = " ";
    }
}

restar.addEventListener("click", clearBoard)

function changegMaker(){
    if(this.textContent === " "){
        this.textContent = "X";
    }else if(this.textContent === "X"){
        this.textContent = "O";
    }else {
        this.textContent = " ";
    }
}

for(var i = 0; i<squares.length; i++){
    squares[i].addEventListener("click", changegMaker)
}