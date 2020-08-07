/***** Modules *****/

// Game Board Module
const board = (() => {
  let gameboard = [];

  // Check for undefined values in array
  const empty = currVal => currVal === undefined;

  // Check for existence of values in array
  const full = (currVal, i, boardArr) => currVal in boardArr;

  // Find greatest occurance of string in gameboard
  const mode = array =>
    array.reduce(
      (a, b, i, arr) => {
        if (arr.filter(v => v === a).length > arr.filter(v => v === b).length) {
          return a;
        } else if (arr.filter(v => v === a).length < arr.filter(v => v === b).length) {
          return b;
        } else if (arr.filter(v => v === a).length === arr.filter(v => v === b).length) {
          return (a === 'O' ? a : b);
        }
      });

  // Reset gameboard
  const resetGameboard = () => {
    while (gameboard.length > 0) {
      console.log(gameboard);
      gameboard.pop();
    }
  }

  function hiddenBoard() {
    return gameboard;
  }

  function hiddenEmpty() {
    return empty;
  }

  function hiddenMode() {
    return mode;
  }

  function hiddenFull() {
    return full;
  }

  return {
    hiddenBoard,
    hiddenEmpty,
    hiddenMode,
    hiddenFull,
    resetGameboard
  };
})();

// Game Flow Module
const gameFlowController = (() => {
  const {
    hiddenEmpty,
    hiddenMode,
    hiddenBoard,
    hiddenFull,
    resetGameboard
  } = board;

  const boardArr = hiddenBoard();
  const mode = hiddenMode();
  const empty = hiddenEmpty();
  const full = hiddenFull();

  let movesLeft = [null, null, null, null, null, null, null, null, null];

  const pushGameboard = (elem, index, array) => {
    // If array element is not undefined return
    if (elem.innerText !== '') {
      return;
    }
    // Checks for empty array
    if (array.every(empty)) {
      movesLeft.pop();
      boardArr.push('X');
      elem.innerText = 'X';
    } /* Checks X > O */
    else if (mode(array) === 'X') {
      movesLeft.pop();
      boardArr.push('O');
      elem.innerText = 'O';
      if (movesLeft.length < 5 && movesLeft.length > 0) {
        player2.winningCondition('O');
      } else if (movesLeft.length === 0) {
        // Modal
        player2.winningCondition('O');
      }
    } /* Checks O > X */
    else if (mode(array) === 'O') {
      movesLeft.pop();
      boardArr.push('X');
      elem.innerText = 'X';
      if (movesLeft.length < 5 && movesLeft.length > 0) {
        player1.winningCondition('X');
      } else if (movesLeft.length === 0) {
        // Modal
        player1.winningCondition('X');
      }
    }
  }

  const resetMovesLeft = () => movesLeft = [null, null, null, null, null, null, null, null, null];

  return {
    pushGameboard,
    resetMovesLeft
  }
})();

