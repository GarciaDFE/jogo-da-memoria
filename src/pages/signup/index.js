(function() {
   const $root = document.querySelector('#root')
   const $LoginButton = flatButton.render("Log in")
   const $SignupButton = flatButton.render("Sign Up", true)
   const $logoGueio = logoGueio.render()
   const $titlePage = titlePage.render("Welcome!")
   const $logoWrapper = logoWrapper.render($logoGueio, $titlePage)
   const $formTeste = "User name"

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
   $root.insertAdjacentHTML('beforeend', $logoWrapper)
   $root.insertAdjacentHTML('beforeend', $formTeste)
})()