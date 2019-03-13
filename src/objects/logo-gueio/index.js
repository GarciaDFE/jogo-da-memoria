const logoGueio = (function () {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .bkglogo {
            width: 252px;
            height: 252px;
            background-color: #FFF;
            border-radius: 50%;
            // transform: translateY(-30%);
            text-align: center;
         }
         .logo {
            position: relative;
            // top: 50%;
            // transform: translateY(-50%);
            width: 171px;
         }
         `;
      $head.insertBefore($style, null);
   }

   module.render = () => {
      module._style();
      return `
            <div class="bkglogo"><img class="logo" src="../../img/icon-collabcode.png"></div>
         `;
   }

   return {
      render: module.render
   }
})();