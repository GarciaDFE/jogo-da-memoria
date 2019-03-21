(function() {
   const $root = document.querySelector('#root')
   const $LoginButton = flatButton.render("Log in")
   const $SignupButton = flatButton.render("Sign Up", true)
   const $logoGueio = logoGueio.render()
   const $titlePage = titlePage.render("Welcome!")
   const $formField = formField.render("E-mail","example@email.com")
   const $logoWrapper = logoWrapper.render($logoGueio, $titlePage, $formField)

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
   $root.insertAdjacentHTML('beforeend', $logoWrapper)
})()