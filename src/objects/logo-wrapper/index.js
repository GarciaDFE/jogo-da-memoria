const logoWrapper = (function() {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .logo-wrapper {
            width: 372px;
            // display: flex;
            // flex-direction: column;
            // align-items: center;
            // color: #000;
            // background-color: #FFF;
            text-align: center;
            transform: translateY(-25%);
         }
         `;
      $head.insertAdjacentElement("beforeend", $style);
   }
   
   module.render = (...$children) => {
      module._style();
      return `
            <div class="logo-wrapper">
               ${$children.join("")}
            </div>
         `
   }

   return {
      render: module.render
   }
})()