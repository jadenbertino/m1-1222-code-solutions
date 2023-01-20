/*
  TODO:
  ✅ Game start screen
  ✅ Measure time from starting of first typing to finish time and calculate WPM (word per minute)
  ✅ Come up with more set of sentence or words and randomly generate it
  Leaderboard with name and score
  Time-attack mode (sentence fades away)
  hide sentence upon game end
  transition
    transition out game start
    transition in sentence
    transition in game end
    transition out game end
  Dark Mode
  Be creative!
*/

async function generateSentence(length) {
  const sentence = await fetch(`https://random-word-api.herokuapp.com/word?number=${length}`).then(data => data.json())
  const chars = sentence.join(' ').split('')
  const displayHtml = chars.map((char, i) => {
    if (i) { return `<span class="char">${char}</span>` }
    return `<span class="char active">${char}</span>`; // first char should have active class
  }).join('');
  $sentenceBox.innerHTML = displayHtml;
  return { chars, sentence }
}

async function newGame() {
  await new Promise(r => setTimeout(r, 250)); // 250ms delay to allow for button animation 
  // Game Setup
  console.log('new game')
  $startScreen.classList.add('hidden')
  $gameOverDisplay.classList.remove('game-over-active')
  $newGameBtn.classList.add('hidden');
  $gameOverDisplay.textContent = '';
  const { chars, sentence } = await generateSentence(2)
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
      // if $htmlChar exists then game is ongoing
      if (key !== targetChar) { 
        $htmlChar.className = 'char active incorrect';
      } else { 
        // hit the correct char
        $htmlChar.className = 'char correct';
        $htmlChar = document.querySelector('.char:not(.correct)');

        if ($htmlChar) {
          // more letters to go
          $htmlChar.className = 'char active';
          targetChar = $htmlChar.textContent;
        } 

        else if (!$htmlChar && !$gameOverDisplay.classList.contains('game-over-active')) { 
          // finished all letters, game is done
          const typingAccuracy = Math.floor(chars.length / userTypeCount * 100)
          const typingTimeInMinutes = (window.performance.now() - startTime) / 60000 // 60000 ms per minute
          const wpm = Math.floor(sentence.length / typingTimeInMinutes);
          $gameOverDisplay.innerHTML = `Congrats, you win! 🎉<br />You're typing accuracy was ${typingAccuracy}%<br />You typed at ${wpm} words per minute.`;
          $gameOverDisplay.className = 'game-over game-over-active';
          $newGameBtn.textContent = 'Play Again?';
          $newGameBtn.classList.remove('hidden');
        }
      }
    }
  });
}



const $sentenceBox = document.querySelector('.sentence');
const $gameOverDisplay = document.querySelector('.game-over');
const $startScreen = document.querySelector('.start-screen')
const $newGameBtn = document.querySelector('.new-game-btn');
$newGameBtn.addEventListener('click', newGame)
// TODO: enter -> starts typing test

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

/*
  scrape dictionary, story in array
  pick 20-30 random words
    sort array by Math.random() - 0.5
    index first 20- 30
  set sentence to that array of words
*/ 