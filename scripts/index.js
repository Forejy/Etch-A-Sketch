// const squares = document.getElementsByClassName('square');

// console.log(squares);
const btnReset = document.getElementsByClassName('circle')[0];
const btnReset2 = document.getElementsByClassName('circle')[0];
const btnSizes = document.getElementsByClassName('btn-size');
const initialColor = 'black';

var a = 0;
var colors = ['00', '00', '00'];

// MARK: Change Colors

function changeColors(rgb = ['00', '00', '00']) {
  var temp;
  var gap = 5;
  var rgb0 = parseInt(rgb[0], 16);
  var rgb1 = parseInt(rgb[1], 16);
  var rgb2 = parseInt(rgb[2], 16);

  if ((rgb0 > 0) && (rgb0 == rgb1) && (rgb1 == rgb2)) {
    console.log(rgb0);
    temp = rgb0 - gap;
    temp = temp <= 16 ? "0" + (rgb0 - gap).toString(16) : (rgb0 - gap).toString(16);
    rgb[0] = temp;
    rgb[1] = temp;
    rgb[2] = temp;

  }
  else if (rgb0 < 255 && (rgb1 == 0 || rgb1 == 255)) {
    temp = rgb0 + gap;
    rgb[0] = temp <= 16 ? ("0" + temp.toString(16)) : (temp.toString(16));
    console.log(rgb[0]);
  }
  else if (rgb1 < 255 && (rgb2 == 0 || rgb2 == 255)) {
    temp = rgb1 + gap;
    console.log(temp + 5);
    rgb[1] = temp <= 16 ? ("0" + temp.toString(16)) : (temp.toString(16));
    temp = rgb0 - gap;
    console.log(temp);
    rgb[0] = temp <= 16 ? ("0" + temp.toString(16)) : (temp.toString(16));
    console.log(rgb[0]);
  }
  else if (rgb2 < 255) {
    temp = rgb2 + gap;
    rgb[2] = temp <= 16 ? ("0" + temp.toString(16)) : (temp.toString(16));
    temp = rgb1 - gap;
    rgb[1] = temp <= 16 ? ("0" + temp.toString(16)) : (temp.toString(16));
  }

  return rgb;
}


function handleChangeBackgroundColor(squares = document.getElementsByClassName('square')){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      let tempColor = this.style.backgroundColor;
      if((tempColor !== colors)) {
        colors = (changeColors(colors));
        str = "#" + colors[0] + colors[1] + colors[2];
        console.log(str);
        // console.log("#" + colors);
        this.style.backgroundColor = "#" + colors[0] + colors[1] + colors[2];
        // this.style.backgroundColor = "#" + colors;
      }
      else
        this.style.backgroundColor = initialColor;
    });
  }
}

const modal = document.getElementsByClassName('modal')[0];

function atStartOfPage() {
  handleChangeBackgroundColor();
  handleResetEvents();
}

atStartOfPage();

// MARK: Handle Reset Events (+ modal)

function handleResetEvents() {
  let squares = document.getElementsByClassName('square');
  let len = squares.length;
  gridContainerHeight = parseInt(window.getComputedStyle(document.getElementsByClassName('grid-container')[0]).height);
  console.log((0.54 * 0.2933 * (gridContainerHeight - 25)) + "px");
  btnReset2.addEventListener('click', function handler1() {
    for (k = 0; k <= len - 1; k++) {
      squares[k].classList.add('transition-bgc--fast');
      squares[k].style.backgroundColor = initialColor;
    }
    for(i = 0; i <= 2; i++) {
      btnSizes[i].style.height = 0.54 * 0.2933 * (gridContainerHeight - 25) + "px";
    }
    modal.classList.add('modal-transition');

    // modal.style.width = 100;
    // modal.style.height = '100%';
    // this.removeEventListener('click', handler1);
  })

  btnReset2.addEventListener('click', function handler2() {
    setTimeout(function() {

      for(l = 0; l <= len - 1; l++) {
          squares[l].classList.remove('transition-bgc--fast');
          l++;
      }
    }, 300)
    this.removeEventListener('click', handler2);
  })
}



const sizes = [10, 50, 96];

function handleGridSize() {

  for(var i = 0; i <= 2; i++) {
    let temp = sizes[i];
    btnSizes[i].addEventListener('click', function () {
      modal.style.display = 'none';
      var newGridCapacity = temp;
      var actualGrid = document.getElementsByClassName('grid')[0];
      var newSquareSize = ((parseInt(window.getComputedStyle(actualGrid).width) / newGridCapacity) - 1) + 'px';
      console.log(newSquareSize);


      changeGridSize();

      function changeGridSize() {
        gridRow = actualGrid.firstChild.cloneNode();

        newGrid = actualGrid.cloneNode();
        actualGrid.remove();

        square = actualGrid.getElementsByClassName('square')[0].cloneNode();
        square.style.width = newSquareSize;
        square.style.height = newSquareSize;
        gridRow.style.height = newSquareSize;

        for(i = 1; i <= newGridCapacity; i++) {
          gridRow.append(square);
          square = square.cloneNode();
        }
        for(j = 1; j <= newGridCapacity; j++) {
          newGrid.append(gridRow);
          gridRow = gridRow.cloneNode(true);
        }
        document.getElementsByClassName('grid-container')[0].append(newGrid);
      }
      handleChangeBackgroundColor();
      handleResetEvents();
    })
  }
}

handleGridSize();
// document.getElementsByClassName('grid')[0].appendChild(row);


