const coverGame = (function () {
    const module = {}

    module._style = function () {
        const $head = document.querySelector("head")
        const $style = document.createElement("style")
        $style.textContent = `
        .cover-game {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            background-color: #626262;
            opacity: 0.95;
            left:0;
            top:0;
        }
        
        .cover-game > .title {
            font-family: 'Comfortaa', sans-serife;
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            color: #fffcee;
            line-height: 100vh;
        }`;

        $head.insertBefore($style, null)
    }

    module.render = () => {
        module._style();

        return `
         <section class="cover-game">
            <h1 class="title">Jogo da Memória</h1>
         </section>
      `
    }

    return {
        render: module.render
    }
})();