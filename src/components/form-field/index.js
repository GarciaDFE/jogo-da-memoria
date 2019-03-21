const formField = (function () {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .form-field {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: 'Comfortaa', sans-serife;
            text-align: left;
         }

         .form-field > .labels {
            color: rgba(58,64,66, 0.5);
            font-size: 16px;
         }

         .form-field .inputs {
            text-align: left;
            margin-bottom: 12px;
            font-size: 18px;
            font-weight: bold;
            font-family: inherit;
            border: none;
            color: #3A4042;
            border-bottom: 1px rgba(58,64,66, 0.5) solid;
            line-height: 40px;
            margin-bottom: 40px;
         }
         `;
      $head.insertBefore($style, null);
   }

   module.render = (label, input) => {
     module._style();
     return `
         <div class="form-field"> 
            <label class="labels">${label}</label>
            <input class="inputs" type="email" placeholder="${input}">
         </div>
         `;
   };

   return {
      render: module.render
   }
})()