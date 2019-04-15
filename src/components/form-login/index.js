const formLogin = (function () {
   const module = {}

   module._children = () => {
      const $labelEmail = formLabel.render("E-mail");
      const $inputEmail = formInput.render({
         placeholder: "example@email.com",
         type: "email"
      });
      const $labelPass = formLabel.render("Password");
      const $inputPass = formInput.render({
         placeholder: "*********",
         type: "password"
      });
      const $forgetLink = forgetLink.render({
         href: "#",
         content: "Forget password?"
      });
      const $submitButton = submitButton.render("Login");

      return `
         ${$labelEmail + $inputEmail}
         ${$labelPass + $inputPass}
         ${$forgetLink}
         ${$submitButton}
      `;
   }

   module._style = () => {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .form-login {
            display: flex;
            flex-direction: column;
            padding: 0 35px 40px;
         }
      `
      $head.insertAdjacentElement('beforeend', $style);
   }

   module.render = () => {
      module._style()

      return `<form class="form-login" action="" method="POST">${module._children()}</form>`
   }

   return {
      render: module.render
   }
})()