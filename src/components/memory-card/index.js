const createMemoryCard = () => {
    return `
        <article class="memory-card">
            <img
                class="icon" 
                src="img/icon-collabcode.png"
                alt="imagem do mascote da CollabCode" 
                onclick="handleClick()">
            
        </article>
        `;
}

const createMemoryCardFront = () => {
    return `
        <article class="memory-card -front">
            <img
                class="icon" 
                src="img/icon-c.png"
                alt="imagem do livro de C++"
                onclick="handleClick()">
        </article>
        `;
}

function handleClick() {
    console.log("Clicado em um cartão!!")
}