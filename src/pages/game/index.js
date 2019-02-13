/* IIFE --> Immediately Invoked Function Express */
/* envolve todo conteúdo por uma funcion anônima e auto-executável pelos parêntes no final */
/* aplicada na parte do projeto que só consome outras partes e nunca é acessada por outra parte */
(function() {
    const $root = document.querySelector("#root");
    const $cardsWrapper = createCardsWrapper();
    const createMemoryCard = memoryCard.create(); /* retorna a possibilidade de criar cards */

    const $pointBar = pointBar.create();/* criar a barra de pontuação */
    const $startBtn = startBtn.create();/* criar o botão de Start */

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

    const $memoryCardCollab = createMemoryCard({
        src: "img/icon-collabcode.png",
        alt: "imagem do galo da CollabCode",
        nameClass: ""
    });

    $root.insertAdjacentElement("beforeend", $cardsWrapper);
    $root.insertAdjacentHTML("afterbegin", $pointBar);

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS)
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava)
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);

    $cardsWrapper.insertAdjacentHTML("beforeend", $startBtn);

})()