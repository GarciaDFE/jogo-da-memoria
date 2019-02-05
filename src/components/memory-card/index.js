const memoryCard = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent = `
                .memory-card {
                        width: 155px;
                        height: 155px;  
                        position: relative;
                        
                }
                .memory-card .card {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;  
                        background-color: #f25a70;
                        border-radius: 30px;
                        box-shadow: 0 3px 6px 0 #00000029;
                        position: relative;
                        cursor: pointer;
                        position: absolute;
                        margin-top: 10px;
                }

                .memory-card.-active .card {
                        display: none;
                }

                .memory-card.-active .card.-front {
                        display: flex;
                }

                .memory-card.-active.-yes .card.-front {
                        background-color: #d0fad5;

                }

                .memory-card .card.-front {
                        background-color: #fff;
                }

                .memory-card .card.-front::before {
                        position: absolute;
                        content:'';
                        width: 95px;
                        height: 95px;
                        background-color: #d4d4d4;
                        border-radius: 50%;
                }

                .memory-card .card > .icon {
                        width: 110px;
                        height: 110px;
                }

                .memory-card .card.-front > .icon {
                        position: absolute;
                        width: 97px;
                        height: 97px;
                        transform: translateY(-12px);
                }`;

        $head.insertBefore($style, null)
        
        return ({ src, alt }) => `
                <div class="memory-card" onclick="handleClick(this)">
                        <article class="card -front">
                        <img
                                class="icon"
                                src="${src}"
                                alt="${alt}"
                        </article>
                        <article class="card">
                        <img
                                class="icon"
                                src="img/icon-collabcode.png"
                                alt="imagem do galinho da CollabCode"
                        </article>
                </div>
        `;
}
const handleClick = ($component) => {
        if (qtdeToGame < 2 && $component.classList.contains("-yes") == false) {
                $component.classList.toggle("-active");
        }

        if (qtdeToGame == 1) {
                const $activeMemoryCards = document.querySelectorAll(".memory-card.-active")
                if ($activeMemoryCards[0].isEqualNode($activeMemoryCards[1])) {
                        $activeMemoryCards.forEach($memoryCard => $memoryCard.classList.add("-yes"))
                        qtdeToGame = 0
                } else {
                        setTimeout(() => {
                                $activeMemoryCards.forEach($memoryCard => {
                                        if ($memoryCard.classList.contains("-yes") == false) {
                                                $memoryCard.classList.remove("-active");
                                        }
                                })
                                qtdeToGame = 0;
                        }, 2000);
                }
        }
        console.log(document.querySelectorAll(".-yes"))
}
