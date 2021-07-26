const squares = document.getElementsByClassName('square');

console.log(squares);

var color = 'red';

function changeBackgroundColor (event, k) {
  let tempColor = this.style.backgroundColor;
  if((tempColor !== color))
    this.style.backgroundColor = color;
  else
    this.style.backgroundColor = initialColor;
}

let initialColor0 = window.getComputedStyle(squares[0]).backgroundColor;

for (var i = 0; i < squares.length; i++) {
  let initialColor = window.getComputedStyle(squares[i]).backgroundColor;
  squares[i].addEventListener("mouseover", function () {
    let tempColor = this.style.backgroundColor;
    if((tempColor !== color))
      this.style.backgroundColor = color;
    else
      this.style.backgroundColor = initialColor;
  });
}


const btnReset = document.getElementsByClassName('btn-reset')[0];
const btnReset2 = document.getElementsByClassName('btn-reset2')[0];
const modal = document.getElementsByClassName('modal')[0];
const btnSizes = document.getElementsByClassName('btn-size');




btnReset2.addEventListener('click', function () {
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add('transition-bgc--fast');
    squares[i].style.backgroundColor = initialColor0;
  }
  modal.style.display = 'block';
})

btnReset2.addEventListener('click', function () {
  setTimeout(function() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].classList.remove('transition-bgc--fast');
    }
  }, 300)
})

const sizes = [10, 50, 96];

function fun() {

  for(var i = 0; i <= 2; i++) {
    let temp = sizes[i];
    btnSizes[i].addEventListener('click', function () {
      // modal.style.display = 'none';
      var newGridCapacity = temp;
      var actualGrid = document.getElementsByClassName('grid')[0];
      var newSquareSize = parseInt(window.getComputedStyle(actualGrid).width) / newGridCapacity;
      console.log(newSquareSize);
      resizeGrid();
      function resizeGrid(size) {
        let actualGridRows = document.getElementsByClassName('grid-row');
        let actualGridRowsSize = actualGridRows.length;
        let row = actualGridRows[0].cloneNode([true]);
        let extension = newGridCapacity - actualGridRowsSize;
        // enlargeGrid();
        resizeSquare();


        function resizeSquare() {
          for( i = 0; i <= actualGridRows.length - 1; i++) {
            let tempGrid = actualGridRows[i];
            let squares = tempGrid.getElementsByClassName('square');
            tempGrid.style.height = '1px';
            tempGrid.style.marginBottom = '1px'   ;
            for( j = 0; j <= actualGridRows.length - 1; j++) {
              squares[j].style.width = '1px'   ;
              squares[j].style.height = '1px'   ;
            }
          }
        }

        function enlargeGrid() {
          let square = actualGridRows[0].getElementsByClassName('square')[0].cloneNode();
          console.log(square);
          for( i = 0; i <= actualGridRowsSize - 1; i++) {
            for( j = 0; j <= extension - 1; j++) {
              actualGridRows[i].appendChild(square);
              square = square.cloneNode();
            }
          }
        }
      }
    })
  }
}

fun();
// document.getElementsByClassName('grid')[0].appendChild(row);


