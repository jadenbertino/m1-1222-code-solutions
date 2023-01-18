let numClicks = 0;
const $hotButton = document.querySelector('.hot-button')
const $clickCount = document.querySelector('.click-count')

function getHotButtonColor(num) {
  if (num < 4) return "cold"
  if (num < 7) return "cool"
  if (num < 10) return "tepid"
  if (num < 13) return "warm"
  if (num < 16) return "hot"
  return "nuclear"
}

function handleHotButtonClick() {
  numClicks++
  $clickCount.textContent = `Clicks: ${numClicks}`
  const color = getHotButtonColor(numClicks)
  $hotButton.className = `hot-button ${color}`
}

$hotButton.addEventListener('click', handleHotButtonClick)
