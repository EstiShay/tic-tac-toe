//Business logic
function Player(mark) {
  this.mark = mark;
}

function Board() {
  this.spaceArray = [];
}

Board.prototype.spaceCreation = function() {
  for (var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      var newCellName = "cell" + i + "/" + j;
      this.spaceArray.push(new Space(i,j, newCellName));
    }
  }
};

// Board.prototype.isWon = function(player) {
//   spaceArray.forEach...
//   if () {
//
//     }
//   }
// };

function Space(x,y,cell) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.cell = cell;
  this.player = '';
}



//UI logic
$(document).ready(function () {

  var ourBoard = new Board();
  var boardArray = ourBoard.spaceCreation();

  $(".box").click(function() {

    $(this).text("X");

    for (var i = 0; i < ourBoard.spaceArray.length; i++) {
      if (ourBoard.spaceArray[i].cell === this.id) {
        ourBoard.spaceArray[i].player = 'X';
      }
    }
    console.log(ourBoard.spaceArray);

    // alert(this.id);
  })
});
