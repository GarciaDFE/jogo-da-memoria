const flatButton = (function () {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .flat-button {
            display: inline-block;
            background-color: #eae6da;
            width: 186px;
            height: 176px;

            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            color: #FFFCEE;
            text-align: center;
            border: none;
         }
         .flat-button > .-login {

         }
         .flat-button > .-login.-active {

         }
         .flat-button > .-signup {
            
         }
         .flat-button > .-signup.-active {
            
         }
         
         `;
      $head.insertBefore($style, null);
   }

   module.render = content => {
      module._style();
      
      return `
         <button class="flat-button">${content}</button>
      `;
   }

   return {
      render: module.render
   }
})();