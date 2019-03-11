const flatButton = (function () {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .flat-button {
            display: block;
            background-color: #eae6da;
            width: 186px;
            height: 176px;

            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            color: #FFFCEE;
            text-align: center;
            border: none;
         }`;
      $head.insertBefore($style, null);
   }

   module.render = () => {
      module._style();
      return `
         <button class="flat-button">Log in</button>
      `;
   }

   return {
      render: module.render
   }
})();