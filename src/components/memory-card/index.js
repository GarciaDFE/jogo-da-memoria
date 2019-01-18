function createMemoryCard() {
    const $memoryCard = document.createElement("article");
    const $iconCollab = `
        <img class="icon" 
            src="img/icon-collabcode.png"
            alt="imagem do mascote da CollabCode">
        `;
    $memoryCard.classList.add("memory-card");
    $wrapCards.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
    const $memoryCardFront = document.createElement("article");
    const $iconC = `
        <img class="icon" 
            src="img/icon-c.png"
            alt="imagem do livro de C++">
        `;
    $memoryCardFront.classList.add("memory-card");
    $memoryCardFront.classList.add("-front");
    $wrapCards.insertBefore($memoryCardFront, null);
    $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
}