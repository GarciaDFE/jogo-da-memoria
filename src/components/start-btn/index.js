const startBtn = (function() {
   const module = {}

   module._style = function() {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .start-btn {
            position: relative;
            text-align: center;
            font-family: 'Comfortaa', sans-serife;
            text-indent: -9999px;

            height: 70px;
            width: 70px;

            background-color: #fffcee;
            box-shadow: 0 5px 15px 0 rgba(0,0,0, 0.40);
            border-radius: 50%;
            opacity: 0.8;

            margin-top: -50px;
            z-index: 1;
            cursor: pointer;
         }
         .start-btn::before {
            content: '';
            border-style: solid;
            border-width: 15px 17px;
            border-color: transparent transparent transparent #f25a70;
            position: absolute;

            height: 0;
            width: 0;
            top: 22px;
            left: 28px;
         }
         .start-btn:hover {
            opacity: 1;
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