const formEye = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-eye {
         display: block;
         text-indent: -9999px;
         background-image: url("../../img/hidden.svg");
         background-repeat: no-repeat;
         background-position: center;
         width: 24px;
         height: 15px;
         cursor: pointer;
         //background-image: url({$active ? "../../img/eye-show.svg" : "../../img/eye-hidden.svg"});
      }
      //.form-eye:hover {
      //   background-image: url("../../img/eye-show.svg");
      //}
      `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = () => {};

  module.render = ({ attrFor = "" }) => {
    module._style();

    return `
      <label 
        for="${attrFor}"
        class="form-eye" 
        onClick="formEye.handleClick()">Mostrar senha</label>
      `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
