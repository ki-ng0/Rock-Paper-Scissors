const score = JSON.parse(localStorage.getItem('score'));

function playGame(param) {
  let results = '';
  const move = myGame();

  if (param === 'Scissors') {

    if (move === 'Rock') {
      document.querySelector('.moves').classList.add('red');
      document.querySelector('.moves').classList.remove('green');
      results = 'You lose.';
    } else if (move === 'Paper') {
      document.querySelector('.moves').classList.remove('red');
      document.querySelector('.moves').classList.add('green');
      results = 'You win.';
    } else if (move === 'Scissors') {
      document.querySelector('.moves').classList.remove('green');
      document.querySelector('.moves').classList.remove('red');
      results = 'Tie.';
    }
  } else if (param === 'Paper') {

    if (move === 'Rock') {
      document.querySelector('.moves').classList.remove('red');
      document.querySelector('.moves').classList.add('green');
      results = 'You win.';
    } else if (move === 'Paper') {
      document.querySelector('.moves').classList.remove('green');
      document.querySelector('.moves').classList.remove('red');
      results = 'Tie.';
    } else if (move === 'Scissors') {
      document.querySelector('.moves').classList.add('red');
      document.querySelector('.moves').classList.remove('green');
      results = 'You lose.';
    }
  } else if (param === 'Rock') {

    if (move === 'Rock') {
      document.querySelector('.moves').classList.remove('green');
      document.querySelector('.moves').classList.remove('red');
      results = 'Tie.';
    } else if (move === 'Paper') {
      document.querySelector('.moves').classList.add('red');
      document.querySelector('.moves').classList.remove('green');
      results = 'You lose.';
    } else if (move === 'Scissors') {
      document.querySelector('.moves').classList.remove('red');
      document.querySelector('.moves').classList.add('green');
      results = 'You win.';
    }
  }
  if (results === 'You win.') {
    score.wins = score.wins + 1
  } else if (results === 'You lose.') {
    score.looses = score.looses + 1
  } else if (results === 'Tie.') {
    score.ties = score.ties + 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.moves').innerHTML = results;
  document.querySelector('.text').innerHTML = `YOU:<img src="images/${param}.png" class="rock-image2"><img src="images/${move}.png" class="rock-image2"> :Computer`;
  gameResult()
}

function gameResult() {
  document.querySelector(`.result`).innerHTML = `Wins:${score.wins}, Looses:${score.looses}, Ties:${score.ties}`;
}

function myGame() {
  const computerMove = Math.random();

  let move = '';

  if (computerMove >= 0 && computerMove < 1 / 3) {
    move = 'Rock';
  } else if (computerMove >= 1 / 3 && computerMove < 2 / 3) {
    move = 'Paper';
  } else if (computerMove >= 2 / 3 && computerMove < 1) {
    move = 'Scissors';
  }
  return move;
}