const submitButton = (function () {
   const module = {}

   module._style = () => {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .submit-button {
            height: 48px;
            width: 100%;

            background-color: #f25a70;
            opacity: 0.9;
            border-radius: 24px;

            font-size: 14px;
            font-weight: bold;
            color: white;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-align: center;

            cursor: pointer;
         }
         .submit-button:hover {
            opacity: 1;
         }
         .form-input + .submit-button {
            margin-top: 45px;
         }
     `;

      $head.insertBefore($style, null);

   }
   module.render = (content = "Submit") => {
      module._style()

      return `
         <input class="submit-button type="submit" value=${content}>
      `;
   }

   return {
      render: module.render
   }
})();