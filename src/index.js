const $root = document.querySelector("#root")
const $container = document.createElement("section")
const $memoryCard = document.createElement("article")
const $memoryCardFront = document.createElement("article");

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

$container.classList.add("wrap-container")
$root.insertBefore($container, null)

$memoryCard.classList.add("memory-card")
$container.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card")
$memoryCardFront.classList.add("-front");
$container.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab)
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);