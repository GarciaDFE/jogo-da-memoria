const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

$root.insertAdjacentElement("beforeend", $cardsWrapper);

const numCards = 8

for (let i = 0; i < numCards; i++) {
  if (i <= 5) {
      $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
  } else {
      $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
  }
}