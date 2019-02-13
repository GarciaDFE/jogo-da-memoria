const startBtn = (function() {
   const module = {}

   module._style = function() {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .start-btn {
            background-color: #3a4042;
            height: 40px;
            width: 100px;
            text-align: center;
            font-family: 'Comfortaa', sans-serife;
            border-radius: 20px;
            margin-top: -20px;
            z-index: 1;
         }
         .start-btn > .play {
            line-height: 40px;
            text-align: inherit;
            font-size: 20px;
            color: #fff;
            font-weight: bold;
            text-decoration: none;
         }
      `;
      $head.insertBefore($style, null)
   }

   module.create = () => {
      module._style();

      return `
         <buttom class="start-btn">
            <a href="#" class="play">Start</a>
         </buttom>
      `
   }

   return {
      create: module.create
   }
})();