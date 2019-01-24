const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const numCards = 8;

$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png", 
    alt: "imagem do livro de C++", 
    nameClass: "-front"
});

const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png", 
    alt: "imagem do livro de Javascript", 
    nameClass: "-front" 
});

const $memoryCardJava = createMemoryCard({
    src: "img/icon-java.png", 
    alt: "imagem do livro de Java", 
    nameClass: "-front" 
});

const $memoryCardCabeca = createMemoryCard({
    src: "img/icon-cabeca.png", 
    alt: "imagem do livro de código na cabeça", 
    nameClass: "-front" 
});

const $memoryCardPhp = createMemoryCard({
    src: "img/icon-php.png", 
    alt: "imagem do livro de PHP", 
    nameClass: "-front" 
});

const $memoryCardCelular = createMemoryCard({
    src: "img/icon-celular.png", 
    alt: "imagem do livro sobre UX", 
    nameClass: "-front" 
});

const $memoryCardBug = createMemoryCard({
    src: "img/icon-bug.png", 
    alt: "imagem do livro sobre bug", 
    nameClass: "-front" 
});

const $memoryCardResponsivo = createMemoryCard({
    src: "img/icon-responsivo.png", 
    alt: "imagem do livro sobre responsivo", 
    nameClass: "-front" 
});

const $memoryCardWoman = createMemoryCard({
    src: "img/icon-woman.png", 
    alt: "imagem do livro de mulher codando", 
    nameClass: "-front" 
});

const $memoryCardSettings = createMemoryCard({
    src: "img/icon-settings.png", 
    alt: "imagem do livro sobre configurações", 
    nameClass: "-front" 
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsivo)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman)
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings)