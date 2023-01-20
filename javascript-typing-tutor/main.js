/*
  TODO:
  ✅ Game start screen
  ✅ Measure time from starting of first typing to finish time and calculate WPM (word per minute)
  ✅ Come up with more set of sentence or words and randomly generate it
  Leaderboard with name and score
  transition
    transition out game start
    transition in sentence
    transition in game end
    transition out game end
  Dark Mode
  ✅ enter -> starts typing test
  Be creative!
*/

async function generateSentence(length) {
  $sentenceBox.classList.remove('hidden')
  $sentenceBox.innerHTML = '<img class="sentence-loading-img" src="./loading.gif"/>';
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
  console.log('new game')
  await new Promise(r => setTimeout(r, 250)); // 250ms delay to allow for button animation 

  // Game Setup
  [$startScreen, $newGameBtn, $gameOverDisplay].forEach(e => e.classList.add('hidden'));
  $gameOverDisplay.textContent = '';
  const { chars, sentence } = await generateSentence(2)
  const startTime = window.performance.now();

  // listen for keypress -> respond to correct & wrong keypress
  let $htmlChar = document.querySelector('.char:not(.correct)');
  let targetChar = $htmlChar.textContent;
  let userTypeCount = 0;

  document.addEventListener('keydown', ({ key }) => {
    if (key !== 'Backspace' && key !== 'Enter' ) {
      userTypeCount++;
    }

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

        else if (!$htmlChar && $gameOverDisplay.className !== '.game-over') { 
          // finished all letters, game is done
          const typingAccuracy = Math.floor(chars.length / userTypeCount * 100)
          const typingTimeInMinutes = (window.performance.now() - startTime) / 60000 // 60000 ms per minute
          const wpm = Math.floor(sentence.length / typingTimeInMinutes);
          $sentenceBox.classList.add('hidden')
          $gameOverDisplay.className = 'game-over';
          $gameOverDisplay.innerHTML = `Congrats, you win! 🎉<br />You're typing accuracy was ${typingAccuracy}%<br />You typed at ${wpm} words per minute.`;
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
document.addEventListener('keydown', ({key}) => {
  if (key === 'Enter' && $sentenceBox.className !== 'sentence') newGame()
})
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