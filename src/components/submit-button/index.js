const submitButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .submit-button {
            height: 48px;
            width: 100%;

            background-color: #f25a70;
            opacity: 0.9;
            border-radius: 24px;
            cursor: pointer;

            font-size: 14px;
            font-weight: bold;
            color: white;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-align: center;

         }
         .submit-button:hover {
            opacity: 1;
         }
         .form-input + .submit-button {
            margin-top: 45px;
         }
     `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    if (module._validInput()) {
      event.preventDefault();
      location.hash = `#/${path}`;
      location.reload(true);
    }
  };

  module._validInput = () => {
    const $email = document.querySelector('input[type="email"]');
    const $pass = document.querySelector('input[type="password"]');
    module._validaEmail($email);
    module._validaSenha($pass);
    if (module._validaEmail() && module._validaSenha()) {
      return true;
    } else {
      return false;
    }
  };

  module._validaEmail = $email => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ($email.value) {
      return true;
    } else {
      $email.insertAdjacentElement(
        "beforeend",
        "<p class='msg-error'>${msg}</p>"
      );

      return false;
    }
  };

  module._validaSenha = pass => {
    pass.lenght = 8 ? true : false;
  };

  module.render = ({ content = "", path = "" }) => {
    module._style();

    return `
         <input 
            class="submit-button" 
            type="submit" 
            value=${content}
            onclick="submitButton.handleClick(event, '${path}')">`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
