/*
  TODO:
  ✅ Game start screen
  ✅ Measure time from starting of first typing to finish time and calculate WPM (word per minute)
  ✅ Come up with more set of sentence or words and randomly generate it
  ✅ Leaderboard with name and score
  more detailed start screen -- animate 'terrific typing tutor' as if someone was typing it
  transition
    ✅ fade out start screen & game over
    transition out game start
    transition in sentence
    transition in game end
    transition out game end
  ✅ improve wpm time -- only start timer once user starts typing
  ✅ Dark Mode
  ✅ enter -> starts typing test
  Be creative!
  see monkeytype for more inspo
*/

/*
  animate start screen

  create function (sentenceBox, key) that alters html

  async function
    for loop
    random wait
    change class
*/

const $sentenceBox = document.querySelector('.sentence');
const $gameOverDisplay = document.querySelector('.game-over');
const $startScreen = document.querySelector('.start-screen')
const $newGameBtn = document.querySelector('.new-game-btn');
const $btnsWrapper = document.querySelector('.buttons-wrapper')

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

function delay(time) {
  return new Promise(r => setTimeout(r, time))
}

async function newGame() {
  $startScreen.classList.add('fade-out')
  $btnsWrapper.classList.add('fade-out')
  $gameOverDisplay.classList.add('fade-out')
  await delay(300); // 250ms delay to allow for animations 

  // Game Setup
  [$startScreen, $btnsWrapper, $gameOverDisplay, $scoreboard].forEach(e => e.classList.add('hidden'));
  $gameOverDisplay.textContent = '';
  $scoreboardBtn.textContent = 'Show Scoreboard'
  const { chars, sentence } = await generateSentence(1)
  let startTime; // start timer on first keypress

  // listen for keypress -> respond to correct & wrong keypress
  let $htmlChar = document.querySelector('.char:not(.correct)');
  let targetChar = $htmlChar.textContent;
  let userTypeCount = 0;

  document.addEventListener('keydown', ({ key }) => {

    // ignore backspace / enter keypress
    if (key !== 'Backspace' && key !== 'Enter' ) {
      userTypeCount++;
    }

    // start wpm timer on first keypress
    if (userTypeCount === 1) {
      startTime = window.performance.now()
    }

    // if $htmlChar exists then game is ongoing. 
    if ($htmlChar) {
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
          scores.unshift({ 
            date: new Date(),
            accuracy: typingAccuracy, 
            wpm: wpm})
          // display
          $sentenceBox.classList.add('hidden')
          $gameOverDisplay.className = 'game-over';
          $gameOverDisplay.innerHTML = `Congrats, you win! 🎉<br />You're typing accuracy was ${typingAccuracy}%<br />You typed at ${wpm} words per minute.`;
          $newGameBtn.textContent = 'Play Again?';
          $btnsWrapper.classList.remove('hidden', 'fade-out');
        }
      }
    }
  });
}



// Basic DOM + start game event listener on button

$newGameBtn.addEventListener('click', newGame)
document.addEventListener('keydown', ({key}) => {
  if (key === 'Enter' && $sentenceBox.className !== 'sentence') newGame()
})

// Dark mode
const $darkModeBtn = document.querySelector('.dark-mode-btn')
$darkModeBtn.addEventListener('click', () => document.body.classList.toggle('dark'))

/*
Scoreboard
  leaderboard = empty array, global
  game end
    push { accuracy, wpm, time of finish } to array
  button -> onclick -> show leaderboard via removing hidden class

  leaderboard display
    leaderboard container, flex, column, full width
      entry, flex, space around
        time of finish
        wpm
        accuracy
*/
const scores = []
const $scoreboard = document.querySelector('.scoreboard')
const $scoreboardEntries = document.querySelector('.scoreboard-entries')
const $scoreboardBtn = document.querySelector('.scoreboard-btn')

function displayScoreboard() {
  $scoreboard.classList.toggle('hidden')
  $gameOverDisplay.classList.add('hidden')
  const scoreboardVisible = !$scoreboard.classList.contains('hidden')
  if (scoreboardVisible) {
    const scoreboardEntriesHtml = scores.map(({date, accuracy, wpm}) => (
      `<div class='scoreboard-entry'>
      <span>${date.toLocaleString()}</span>
      <span>${accuracy}</span>
      <span>${wpm}</span>
      </div>`
    )).slice(0,10).join('') // only display 10 most recent scores
    $startScreen.classList.add('hidden')
    $scoreboardEntries.innerHTML = scoreboardEntriesHtml
    $scoreboardBtn.textContent = "Hide Scoreboard"
  } else {
    $scoreboardBtn.textContent = "Show Scoreboard"
    $startScreen.classList.remove('hidden', 'fade-out')
  }
}

$scoreboardBtn.addEventListener('click', displayScoreboard)

/*
  fade out
*/
const $fadeOutBtn = document.querySelector('.fade-out-btn')
$fadeOutBtn.addEventListener('click', () => {
  $startScreen.classList.toggle('fade-out')
})

/*
  scoreboard visible = 'hide scoreboard'
  
*/
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