(function() {
   const $root = document.querySelector('#root')
   const $LoginButton = flatButton.render("Log in")
   const $SignupButton = flatButton.render("Sign Up", true)
   const $logoGueio = logoGueio.render()
   const $titlePage = titlePage.render("welcome!")

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
   $root.insertAdjacentHTML('beforeend', $logoGueio)
   $root.insertAdjacentHTML('beforeend', $titlePage)
})()