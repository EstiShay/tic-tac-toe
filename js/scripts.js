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
      this.spaceArray.push(new Space(i,j));
    }
  }
};

function Space(x,y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
}



//UI logic
$(document).ready(function () {
  $(".box").click(function() {
    $(this).text("X");
  })
});
