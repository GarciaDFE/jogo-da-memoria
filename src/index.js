/* guarda a seleção da raiz do documento */
const $root = document.querySelector("#root")
/* guarda a criação de uma tag article */ 
const $memoryCard = document.createElement("article")

/* opção 1 de guardar uma string para criação da linha de uma tag em HTML para ser inserida
const $icon = "<img class='icon' src = 'img/icon-collabcode.png' alt = 'imagem do mascote da CollabCode'>" */

/* opção 2 de guardar uma string usando TEMPLATE STRING para criação da linha de uma tag em HTML para ser inserida */
const $icon =
`<img
    class='icon'
    src='img/icon-collabcode.png'
    alt='imagem do mascote da CollabCode'
>`

/* atribui uma classe a tag criada */
$memoryCard.classList.add("memory-card")

/* opção 1 menos perfomático = método para inserir a tag da imagem dentro do componente article
$memoryCard.innerHTML = $icon   */

/* insere o elemento da tag criada na página */
$root.insertBefore($memoryCard, null)

/* opção 2 = método mais performático para inserir a tag da imagem dentro do componente com controle de posição */
$memoryCard.insertAdjacentHTML("afterbegin", $icon)
