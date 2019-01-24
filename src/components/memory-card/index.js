const createMemoryCard = ({ src, alt, nameClass }) => `
        <article class="memory-card ${nameClass}">
            <img
                class="icon"
                src="${src}"
                alt="${alt}"
                onclick="handleClick()">
        </article>`

const handleClick = () => console.log("Clicado em um cartão!!")