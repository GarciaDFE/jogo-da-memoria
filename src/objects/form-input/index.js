const formInput = (function() {
  const module = {};

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .form-input {
            display: block;
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            color: #3A4042;
            border-bottom: 2px rgba(58,64,66, 0.5) solid;
            padding: 12px 0;
            background-repeat: no-repeat;
            background-position: right;
            background-size: 23px;
            cursor: pointer;
         }
         .msg-error + .form-label {
            margin-top: 29px;
         }
         .msg-error {
           display: block;
            font-size: 15px;
            color: #F25A70;
            margin-top: 5px;
         }
         .-show {
            display: block;
         }
         `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ id = "", placeholder = "", type = "text", msg = "" }) => {
    module._style();
    if (type === "email") {
      msg = "* Digite um e-mail válido!";
    } else {
      msg = "* Digite uma senha válida!";
    }

    return `
         <input 
         id="${id}" 
         class="form-input" 
         type="${type}" 
         placeholder="${placeholder}" 
         required>
         <p class="msg-error">${msg}</p>
         `;
  };

  return {
    render: module.render
  };
})();
