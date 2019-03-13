function createFormWrapper() {
   const $formWrapper = document.createElement("section")
   $formWrapper.classList.add("form-wrapper")
   const $head = document.querySelector("head")
   const $style = document.createElement("style")
   $style.textContent = `
      .form-wrapper {
         width: 372px;
         display: flex;
         flex-direction: column;
         align-items: center;
         color: #000;
         background-color: #FFF;
      }
      `;
   $head.insertBefore($style, null);

   return $formWrapper
}