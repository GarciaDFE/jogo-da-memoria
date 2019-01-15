# PROJETO DE JOGO DA MEMÓRIA
Desenvolvimento do projeto com foco na evolução de conceitos e apereiçoamento de habilidades em JavaScript puro, HTML e funcionamento do navegador.

## CSS
- Tamanho proporcional de uma imagem podemos mudar apenas a propriedade `width:`
- Técnica de centralização de elemento imagem mais abrangente em cross-browser (JEITO RAÇUDO) segue configurando o elemento **pai** &rarr; `position: relative;` e o elemento **`img`** &rarr; `position: absolute;` , `left e top: 50%` e `transform: translate X e Y -50% `
- Técnica de centralização de elementos mais recente e menos abrangente em cross-browser (JEITO NUTELA) com apenas 3 propriedades no **pai** que são `display: flex;`, o ajuste horizontal com `justify-content: center;` e o ajuste vertical com `align-items: center;`

## JavaScript

### insertAdjacentHTML
**Função** &rarr; analisa o texto especificado como HTML e insere os nós que resultam na árvore DOM em uma posição especificada.
**Sintaxe**  &rarr; `element.insertAdjacentHTML(posição, texto);`
- `texto` &rarr; é a string a ser analisada como HTML e inserida na árvore.
- `posição` &rarr; é a posição em relação ao elemento de acordo com as opções abaixo
- `beforebegin` &rarr; posição antes do elemento.
- `afterbegin` &rarr; posição dentro do elemento, antes de seu primeiro filho (childNode).
- `beforeend` &rarr; posição dentro do elemento, após seu último filho (childNode).
- `afterend` &rarr; posição após o elemento.







title   #
bold    ** **
seta    &rarr;
lista   - 
code    ` `




