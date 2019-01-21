const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const numCards = 8;

$root.insertAdjacentElement("beforeend", $cardsWrapper);

for (let i = 0; i < numCards; i++) {
  if (i <= 5) {
      $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("back"))
  } else {
      $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("front"))
  }
};