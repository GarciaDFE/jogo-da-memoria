# PROJETO DE JOGO DA MEMÓRIA
Desenvolvimento do projeto com foco na evolução de conceitos e apereiçoamento de habilidades em JavaScript puro, HTML e funcionamento do navegador.

## CSS
- Tamanho proporcional de uma imagem podemos mudar apenas a propriedade `width:`
- Técnica de centralização de elemento imagem mais abrangente em cross-browser (JEITO RAÇUDO) segue configurando o elemento **pai** &rarr; `position: relative;` e o elemento **`img`** &rarr; `position: absolute;` , `left e top: 50%` e `transform: translate X e Y -50% `
- Técnica de centralização de elementos mais recente e menos abrangente em cross-browser (JEITO NUTELA) com apenas 3 propriedades no **pai** que são `display: flex;`, o ajuste horizontal com `justify-content: center;` e o ajuste vertical com `align-items: center;`

## JavaScript
### Conceitos
- TC39 &rarr; comitê responsável pela manutenção e aperfeiçoamento da linguagem com evoluções em versões (ECMAScript) anuais lançadas normalmente no meio de cada ano
- ECMAScript &rarr; conjunto da doocumentação da linguagem chamado como JavaScript Moderno e sua fonte de consulta e acompanhamento no GitHub ou no link `https://www.ecma-international.org/default.html`
- JS x API do DOM &rarr; Entender que trabalhando com JS no Front-end, existe uma mescla entre comandos e funcionalidades de Javascript e da API do DOM
- API do DOM &rarr; permite que o JS acesse recursos do navegador como uma ponte intermediando essa comunicação
- DOM &rarr; Modelo de Objeto de Documento que significa documento HTML
- W3C + WHATWG &rarr; organizações que mantém juntas as documentações do HTML, do CSS e da API do DOM, publicando seus apendes na documentação no site MDN e sem determinar frequência e nem números de versões

### insertAdjacentHTML
**Função** &rarr; analisa o texto especificado como HTML e insere os nós que resultam na árvore DOM em uma posição especificada.
**Sintaxe**  &rarr; `element.insertAdjacentHTML(posição, texto);`
- `texto` &rarr; é a string a ser analisada como HTML e inserida na árvore.
- `posição` &rarr; é a posição em relação ao elemento de acordo com as opções abaixo
- `beforebegin` &rarr; posição antes do elemento
- `afterbegin` &rarr; posição dentro do elemento, antes de seu primeiro filho (childNode)
- `beforeend` &rarr; posição dentro do elemento, após seu último filho (childNode)
- `afterend` &rarr; posição após o elemento

### IIFE - Immediately Invoked Function Expression
- é um função anônima
- auto-executável (auto-invocável)
- não é possível ser executada/invocada novamente
- qualquer acesso ao seu conteúdo fica bloqueado, não fica global, Seus elementos não podem ser acessados pelo terminal

### JSON - JavaScript Object Notation
- tem o conceito de chave e valor

### Boas práticas
- A preocupação na refatoração para isolamento de elementos repetitivos no código é indicado (Martin Fowler) a partir da certeza da terceira ocorrência de repetição de elemento







title   #
bold    ** **
seta    &rarr;
lista   - 
code    ` `