// View Module
const view = (() => {
  const {
    pushGameboard,
    resetMovesLeft
  } = gameFlowController;

  const {
    hiddenBoard,
    resetGameboard
  } = board;

  const modal = document.querySelector('.modal');
  const winnerName = document.querySelector('#winner');
  const modalContainer = document.querySelector('#container2');
  const player1Score = document.querySelector("#player1score");
  const compScore = document.querySelector('#player2score');
  const winnerScore = document.querySelector('#score');
  const button = document.querySelector('button');
  const tab = document.querySelector('.tab');
  const boardArr = hiddenBoard();
  const playTxt = document.querySelector('#play');
  const inputs = document.querySelectorAll('input');
  const menu = document.querySelector('.menu');
  const banner = document.querySelector('.scale-up-ver-bottom');
  const textInputs = document.querySelectorAll('input[type="text"]');
  const pvp = document.querySelector('#pvp');
  const pvc = document.querySelector('#pvc');
  const p1TextBox = document.querySelector('#p1name');
  const p2TextBox = document.querySelector('#p2name');
  const p1ScoreboardName = document.querySelector('#player1name');
  const p2ScoreboardName = document.querySelector('#player2name');
  const textInputsArr = [...textInputs];
  const playButton = document.querySelector('#play-button');
  const menuContainer = document.querySelector('#container1');

  // Scoreboard
  const updateScoreboard = (piece, score) => {
    if (piece === 'O') {
      compScore.innerText = score;
    } else if (piece === 'X') {
      player1Score.innerText = score;
    } else {
      return;
    }
  }

  // Modal
  const showWinner = (name, score) => {
    modalContainer.style.display = 'block';
    winnerName.innerText = name;
    winnerScore.innerText = score;
    document.onkeydown = evt => {
      if (evt.keyCode === 27) {
        modalContainer.style.display = 'none';
        reset();
      }
    }
    button.onclick = () => {
      modalContainer.style.display = 'none';
      reset();
    }

  }

  // toggle show & hide
  const show = (elem) => {
    elem.classList.replace("hide", "show");
  }

  const hide = (elem) => {
    elem.classList.replace("show", "hide");
  }

  // Squares
  const squares = document.querySelectorAll('.square');
  // Change Nodelist to array to grab index
  const squaresArr = [...squares];

  squaresArr.forEach(square => {
    square.addEventListener('click', pushGameboard.bind(square, square, squaresArr.indexOf(square), boardArr));
  });

  // Reset
  const reset = () => {
    // reset gameboard & movesLeft array
    resetGameboard();
    resetMovesLeft();
    squaresArr.forEach(square => square.innerText = '');
  }

  // Add retracting animation
  tab.addEventListener('mouseout', () => tab.classList.add('scale-down-bottom'));

  // Keep play text visible
  playTxt.addEventListener('mouseout', () => playTxt.classList.add('fadeOut'));

  // Show menu
  tab.addEventListener('click', () => {
    window.setTimeout(() => {
      menu.style.display = 'block';
      menu.classList.add('fade-in');
    }, 1000);
    banner.classList.add('banner');
  })

  // Make text inputs visible when player button is clicked
  // Change text input value to blank on focus
  pvp.addEventListener('click', () => {
    textInputsArr.forEach(input => {
      input.onclick = () => {
        if (input.value === `Player ${textInputsArr.indexOf(input) + 1} Name`) {
          input.value = ""
        } else {
          return;
        }
      };
      input.onblur = () => {
        if (input.value === "") {
          input.value = `Player ${textInputsArr.indexOf(input) + 1} Name`;
        }
      }
      input.style.visibility = 'visible';
      input.classList.add('fade-in');
    })
    if (p2TextBox.classList.contains('fade-out')) {
      p2TextBox.classList.replace('fade-out', 'fade-in');
    }
  });

  // Hides second player name input when vs'ing computer
  pvc.addEventListener('click', () => {
    if (p2TextBox.style.visibility === 'visible') {
      p2TextBox.classList.replace('fade-in', 'fade-out');
      window.setTimeout(() => p2TextBox.style.visibility = 'hidden', 1200);
    }
  })

  // Submitting names / difficulty & fading out menu
  playButton.addEventListener('click', () => {
    menuContainer.classList.add('fade-out');
    window.setTimeout(() => menuContainer.style.display = 'none', 1200);
    // change names
    p1ScoreboardName.innerText = p1TextBox.value;
    p2ScoreboardName.innerText = p2TextBox.value;
    player1 = Player('X', p1TextBox.value);
    if (p2TextBox.value === "Player 2 Name") {
      player2 = Player('O', 'Computer')
    } else {
      player2 = Player('O', p2TextBox.value);
    }
    window.setTimeout(() => {
      p1TextBox.value = 'Player 1 Name';
      p2TextBox.value = 'Player 2 Name';
    }, 2400);
  });


  return {
    showWinner,
    updateScoreboard,
    reset,
    show,
    hide
  }
})();

/***** Factory Functions *****/

// Player Factory Function
const Player = (piece, name) => {
  let score = 0;

  const {
    hiddenBoard,
    hiddenFull
  } = board;

  const {
    showWinner,
    updateScoreboard,
    show,
    hide
  } = view;

  const boardArr = hiddenBoard();
  const full = hiddenFull();
  const getName = () => name;
  const getScore = () => score;
  const upScore = () => score++;
  const getPiece = () => piece;

  // Squares
  const squares = document.querySelectorAll('.square');
  // Change Nodelist to array to grab index
  const squaresArr = [...squares];

  const winningCondition = piece => {
    const tieDiv = document.querySelector('.tie');
    const winDiv = document.querySelector('.win');

    if ((squaresArr[0].innerText === piece && squaresArr[1].innerText === piece && squaresArr[2].innerText === piece) ||
      (squaresArr[3].innerText === piece && squaresArr[4].innerText === piece && squaresArr[5].innerText === piece) ||
      (squaresArr[6].innerText === piece && squaresArr[7].innerText === piece && squaresArr[8].innerText === piece) ||
      (squaresArr[0].innerText === piece && squaresArr[4].innerText === piece && squaresArr[8].innerText === piece) ||
      (squaresArr[2].innerText === piece && squaresArr[4].innerText === piece && squaresArr[6].innerText === piece) ||
      (squaresArr[0].innerText === piece && squaresArr[3].innerText === piece && squaresArr[6].innerText === piece) ||
      (squaresArr[1].innerText === piece && squaresArr[4].innerText === piece && squaresArr[7].innerText === piece) ||
      (squaresArr[2].innerText === piece && squaresArr[5].innerText === piece && squaresArr[8].innerText === piece)) {
      upScore();
      showWinner(getName(), getScore());
      updateScoreboard(getPiece(), getScore())
      if (winDiv.classList.contains('hide')) {
        showWinner(getName(), getScore());
        show(winDiv);
        hide(tieDiv);
      }
    } else if (boardArr.length === 9) {
      if (winDiv.classList.contains('show')) {
        showWinner(getName(), getScore());
        show(tieDiv);
        hide(winDiv);
      }
    } else {
      void(0);
    }
  }

  // Player can splice element in board array
  function boardSplice(index, piece) {
    boardArr.splice(index, 1, piece);
  }

  return {
    upScore,
    boardSplice,
    winningCondition,
    getName,
    getScore,
    getPiece
  };
}

let player1 = Player('X', 'Ninja');
let player2 = Player('O', 'Computer');
/*
  Eventlistener on squares listening for a click & adds either X or O value to square
  If X or O value is present don't allow the click to produce a value

  Player 1 = X
  Player 2 = O
  If player 1 clicks on square add X
  If player 2 clicks on square add O


*/