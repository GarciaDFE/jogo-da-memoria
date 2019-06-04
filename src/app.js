(function() {
  const { hash } = window.location;

  //   if (hash === "#/signup") {
  //     signup();
  //   } else {
  //     login();
  //   }

  // Para fugir do IF acima e melhorar a manutenção:
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = status404;

  // opção de IF com ELSE
  //   if (paths[hash] === undefined) {
  //     paths["#/404"]();
  //   } else {
  //     paths[hash]();
  //   }

  // opção de IF só pro erro com return para sair da função (não só desse IF)
  //   if (paths[hash] === undefined) {
  //     paths["#/404"]();
  //     return;
  //   }
  //   paths[hash]();

  // opção com IF TERNÁRIO
  //paths[hash] === undefined ? paths["#/404"]() : paths[hash]();

  // opção de IF sem comparação porque o UNDEFINED é considerado FALSE por padrão
  //   if (paths[hash]) {
  //     paths[hash]();
  //   } else {
  //     paths["#/404"]();
  //   }

  // opção de IF TERNÁRIO melhorada baseado no valor padrão mostrado na opção de IF acima
  paths[hash] ? paths[hash]() : paths["#/404"]();
})();
