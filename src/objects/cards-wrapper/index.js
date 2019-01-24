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
            height: 900px;
            margin: 0 auto;
            border: 1px #dadada solid;
        }`
    $head.insertBefore($style, null)
    
    return $cardsWrapper
}