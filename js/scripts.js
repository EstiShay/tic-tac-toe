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

Board.prototype.isWon = function(player) {
  var playedSpaces = [];
  this.spaceArray.forEach(function(aSpace) {
    if (aSpace.player === 'X') {
      playedSpaces.push(aSpace);
    }
  });

  var evalXCoordinates = [];
  var evalYCoordinates = [];
  gameOver = false;
  playedSpaces.forEach(function(aCoord) {
    evalXCoordinates.push(aCoord.xCoordinate);
  });
  var z = 0;
  var u = 0;
  var d = 0;

  for (var i = 0; i < playedSpaces.length; i += 1) {
    if (evalXCoordinates[i] === 0) {
      z += 1;
    } else if (evalXCoordinates[i] === 1) {
      u += 1;
    } else if (evalXCoordinates[i] === 2) {
      d += 1;
    }
  }
  if (z === 3 || u === 3 || d === 3) {
    gameOver = true;
    alert("game over");
  }

  playedSpaces.forEach(function(aCoord) {
    evalYCoordinates.push(aCoord.yCoordinate);
  });

  var z = 0;
  var u = 0;
  var d = 0;
  for (var i = 0; i < playedSpaces.length; i += 1) {
    if (evalYCoordinates[i] === 0) {
      ++z;
    } else if (evalYCoordinates[i] === 1) {
      u+= 1;
    } else if (evalYCoordinates[i] === 2) {
      d += 1;
    }
  }
  if (z === 3 || u === 3 || d === 3) {
    gameOver = true;
    alert("game over");
  }

  var match = 0;
  for (var i = 0; i < playedSpaces.length; i += 1){
    if (playedSpaces[i].xCoordinate === playedSpaces[i].yCoordinate) {
      match += 1;
    }
  }
  if (match === 3) {
    alert("game over");
    gameOver = true;
  }

  var sum = 0;
  for (var i = 0; i < playedSpaces.length; i += 1){
    if (playedSpaces[i].xCoordinate + playedSpaces[i].yCoordinate === 2) {
      sum += 1;
    }
  }
  if (sum === 3) {
    alert("game over");
    gameOver = true;
  }



  // return playedSpaces
};

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
    // alert(this.id);

    ourBoard.isWon();

  });
});
