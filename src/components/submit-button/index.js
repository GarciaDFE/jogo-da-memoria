const submitButton = (function () {
   const module = {}

   module._style = () => {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .submit-button {
            height: 48px;
            width: 302px;
            border-radius: 24px;
            background-color: #f25a70;
            opacity: 0.9;
            color: #FFF;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            cursor: pointer;
            margin: 20px 0;
         }
         .submit-button:hover {
            opacity: 1;
         }
      `;

      $head.insertBefore($style, null);

   }
   module.render = (content = "Submit") => {
      module._style()

      return `
         <button class="submit-button type="submit">${content}</button>
      `;
   }

   return {
      render: module.render
   }
})();