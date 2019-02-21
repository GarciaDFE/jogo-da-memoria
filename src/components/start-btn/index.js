const startBtn = (function() {
   const module = {}

   module._style = function() {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .start-btn {
            position: absolute;
            width: 70px;
            height: 70px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);

            text-align: center;
            font-family: 'Comfortaa', sans-serife;
            text-indent: -9999px;

            background-color: #2ed573;
            box-shadow: 0 5px 15px 0 rgba(0,0,0, 0.4);
            border-radius: 50%;
            opacity: 0.8;

            cursor: pointer;
         }
         .start-btn::before {
            content: '';
            border-style: solid;
            border-width: 15px 17px;
            border-color: transparent transparent transparent #fffcee;
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
         .start-btn.-playing {
            display: none;
         }
      `;
      $head.insertBefore($style, null)
   }

   module.handleClick = () => {
     const $startBtn = document.querySelector(".start-btn");
     const $coverGame = document.querySelector(".cover-game");
     $startBtn.classList.add("-playing");
     $coverGame.classList.add("-playing");
   };

   module.render = () => {
      module._style();

      return `
         <buttom class="start-btn" onclick="startBtn.handleClick()">
            <a href="#" class="play">Start</a>
         </buttom>
      `;
   }

   return {
      render: module.render,
      handleClick: module.handleClick
   }
})();