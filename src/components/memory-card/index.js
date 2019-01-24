const $head = document.querySelector("head");
const $style = document.createElement("style");
$style.textContent = `
        .memory-card {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 155px;
                height: 155px;  
                background-color: #f25a70;
                border-radius: 30px;
                box-shadow: 0 3px 6px 0 #00000029;
                position: relative;
                margin: 10px;
                cursor: pointer;
        }

        .memory-card.-front {
                background-color: #fff;
        }

        .memory-card.-front::before {
                position: absolute;
                content:'';
                width: 95px;
                height: 95px;
                background-color: #d4d4d4;
                border-radius: 50%;
        }

        .memory-card > .icon {
                width: 110px;
                height: 110px;
        }

        .memory-card.-front > .icon {
                position: absolute;
                width: 97px;
                height: 97px;
                transform: translateY(-12px);
        }`
$head.insertBefore($style, null)

const createMemoryCard = ({ src, alt, nameClass }) => `
        <article class="memory-card ${nameClass}">
            <img
                class="icon"
                src="${src}"
                alt="${alt}"
                onclick="handleClick()">
        </article>`

const handleClick = () => console.log("Clicado em um cartão!!")

