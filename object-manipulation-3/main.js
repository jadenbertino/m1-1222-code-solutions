// console.log('Lodash is loaded:', typeof _ !== 'undefined');

// 1 -- Players

function generatePlayers(playerNames) {
  return playerNames.map(name => ({ name: name, hand: []}))
}

const players = generatePlayers(['Jaden', 'Haroon', 'Hideki', 'Ken'])

// 2 -- Deck

function createCardDeck() {
  const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
  const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
  const deck = []
  SUITS.forEach(suit => RANKS.forEach(rank => {
    deck.push({
      rank: rank,
      suit: suit,
    })
  }))
  return deck
}
const cards = createCardDeck()

// 3 -- Shuffle

function shuffleCards() {
  cards.sort(() => Math.random() - 0.5)
}

// 4 -- Deal Cards

function dealHand() {
  players.forEach((player, index) => player.hand = [cards[index * 2], cards[index * 2 + 1]])
}

// 5 -- Choose Winner

function getScore(player) {
  let score = 0;
  for (const card of player.hand) {
    let rank = card.rank
    if (rank === 'Ace') score += 11
    else if (typeof rank === 'number') score += rank
    else score += 10 // queen king jack
  }
  return score
}

function getWinner() {
  const winner = {
    name: null,
    value: null
  }

  players.forEach(player => {
    const score = getScore(player)
    if (score > winner.value) {
      winner.name = player.name
      winner.value = score
    }
  })
  return winner
}

// 6 -- Play Game
function display(player) {
  console.log(`${player.name}: ${player.hand[0].rank} of ${player.hand[0].suit} + ${player.hand[1].rank} of ${player.hand[1].suit} = ${getScore(player)}`)
}

const winnerHTML = document.querySelector('#winner')

function playNewRound() {
  shuffleCards()
  dealHand()
  const winner = getWinner()
  
  // Display Winner To Console & Webpage
  console.clear()
  players.forEach(player => display(player))
  console.log(`${winner.name} wins!`)
  winnerHTML.innerHTML = winner.name + ` wins with a score of ${winner.value}!`
}