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
            text-align: center;
            transform: translateY(-30%);
            margin-bottom: -70px;
         }
         .logo {
            position: relative;
            top: 30%;
            transform: translateY(-20%);
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