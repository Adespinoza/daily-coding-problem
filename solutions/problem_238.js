/* eslint-disable no-restricted-syntax */
const suits = ['♠', '♥', '♦', '♣'];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

const generateDeck = () => {
  const deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      const card = new Card(suit, rank);
      deck.push(card);
    }
  }
  return deck;
};

/**
 * Maximizes player score in Blackjack
 * @param {Card[]} deck
 * @return {number}
 */
function maxPlayerScore(deck) {
  if (deck.length < 4) return 0;

  const dealer = deck[0].rank + deck[1].rank;
  const player = deck[2].rank;
  let max = Number.MIN_VALUE;
  const start = 3;
  let cards = 1;

  while (true) {
    let playerHand = player;
    let dealerHand = dealer;
    let next = start;

    for (let i = 0; i < cards; i++) {
      if (next === deck.length) return 0;
      playerHand += deck[next].rank;
      next += 1;
    }

    if (playerHand > 21) break;

    while (dealerHand < 17) {
      if (next === deck.length) return 0;
      dealerHand += deck[next].rank;
      next += 1;
    }

    if (dealerHand > 21 || playerHand > dealerHand)
      max = Math.max(max, 1 + maxPlayerScore(deck.slice(next)));
    else max = Math.max(max, maxPlayerScore(deck.slice(next)));

    cards += 1;
  }
  return max;
}

const deck = generateDeck();
console.log(maxPlayerScore(deck)); // 8
