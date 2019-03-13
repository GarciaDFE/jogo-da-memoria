(function() {
   const $root = document.querySelector('#root')
   const $LoginButton = flatButton.render("Log in")
   const $SignupButton = flatButton.render("Sign Up", true)
   const $formWrapper = createFormWrapper();
   const $logoGueio = logoGueio.render()
   const $titlePage = titlePage.render("welcome!")
   const $formTeste = "User name"

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
   $root.insertAdjacentElement('beforeend', $formWrapper)
   $formWrapper.insertAdjacentHTML('beforeend', $logoGueio)
   $formWrapper.insertAdjacentHTML('beforeend', $titlePage)
   $formWrapper.insertAdjacentHTML('beforeend', $formTeste)
})()