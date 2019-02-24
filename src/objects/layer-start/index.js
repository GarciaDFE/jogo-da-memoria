const layerStart = (function() {
   const module = {};

   module.handleClick = $component => $component.remove();

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
   }

   module.render = (content) => {
      module._style();

      const $coverGame = coverGame.render();
      const $startBtn = startBtn.render(content);

      return `
         <div class="layer-start" onClick="layerStart.handleClick(this)">
            ${$coverGame}
            ${$startBtn}
         </div>
      `;
   }

   return {
      render: module.render,
      handleClick: module.handleClick
   }

})()