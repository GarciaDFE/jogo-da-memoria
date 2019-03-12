(function() {
   const $root = document.querySelector('#root')
   const $LoginButton = flatButton.render("Log in", "-normal")
   const $SignupButton = flatButton.render("Sign Up", "-active")

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
})()