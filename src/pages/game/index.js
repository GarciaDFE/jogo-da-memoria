const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const numCards = 8;

$root.insertAdjacentElement("beforeend", $cardsWrapper);

for (let i = 0; i < numCards; i++) {
  if (i <= 5) {
      $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-collabcode.png", "imagem do mascote da CollabCode"));
  } else {
      $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-c.png", "imagem do livro de C++", "-front"))
  }
};