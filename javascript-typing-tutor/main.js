/*
  TODO:
  ✅ Game start screen
  ✅ Measure time from starting of first typing to finish time and calculate WPM (word per minute)
  Come up with more set of sentence or words and randomly generate it
  Leaderboard with name and score
  Time-attack mode (sentence fades away)
  Be creative!
*/
function newGame() {
  // Game Setup
  $startScreen.classList.add('hidden')
  $gameOverDisplay.classList.remove('game-over-active')
  $newGameBtn.classList.add('hidden');
  $gameOverDisplay.textContent = '';
  const sentence = 'yo' // "grumpy wizards make toxic brew";
  const chars = sentence.split('');
  const display = chars.map((char, i) => {
    if (i) { return `<span class="char">${char}</span>` }
    return `<span class="char active">${char}</span>`; // first char should have active class
  }).join('');
  $sentenceBox.innerHTML = display;
  const startTime = window.performance.now();

  // listen for keypress -> respond to correct & wrong keypress
  let $htmlChar = document.querySelector('.char:not(.correct)');
  let targetChar = $htmlChar.textContent;
  let userTypeCount = 0;
  let gameOver = false;

  document.addEventListener('keydown', ({ key }) => {
    if (key !== 'Backspace') {
      userTypeCount++;
    }
    gameOver = false;
    if ($htmlChar) {
      if (key === targetChar) { // correct key
        $htmlChar.className = 'char correct';
        $htmlChar = document.querySelector('.char:not(.correct)');
        if ($htmlChar) {
          $htmlChar.className = 'char active';
          targetChar = $htmlChar.textContent;
        } else { // finished all letters
          gameOver = true;
        }
      } else if (key !== targetChar) { // wrong key
        $htmlChar.className = 'char active incorrect';
      }
    }

    // game over
    if (gameOver && !$gameOverDisplay.classList.contains('game-over-active')) {
      const typingAccuracy = Math.floor(chars.length / userTypeCount * 100)
      const typingTime = Math.floor(window.performance.now() - startTime) / 1000
      const wpm = Math.floor((60 / typingTime) * sentence.length)
      $gameOverDisplay.innerHTML = `Congrats, you win! 🎉<br />You're typing accuracy was ${typingAccuracy}%<br />You typed at ${wpm} words per minute.`;
      $gameOverDisplay.className = 'game-over game-over-active';
      $newGameBtn.textContent = 'Play Again?';
      $newGameBtn.classList.remove('hidden');
    }
  });
}



const $sentenceBox = document.querySelector('.sentence');
const $gameOverDisplay = document.querySelector('.game-over');
const $startScreen = document.querySelector('.start-screen')
const $newGameBtn = document.querySelector('.new-game-btn');
$newGameBtn.addEventListener('click', newGame)
/* 
  event listener on button -> starts new game
  hide button
  do all stuff above
    game over -> return to end function
*/

// New Game

/*
  get activeHtmlChar via .char & (.pending OR .wrong)
  get currentChar via chars[0]

  if correct key
    remove from chars
    activeHtmlChar -> remove pending class, add 'correct' class
    set new activeHtmlChar & currentChar
  incorrect key
    activeHtmlChar -> remove pending class, add 'wrong' class
*/
