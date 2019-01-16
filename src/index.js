const $root = document.querySelector("#root");
const $container = document.createElement("section")
const numCards = 10 /* seta o número de cartões do jogo */

const $iconCollab = `
    <img class="icon" 
        src="img/icon-collabcode.png"
        alt="imagem do mascote da CollabCode">
`

const $iconC = `
    <img class="icon" 
        src="img/icon-c.png"
        alt="imagem do livro de C++">
`

createContainer(); /* cria o container */

for (let i = 0; i < numCards; i++) {
  if (i == 0) {
      createCardFront(); /* cria primeiro cartão com face revelada (frente) */
  } else {
      createCardBack(); /* cria cartão com face escondida (verso) */ 
  }
}


/* função para criar container do jogo */
function createContainer() {
    $container.classList.add("wrap-container")
    $root.insertBefore($container, null)
}

/* função para cria face padrão do verso do cartão */
function createCardBack() {
  const $memoryCard = document.createElement("article");
  $memoryCard.classList.add("memory-card");
  $container.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

/* função para criar face da frente do primeiro cartão */ 
function createCardFront() {
  const $memoryCardFront = document.createElement("article");
  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $container.insertBefore($memoryCardFront, null);
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
}