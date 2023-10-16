var player1 = prompt("Player1: Enter your name, you will be blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player2: Enter your name, you will be red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $("table tr");

function reportWin(rowNum, colNum){
    console.log("you won starting at this row " + rowNum + " and " + colNum);
    console.log(rowNum);
    console.log(colNum);
}

//Thay đổi màu của button
function changeColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color", color);
}

//Trả về màu tại vị trí index row và col
function returnColor(rowIndex, colIndex){
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color");
}

//Kiểm tra hàng cuối cùng
function checkBottom(colIndex){
    var colorReport = returnColor(5, colIndex);
    for(var row = 5; row > -1; row --){
        colorReport = returnColor(row, colIndex);
        if(colorReport === 'rgb(128, 128, 128)'){
            return row;
        }
    }
}

//Kiểm tra màu của 4 ô phải giống nhau
function colorMatchCheck(one,two,three,four){
    return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

//Hàm này kiểm tra có 4 ô giống mày liên tiếp hay không (trong cùng một row) nếu có thì chiến thắng
function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
          console.log('horiz');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
}

//Hàm này kiểm tra có 4 ô giống mày liên tiếp hay không (trong cùng một col) nếu có thì chiến thắng
function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 3; row++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
          console.log('vertical');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
}

//Hàm này kiểm tra có 4 ô giống mày liên tiếp hay không (trong cùng một đường chéo) nếu có thì chiến thắng
function diagonalWinCheck() {
    for (var col = 0; col < 5; col++) {
      for (var row = 0; row < 7; row++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
          console.log('diag');
          reportWin(row,col);
          return true;
        }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
          console.log('diag');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
}

// Game End
function gameEnd(winningPlayer) {
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 7; row++) {
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
        $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
      }
    }
}

//Người chơi thứ nhất
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");

//Gắn sự kiện click cho button
$(document).ready(function(){
    $('.b button').on('click',function() {

    //Tìm phần tử gần nhất và lấy chỉ mục của nó 
    var col = $(this).closest("td").index();
    
    //Kiểm tra xem có phải hàng cuối cùng của cột không
    var bottomAvail = checkBottom(col);
    
    //Thay đổi màu của ô ở hàng cuối cùng của cột đã chọn
    changeColor(bottomAvail,col,currentColor);
    
    //Kiểm tra chiến thắng
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
        gameEnd(currentName);
    }
    
    currentPlayer = currentPlayer * -1 ;
    
    if (currentPlayer === 1) {
        currentName = player1;
        $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
        currentColor = player1Color;
    }else {
        currentName = player2
        $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
        currentColor = player2Color;
    }
    });
});

// let btn = $(".board");
// console.log(btn);

