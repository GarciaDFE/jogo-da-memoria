(function() {
   const $root = document.querySelector('#root')
   const $LoginButton = flatButton.render("Log in")
   const $SignupButton = flatButton.render("Sign Up", true)

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
})()