/**
 * Shuffles a deck of cards represented as an array using only swaps
 * @param {number[]} cards
 */
function shuffle(cards) {
  for (var i = cards.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));

    // Swap elements
    const temp = cards[i];
    cards[i] = cards[rand];
    cards[rand] = temp;
  }
}
