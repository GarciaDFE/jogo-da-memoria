let qtdeMemoryCardActive = 0; /* váriavel colocada de forma global, fora só do contexto da função, para ser usada em outros componentes */
let qtdeMemoryCardCorrect = 0
let qtdeToGame = 0

function createCardsWrapper() {
    const $cardsWrapper = document.createElement("section")
    $cardsWrapper.classList.add("cards-wrapper")

    const $head = document.querySelector("head")
    const $style = document.createElement("style")
    $style.textContent = `
        .cards-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: flex-start;
            width: 372px;
            height: 850px;
            margin: 0 auto;
            border: 1px #dadada solid;
        }
        
        .cards-wrapper > div {
            margin-bottom: 10px;
        }`

    $head.insertBefore($style, null)

    $cardsWrapper.addEventListener("click", () => {
        qtdeMemoryCardActive = $cardsWrapper.querySelectorAll(".memory-card.-active").length;
        qtdeMemoryCardCorrect = $cardsWrapper.querySelectorAll(".memory-card.-active.-yes").length;
        qtdeToGame = qtdeMemoryCardActive - qtdeMemoryCardCorrect
    });
    
    return $cardsWrapper
}