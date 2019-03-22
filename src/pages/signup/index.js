(function() {
   const $root = document.querySelector('#root')
   const $LoginButton = flatButton.render("Log in")
   const $SignupButton = flatButton.render("Sign Up", true)
   const $logoGueio = logoGueio.render()
   const $titlePage = titlePage.render("Welcome!")
   const $logoWrapper = logoWrapper.render($logoGueio, $titlePage)
   const $labelUser = formLabel.render("User name");
   const $inputUser = formInput.render("Name-example");
   const $labelEmail = formLabel.render("E-mail");
   const $inputEmail = formInput.render("example@email.com");
   const $labelPass = formLabel.render("Password");
   const $inputPass = formInput.render("*********");
   const $labelCPass = formLabel.render("Confirm password");
   const $inputCPass = formInput.render("*********");

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
   $root.insertAdjacentHTML('beforeend', $logoWrapper)
   $root.insertAdjacentHTML("beforeend", $labelUser);
   $root.insertAdjacentHTML("beforeend", $inputUser);
   $root.insertAdjacentHTML("beforeend", $labelEmail);
   $root.insertAdjacentHTML("beforeend", $inputEmail);
   $root.insertAdjacentHTML("beforeend", $labelPass);
   $root.insertAdjacentHTML("beforeend", $inputPass);
   $root.insertAdjacentHTML("beforeend", $labelCPass);
   $root.insertAdjacentHTML("beforeend", $inputCPass);
})()