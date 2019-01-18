const numCards = 8 /* seta o número de cartões do jogo */

for (let i = 0; i < numCards; i++) {
  if (i == 0) {
      createMemoryCardFront(); /* cria primeiro cartão com face revelada (frente) */
  } else {
      createMemoryCard(); /* cria cartão com face escondida (verso) */ 
  }
}
