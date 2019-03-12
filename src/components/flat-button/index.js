const flatButton = (function () {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .flat-button {
            display: inline-block;
            width: 186px;
            height: 176px;
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            border: none;
            cursor: pointer;
         }
         .flat-button.-normal {
            color: #FFFCEE;
            background-color: #eae6da;
         }
         .flat-button.-normal:hover {
            color: #FFFFFF;
            background-color: #f25a70;            
         }
         .flat-button.-active {
            color: #FFFFFF;
            background-color: #f25a70;            
         }`;

      $head.insertBefore($style, null);

   }

   module.render = (content, behavior) => {
      module._style();
      
      return `
         <button class="flat-button ${behavior}">${content}</button>
      `;
   }

   return {
      render: module.render
   }
})();