//import yup from 'yup';

const formInput = (function() {
   const module = {};

   // const schema = yup.object({
   //    name: yup.string().required(),
   //    email: yup.string().test('is-jimmy', '${path} is not Jimmy', function (value) {
   //       return new Promise((res, rej) => {
   //          console.log('firing async validation')
   //          setTimeout(() => res(value !== "foo@bar.com"))
   //       })
   //    })
   // });


   module.validate = (input) => {
         this.setState({[field]: e.target.value})
         schema.isValid(this.state)
   }

   module._style = () => {
      const $head = document.querySelector("head");
      const $style = document.createElement("style");
      $style.textContent = `
         .form-input {
            display: block;
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            color: #3A4042;
            border-bottom: 2px rgba(58,64,66, 0.5) solid;
            padding: 12px 0;
            margin-bottom: 29px;
         }
         `;
         $head.insertAdjacentElement("beforeend", $style);
   };

   // module.validate = (input) => {
   //    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   //    const teste = regex.test(input.value)
   //    console.log("Resultado do teste:", teste)
   // }

   // module.render = input => {
   //    module._style();
   //    return `
   //       <input id="email" class="form-input" type="email" placeholder="${input}" onInput="formInput.validate(this)">
   //       `;
   // };

   module.render = input => {
      module._style();
      return `
         <input id="email" class="form-input" type="email" placeholder="${input}" onInput="formInput.validate(this)">
         `;
   };


   return {
      render: module.render,
      //validate: module.validate
   };
})();
