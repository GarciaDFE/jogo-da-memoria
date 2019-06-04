const signup = function() {
  const $root = document.querySelector("#root");
  const $LoginButton = flatButton.render("Log in", false, "login");
  const $SignupButton = flatButton.render("Sign Up", true, "signup");
  const $logoGueio = logoGueio.render();
  const $titlePage = titlePage.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoGueio, $titlePage);
  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $LoginButton);
  $root.insertAdjacentHTML("beforeend", $SignupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
};
