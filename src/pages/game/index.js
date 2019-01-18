const numCards = 8

for (let i = 0; i < numCards; i++) {
  if (i == 0) {
      createMemoryCardFront();
  } else {
      createMemoryCard();
  }
}

const $Cards = document.querySelectorAll(".memory-card")

$Cards.forEach(function($card, key) {
    $card.addEventListener("click", mostrarFace)
})

function mostrarFace() {
    console.log("Clicado em um cartão!!")
}