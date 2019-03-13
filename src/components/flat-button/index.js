const flatButton = (function () {
   const module = {}

   module._id = 0

   module._style = active => {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .flat-button-${module._id} {
            display: inline-block;
            width: 186px;
            height: 176px;
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            border: none;
            cursor: pointer;
            color: ${active ? "#FFFFFF" : "#FFFCEE"};
            background-color: ${active ? "#F25A70" : "#EAE6DA"};
         }
         .flat-button-${module._id}:hover {
            color: #FFFFFF;
            background-color: #F25A70;            
         }
      `;

      $head.insertBefore($style, null);

   }
   module.render = (content = "teste", active = false ) => {
      module._id++
      module._style(active)
      
      return `
         <button class="flat-button-${module._id}">${content}</button>
      `;
   }

   return {
      render: module.render
   }
})();