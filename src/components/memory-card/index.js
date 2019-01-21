let modificadora = ""
let imgIcone = ""
let altImagem = ""

const createMemoryCard = (face) => {

    /* controla as diferenças no template string conforme parâmetro */
    if (face == "back") {
        modificadora = ""
        imgIcone = "icon-collabcode.png"
        altImagem = "imagem do mascote da CollabCode"
    } else if (face == "front") {
        modificadora = "-front"
        imgIcone = "icon-c.png"
        altImagem = "imagem do livro de C++"
        }

    /* retorna o template string de acordo com o parâmetro */
    return `
        <article class="memory-card ${modificadora}">
            <img
                class="icon"
                src="img/${imgIcone}"
                alt="${altImagem}"
                onclick="handleClick()">
            </article>`

};

function handleClick() {
    console.log("Clicado em um cartão!!")
}