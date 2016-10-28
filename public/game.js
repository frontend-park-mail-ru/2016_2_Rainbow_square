var h = 4;
var w = 4;
var stateCount = 3;
var cells = [];
var stepCount;

window.onload = function () {
  var game = document.getElementById("game");
  for (var i = 0; i < h; i++) {
    cells[i] = [];
    for (var j = 0; j < w; j++) {
      var cell = document.createElement('div');
      cell.className = 'cell cell0';
      cell.id = cellName(j, i);
      (function (x,y) {
        cell.onclick = function() { onClick(x,y); };
      })(j,i);
      game.appendChild(cell);
      cells[i][j] = 0;
    }
  }

  newGame(7);
  var newGameBtn = document.getElementById('newGame');
  newGameBtn.onclick = function () {
    newGame(2);
  }

}

function cellName(x,y) {
  return 'cell' + y + '-' + x;
}

function stateName(state) {
  return "cell" + state;
}

function onClick(x,y) {
  incAroundCell(x,y);
  stepCount++;
  updateStepCount();
  if (checkFinish()) {
    alert('You win!!!');
  }
}

function incAroundCell(x,y) {
  for (var i = y - 1; i <= y + 1; i++) {
    for (var j = x - 1; j <= x + 1; j++) {
      incCell(j, i);
    }
  }
}

function incCell(x,y) {
  if (x < 0 || x >= w || y < 0 || y >= h)
    return;
  var cell = document.getElementById(cellName(x,y));
  cell.classList.remove(stateName(cells[y][x]));
  cells[y][x] = (cells[y][x] + 1) % stateCount;
  cell.classList.add(stateName(cells[y][x]));
}

function setState(x,y,newState) {
  if (x < 0 || x >= w || y < 0 || y >= h)
    return;
  var cell = document.getElementById(cellName(x,y));
  cell.classList.remove(stateName(cells[y][x]));
  cells[y][x] = newState;
  cell.classList.add(stateName(cells[y][x]));
}

function newGame(difficulty) {
  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      setState(j,i,0);
    }
  }
  for (var i = 0; i < difficulty; i++) {
    var x = Math.floor(Math.random()*w);
    var y = Math.floor(Math.random()*h);

    for (var t = 0; t < stateCount-1; t++) {
      incAroundCell(x,y);
    }
  }
  stepCount = 0;
  updateStepCount();
}

function checkFinish() {
  var prev;
  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      if (prev === undefined)
        prev = cells[i][j];
      if (cells[i][j] != prev)
        return false;
    }
  }
  return true;
}

function updateStepCount() {
  document.getElementById('stepCount').innerHTML = stepCount;
}
