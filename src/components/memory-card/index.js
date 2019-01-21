function createMemoryCard() {
    const $memoryCard = `
        <article class="memory-card">
            <img
                class="icon" 
                src="img/icon-collabcode.png"
                alt="imagem do mascote da CollabCode" 
                onclick="handleClick()">
        </article
        `;
    
    return $memoryCard;
}

function createMemoryCardFront() {
    const $memoryCard = `
        <article class="memory-card -front">
            <img
                class="icon" 
                src="img/icon-c.png"
                alt="imagem do livro de C++"
                onclick="handleClick()">
        </article
        `;

    return $memoryCard;
}

function handleClick() {
    console.log("Clicado em um cartão!!")
}


/*
const $Cards = document.querySelectorAll(".memory-card")

$Cards.forEach(function($card, key) {
    $card.addEventListener("click", mostrarFace)
})

function mostrarFace() {
    console.log("Clicado em um cartão!!")
}
*/