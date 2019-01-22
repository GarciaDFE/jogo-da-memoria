const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const numCards = 8;

$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-c.png", "imagem do livro de C++", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-js.png", "imagem do livro de Javascript", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-java.png", "imagem do livro de Java", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-cabeca.png", "imagem do livro de código na cabeça", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-php.png", "imagem do livro de PHP", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-celular.png", "imagem do livro sobre UX", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-bug.png", "imagem do livro sobre bug", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-responsivo.png", "imagem do livro sobre responsivo", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-woman.png", "imagem do livro de mulher codando", "-front"))
$cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard("img/icon-settings.png", "imagem do livro sobre configurações", "-front"))

