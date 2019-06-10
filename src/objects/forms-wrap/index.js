function createFormsWrapper() {
  const $formsWrapper = document.createElement("section");
  $formsWrapper.classList.add("forms-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
        .forms-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: flex-start;
            width: 372px;
            height: 850px;
            margin: 0 auto;
            border: 1px #dadada solid;
            background-color: yellow;
        }`;

  $head.insertBefore($style, null);

  return $formsWrapper;
}
