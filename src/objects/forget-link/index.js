const forgetLink = (function () {
   const module = {};

   module._style = () => {
      const $head = document.querySelector("head");
      const $style = document.createElement("style");
      $style.textContent = `
         .forget-link {
            color: rgba(58,64,66, 0.5);
            font-size: 14px;
            cursor: pointer;
            margin: 50px 0 100px;
         }
         `;
      $head.insertAdjacentElement("beforeend", $style);
   };

   module.render = () => {
      module._style();
      return `
         <a class="forget-link">Forget password?<a/>
         `;
   };

   return {
      render: module.render,
   };
})();
