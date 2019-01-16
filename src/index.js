const $root = document.querySelector("#root")
const $container = document.createElement("section")

const $faceCard = `
<article class="face-card">
    <img class="icon" 
        src="img/icon-c.png" 
        alt="imagem da face do cartão da linguagem C++">
</article>`;
const $memoryCard = `
<article class="memory-card">
    <img class="icon" 
        src="img/icon-collabcode.png"
        alt="imagem do mascote da CollabCode">
</article>`;

let ttlCards = 10
/* aplicando classe ao elemento criado */
$container.classList.add("wrap-container")
/* inclusão de HTML */
$root.insertBefore($container, null)
$container.insertAdjacentHTML("afterbegin", $faceCard)
for (let i = 0; i < ttlCards - 1; i++) {
    $container.insertAdjacentHTML("beforeend", $memoryCard)
}