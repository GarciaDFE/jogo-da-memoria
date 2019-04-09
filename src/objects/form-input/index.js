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
         .form-input + .form-label {
            margin-top: 29px;
         }
         `;
         $head.insertAdjacentElement("beforeend", $style);
   };

   module.render = (input, type) => {
      module._style();
      return `
         <input id="email" class="form-input" type="${type}" placeholder="${input}">
         `;
   };


   return {
      render: module.render,
   };
})();
