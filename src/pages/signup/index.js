(function() {
   const $root = document.querySelector('#root')

   // const $LoginButton = flatButton.render({
   //    nameClass: "-login"
   // })
   // const $SignupButton = flatButton.render({
   //    nameClass: "-signup"
   // })
   const $LoginButton = flatButton.render("Log in")
   const $SignupButton = flatButton.render("Sign Up")

   $root.insertAdjacentHTML('beforeend', $LoginButton)
   $root.insertAdjacentHTML('beforeend', $SignupButton)
})()