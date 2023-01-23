/*
  TODO:
  ✅ Game start screen
  ✅ Measure time from starting of first typing to finish time and calculate WPM (word per minute)
  ✅ Come up with more set of sentence or words and randomly generate it
  ✅ Leaderboard with name and score
  more detailed start screen -- animate 'terrific typing tutor' as if someone was typing it
  transitions
    ✅ fade out start screen & game over
    fade in game over + buttons
    fade in sentence
    transition out game start
    transition in sentence
    transition in game end
    transition out game end
    scoreboard fade in out
    start screen fade in (from scoreboard)
  ✅ improve wpm time -- only start timer once user starts typing
  ✅ Dark Mode
  ✅ enter -> starts typing test
  Be creative!
  see monkeytype for more inspo
  clean up code 
    for each
    create fade out function
  choose number of words
*/

/*
  animate start screen

  create function (sentenceBox, key) that alters html

  async function
    for loop
    random wait
    change class
*/

// DOM``
const $sentenceBox = document.querySelector('.sentence');
const $gameOverDisplay = document.querySelector('.game-over');
const $startScreen = document.querySelector('.start-screen')
const $newGameBtn = document.querySelector('.new-game-btn');
const $scoreboardBtn = document.querySelector('.scoreboard-btn')
const $darkModeBtn = document.querySelector('.dark-mode-btn')
const $scoreboard = document.querySelector('.scoreboard')
const $scoreboardEntries = document.querySelector('.scoreboard-entries')

async function generateSentence(length) {
  // loading icon
  $sentenceBox.innerHTML = '<img class="sentence-loading-img" src="./loading.gif"/>';
  await fadeIn($sentenceBox)
  await delay(300) // ensure loading icon is visible at least for a small amount of time

  // generate sentence
  const sentence = await fetch(`https://random-word-api.herokuapp.com/word?number=${length}`).then(data => data.json())
  const chars = sentence.join(' ').split('')
  const displayHtml = chars.map((char, i) => i ? `<span class="char">${char}</span>` : `<span class="char active">${char}</span>`).join('')

  // fade loading icon out upon sentence load
  $sentenceBox.classList.add('fade-out') 
  await delay(400)

  // fade sentence in 
  $sentenceBox.innerHTML = displayHtml;
  $sentenceBox.classList.remove('fade-out')

  return { chars, sentence }
}

function delay(time) {
  return new Promise(r => setTimeout(r, time))
}

async function fadeOut(...elems) {
  elems.forEach(e => e.classList.add('fade-out'))
  await delay(400)
  elems.forEach(e => e.classList.add('hidden'))
}

async function fadeIn(...elems) {
  elems.forEach(e => e.classList.remove('hidden'))
  await delay(50)
  elems.forEach(e => e.classList.remove('fade-out'))
}

async function newGame() {

  // Game Setup
  await fadeOut($startScreen, $newGameBtn, $sentenceBox, $scoreboardBtn, $gameOverDisplay, $scoreboard)
  const { chars, sentence } = await generateSentence(5)
  let startTime; // start timer on first keypress
  let $htmlChar = document.querySelector('.char:not(.correct)');
  let targetChar = $htmlChar.textContent;
  let userTypeCount = 0;
  
  // listen for keypress -> respond to correct & wrong keypress
  document.addEventListener('keydown', async ({ key }) => {
    key = key.toLowerCase()

    // ignore backspace / enter keypress
    if (key !== 'Backspace' && key !== 'Enter' ) {
      userTypeCount++;
    }

    // start wpm timer on first keypress
    if (userTypeCount === 1) {
      startTime = window.performance.now()
    }

    // if $htmlChar exists then game is ongoing
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

        else if (!$htmlChar && $gameOverDisplay.className !== '.game-over') { // if visible then class will be 'game-over game-over-active'
          // finished all letters, game is done
          const typingAccuracy = Math.floor(chars.length / userTypeCount * 100)
          const typingTimeInMinutes = (window.performance.now() - startTime) / 60000 // 60000 ms per minute
          const wpm = Math.floor(sentence.length / typingTimeInMinutes);
          scores.unshift({ 
            date: new Date(),
            accuracy: typingAccuracy, 
            wpm: wpm})
          $gameOverDisplay.innerHTML = `Congrats, you win! 🎉<br />You're typing accuracy was ${typingAccuracy}%<br />You typed at ${wpm} words per minute.`;
          $newGameBtn.textContent = 'Play Again';
          await fadeOut($sentenceBox)
          await fadeIn($gameOverDisplay, $newGameBtn, $scoreboardBtn)
          $gameOverDisplay.classList.add('game-over-active')
        }
      }
    }
  });
}



// Start game on button click or hit enter
$newGameBtn.addEventListener('click', newGame)
document.addEventListener('keydown', ({key}) => {
  if (key === 'Enter' && $sentenceBox.className !== 'sentence') newGame()
})

// Dark mode
$darkModeBtn.addEventListener('click', () => document.body.classList.toggle('dark'))

// Scoreboard
const scores = []
async function displayScoreboard() {
  const showScoreboard = $scoreboard.classList.contains('hidden')

  if (showScoreboard) {
    await fadeOut($gameOverDisplay, $startScreen)

    // fade in scoreboard
    $scoreboardEntries.innerHTML = scores.map(({date, accuracy, wpm}) => (
      `<div class='scoreboard-entry'>
      <span>${date.toLocaleString()}</span>
      <span>${accuracy}</span>
      <span>${wpm}</span>
      </div>`
    )).slice(0,10).join('') // only display 10 most recent scores
    $scoreboardBtn.textContent = "Hide Scoreboard"
    await fadeIn($scoreboard)

  } else {
    $scoreboardBtn.textContent = 'Show Scoreboard' // toggles between "show" and "hide" text
    await fadeOut($scoreboard)

    // display start screen
    $scoreboardBtn.textContent = "Show Scoreboard"
    await fadeIn($startScreen)
  }
}

$scoreboardBtn.addEventListener('click', displayScoreboard)