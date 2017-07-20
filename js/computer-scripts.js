//Business logic

//Create Board constructor to hold Space objects
function Board() {
  this.spaceArray = [];
}

//Create Space constructor with X and Y coordinates, the cell name matching the div's cell id, and the player who had clicked that space
function Space(x,y,cell) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.cell = cell;
  this.player = '';
}

//Creates spaces using the Space constructor and pushes them to the array in the Board constructor
Board.prototype.spaceCreation = function() {
  for (var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      var newCellName = "cell" + i + "" + j;
      this.spaceArray.push(new Space(i,j, newCellName));
    }
  }
};

//Evaluates whether this play is the winning play
Board.prototype.isWonX = function(player) {
  var playedSpaces = [];
  this.spaceArray.forEach(function(aSpace) {
    if (aSpace.player === 'X') {
      playedSpaces.push(aSpace);
    }
  });
  return checkPlay(playedSpaces);
};

Board.prototype.isWonO = function(player) {
  var playedSpaces = [];
  this.spaceArray.forEach(function(aSpace) {
    if (aSpace.player === 'O') {
      playedSpaces.push(aSpace);
    }
  });
  return checkPlay(playedSpaces);

};

function checkPlay(playedSpaces) {
  var evalXCoordinates = [];
  var evalYCoordinates = [];
  var gameOver = false;

  //Check for winning combo on X axis
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
  }
  //Check for winning combo on Y axis
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
  }
  //Check for diagonal: \ (back slant)
  var match = 0;
  for (var i = 0; i < playedSpaces.length; i += 1){
    if (playedSpaces[i].xCoordinate === playedSpaces[i].yCoordinate) {
      match += 1;
    }
  }
  if (match === 3) {
    gameOver = true;
  }
  //Check for diagonal: / (forward slant)
  var sum = 0;
  for (var i = 0; i < playedSpaces.length; i += 1){
    if (playedSpaces[i].xCoordinate + playedSpaces[i].yCoordinate === 2) {
      sum += 1;
    }
  }
  if (sum === 3) {
    gameOver = true;
  }
  return gameOver;
};

//Generate random coordinates for computer player
function randomSpace() {
  var xCoord = Math.floor(Math.random() * 3);
  var yCoord = Math.floor(Math.random() * 3);
  var newCell = "cell" + xCoord + "" + yCoord;
  var computerSelection = new Space(xCoord, yCoord, newCell);
  return computerSelection;
}


//UI logic
$(document).ready(function () {

  var ourBoard = new Board();
  var boardArray = ourBoard.spaceCreation();
  var playerTurn = "X";

  $(".box").click(function() {
    console.log(this);
    for (var i = 0; i < ourBoard.spaceArray.length; i++) {
      if (ourBoard.spaceArray[i].cell === this.id) {
        if (ourBoard.spaceArray[i].player !== '') {
          alert("That space has already been played. Pick a different space.");
        } else {
          $(this).text("X");
          for (var i = 0; i < ourBoard.spaceArray.length; i++) {
            if (ourBoard.spaceArray[i].cell === this.id) {
              ourBoard.spaceArray[i].player = 'X';
            }
          }
          var gameStatus = ourBoard.isWonX();
          if (gameStatus === true) {
            $("h4").append(" Player X won!");
            $(".img").show();
          } else {
            playerTurn = "O";
          }
        }
      }
    }
  });
  $("#computer-play").click(function() {
    var computerSpace = randomSpace();

    for (var i = 0; i < ourBoard.spaceArray.length; i++) {
      if (ourBoard.spaceArray[i].cell === computerSpace.cell) {
        if (ourBoard.spaceArray[i].player !== '') {
          alert("That space has already been played. Pick a different space.");
        } else {
          var playCell = "#" + computerSpace.cell;
          $(String(playCell)).text("O");
          for (var i = 0; i < ourBoard.spaceArray.length; i++) {
            if (ourBoard.spaceArray[i].cell === computerSpace.cell) {
              ourBoard.spaceArray[i].player = 'O';
            }
          }
          var gameStatus = ourBoard.isWonO();
          if (gameStatus === true) {
            $("h4").append(" Player O won!");
            $(".img").show();
          } else {
            playerTurn = "X";
          }
        }
      }
    }
  });
});
