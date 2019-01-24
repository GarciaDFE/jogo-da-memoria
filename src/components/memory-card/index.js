/* MEU CÓDIGO DOS DESAFIOS 
let modificadora = ""
let imgIcone = ""
let altImagem = ""

const createMemoryCard = (face) => {

    if (face == "back") {
        modificadora = ""
        imgIcone = "icon-collabcode.png"
        altImagem = "imagem do mascote da CollabCode"
    } else if (face == "front") {
        modificadora = "-front"
        imgIcone = "icon-c.png"
        altImagem = "imagem do livro de C++"
        }

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
/* //////////////////////////////////// */


/* PRIMEIRO CÓDIGO REFATORADO DO MARCO DOS DESAFIOS 
const createMemoryCard = (nameClass) => {
    let src = "img/icon-collabcode.png";
    let alt = "imagem do mascote da CollabCode";

    if (nameClass == "-front") {
        src = "img/icon-c.png"
        alt = "img/imagem do livro de C++"
    }

    return `
        <article class="memory-card ${nameClass}">
            <img
                class="icon"
                src="${src}"
                alt="${alt}"
                onclick="handleClick()">
        </article>`

};

const handleClick = () => console.log("Clicado em um cartão!!")
/* ////////////////////////////// */



/* SEGUNDO CÓDIGO REFATORADO DO MARCO DOS DESAFIOS
const createMemoryCard = nameClass => `
        <article class="memory-card ${nameClass}">
            <img
                class="icon"
                src="${
                    nameClass == "-front" ? "img/icon-c.png" : "img/icon-collabcode.png"
                }"
                alt="${
                    nameClass == "-front" ? "imagem do livro de C++" : "imagem do mascote da CollabCode"
                }"
                onclick="handleClick()">
        </article>`;

const handleClick = () => console.log("Clicado em um cartão!!")
/* ////////////////////////////// */



/* TERCEIRO CÓDIGO REFATORADO DO MARCO PARA TRANSFORMAR ESTE
    COMPONENTE EM UM COMPONENTE BURRO (STATELESS) \o/
const createMemoryCard = (card) => `
        <article class="memory-card ${card.nameClass}">
            <img
                class="icon"
                src="${card.src}"
                alt="${card.alt}"
                onclick="handleClick()">
        </article>`;

const handleClick = () => console.log("Clicado em um cartão!!")
/* ////////////////////////////// */



/* QUARTO CÓDIGO DO MARCO REFATORANDO O COMPONENTE STATELESS
   USANDO OBJECT DESTRUCTURING 

const createMemoryCard = (card) => {
    const {src, alt, nameClass} = card;
    return `
        <article class="memory-card ${card.nameClass}">
            <img
                class="icon"
                src="${card.src}"
                alt="${card.alt}"
                onclick="handleClick()">
        </article>`
};

const handleClick = () => console.log("Clicado em um cartão!!")

/* ///////////////////////////////////// */

/* QUINTO E ÚLTIMO CÓDIGO DO MARCO REFATORANDO O COMPONENTE STATELESS
   USANDO OBJECT DESTRUCTURING AGORA COMO PARÂMETRO \o/ \o/ */

const createMemoryCard = ({ src, alt, nameClass }) => `
        <article class="memory-card ${nameClass}">
            <img
                class="icon"
                src="${src}"
                alt="${alt}"
                onclick="handleClick()">
        </article>`

const handleClick = () => console.log("Clicado em um cartão!!")

/* ///////////////////////////////////// */