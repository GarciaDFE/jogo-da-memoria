(function () {
   const $root = document.querySelector("#root");
   const $headerLogin = headerLogin.render();

   $root.insertAdjacentHTML("afterbegin", $headerLogin);
})()