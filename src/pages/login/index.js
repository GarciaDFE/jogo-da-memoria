const login = function() {
  const $root = document.querySelector("#root");
  const $LoginButton = flatButton.render("Log in", true, "login");
  const $SignupButton = flatButton.render("Sign Up", false, "signup");
  const $logoGueio = logoGueio.render();
  const $titlePage = titlePage.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoGueio, $titlePage);
  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $LoginButton);
  $root.insertAdjacentHTML("beforeend", $SignupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
};
