function newGame() {
  // Game Setup
  $newGameBtn.classList.add('hidden');
  $gameOverDisplay.textContent = '';
  const sentence = "grumpy wizards make toxic brew";
  const chars = sentence.split('');
  const display = chars
    .map((char, i) => {
      if (i) {
        return `<span class="char">${char}</span>`;
      }
      return `<span class="char active">${char}</span>`; // first char should have active class
    })
    .join('');
  $sentenceBox.innerHTML = display;

  // listen for keypress -> respond to correct & wrong keypress
  let $htmlChar = document.querySelector('.char');
  let targetChar = $htmlChar.textContent;
  let userTypeCount = 0;

  document.addEventListener('keydown', ({ key }) => {
    userTypeCount++;
    if (key === targetChar && $htmlChar) {
      $htmlChar.className = 'char correct';
      $htmlChar = document.querySelector('.char:not(.correct)');
      if ($htmlChar) {
        $htmlChar.className = 'char active';
        targetChar = $htmlChar.textContent;
      }
    } else if (key !== targetChar && $htmlChar) {
      $htmlChar.className = 'char active incorrect';
    }
    // game over
    if (
      !$htmlChar &&
      $gameOverDisplay.className !== 'game-over game-over-active'
    ) {
      $gameOverDisplay.textContent = `Congrats, you win! You're typing accuracy was ${Math.floor(
        (chars.length / userTypeCount) * 100
      )}% 🎉`;
      $gameOverDisplay.className = 'game-over game-over-active';
      $newGameBtn.textContent = 'Play Again?';
      $newGameBtn.classList.remove('hidden');
      return null
    }
  });
}



const $sentenceBox = document.querySelector('.sentence');
const $gameOverDisplay = document.querySelector('.game-over');

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
