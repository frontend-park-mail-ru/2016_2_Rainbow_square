/**
 * Created by alexey on 16.09.16.
 */
if (typeof exports === "object") {
    window.onload = function () {
        var h = 4;
        var w = 4;
        var stateCount = 3;
        var cells = [];

        window.onload = function () {
            var game = document.getElementById("game");
            game.style.width = game.style.height = "400px";
            for (var i = 0; i < h; i++) {
                cells[i] = [];
                for (var j = 0; j < w; j++) {
                    var cell = document.createElement('div');
                    cell.className = 'cell cell0';
                    // cell.innerHTML = 'g';
                    cell.id = cellName(j, i);
                    (function () {
                        var x = j, y = i;
                        cell.onclick = function () {
                            onClick(x, y);
                        };
                    })();
                    game.appendChild(cell);
                    cells[i][j] = 0;
                }
            }
        };

        function cellName(x, y) {
            return 'cell' + y + '-' + x;
        }

        function stateName(state) {
            return "cell" + state;
        }

        function onClick(x, y) {
            for (var i = y - 1; i <= y + 1; i++) {
                for (var j = x - 1; j <= x + 1; j++) {
                    incCell(j, i);
                }
            }
        }

        function incCell(x, y) {
            if (x < 0 || x >= w || y < 0 || y >= h)
                return;
            var cell = document.getElementById(cellName(x, y));
            cell.classList.remove(stateName(cells[y][x]));
            cells[y][x] = (cells[y][x] + 1) % stateCount;
            cell.classList.add(stateName(cells[y][x]));
        };
    }();
}
