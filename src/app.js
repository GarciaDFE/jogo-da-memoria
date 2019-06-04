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

  paths[hash]();
})();
