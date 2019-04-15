const formInput = (function() {
   const module = {};

   module._style = () => {
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
         }
         .form-input.-bullets {

         }
         .form-input.-hidden {
            background-image: url("../../img/hidden1.svg");
            background-repeat: no-repeat;
            background-position: right;
            background-size: 23px;
            font-size: 22px;
            letter-spacing: 4px;
            cursor: pointer;
         }
         .form-input.-hidden:hover,
         .form-input.-hidden:active {
            background-image: url("../../img/hidden2.svg");
         }
         .form-input + .form-label {
            margin-top: 29px;
         }
         `;
         $head.insertAdjacentElement("beforeend", $style);
   };

   module.render = ({ placeholder = "", type = "text", variation = "default" }) => {
      module._style();

      return `
         <input id="email" class="form-input -${variation}" type="${type}" placeholder="${placeholder}">
         `;
   };


   return {
      render: module.render,
   };
})();
