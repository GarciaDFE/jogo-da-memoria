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

   module.validate = (input) => {
      const filter = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
      if (input.value.trim().match(filter) == null) {
            return console.log(false)
      } else {
         if (input.value == '') {
            return console.log(false)
         } else {
            return console.log(true)
         } 
      }
   }

   module.render = (label, input) => {
      module._style();
      return `
         <div class="form-field"> 
            <label class="labels">${label}</label>
            <input id="email" class="inputs" type="email" placeholder="${input}" onkeyup="formField.validate(this)">
         </div>
         `;
   };

   return {
     render: module.render,
     validate: module.validate
   };
})()