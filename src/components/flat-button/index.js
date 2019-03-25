const flatButton = (function () {
   const module = {}

   module._id = 0

   module._style = active => {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .flat-button-${module._id} {
            box-sizing: border-box;

            /* solução de botão com tag <button> com suporte ruim para IE e pode dar problema no Chrome também 
               display: inline-flex;
               justify-content: center; */

            /* solução de botão com tag <a> com suporte melhor para browsers antigos */
            display: inline-block;
            padding-top: 60px;
            text-decoration: none;

            width: 50%;
            height: 176px;
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            border: none;
            cursor: pointer;
            letter-spacing: 0.6px;
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
   // content = "teste" e active = false ==> são formas de setar valor default caso o parâmetro não seja carregado na renderização do elemento
   module.render = (content = "teste", active = false ) => {
      module._id++
      module._style(active)
      
      return `<!--
         --><a href="#" class="flat-button-${module._id}">${content}<a><!--
         -->`;
   }

   return {
      render: module.render
   }
})();