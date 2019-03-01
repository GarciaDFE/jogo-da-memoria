const headerLogin = (function () {
   const module = {}
   
   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .wrap-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
         }
         .header-login {
            display: flex;
            height: 176px;
            width: 372px;
            color: #FFFFFF;
            font-family: 'Comfortaa', sans-serife;
            font-size: 24px;
            margin: 0 auto;
         }
         .header-login .login {
            width: 50%;
            background-color: #f25a70;
            color: #fff;
            text-align: center;
            line-height: 150px;
         }
         .header-login .signup {
            display: block;
            width: 50%;
            background-color: #eae6da;
            color: #FFFCEE;
            text-align: center;
            line-height: 150px;
         }
         .bkglogo {
            width: 252px;
            height: 252px;
            background-color: #FFF;
            border-radius: 50%;
            transform: translateY(-30%);
            text-align: center;
         }
         .logo {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            width: 171px;
         }
         .wrap-header > .wrap-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: -80px;
            width: 302px;
            font-family: 'Comfortaa', sans-serife;
         }
         .wrap-form > .title {
            font-size: 24px;
            color: #f25a70;
            text-transform: uppercase;
            margin-bottom: 60px;
            text-align: center;
         }
         .wrap-form > .labels {
            text-align: left;
            color: rgba(58,64,66, 0.5);
            font-size: 16px;
         }
         .wrap-form .inputs {
            text-align: left;
            margin-bottom: 12px;
            font-size: 18px;
            font-weight: bold;
            font-family: inherit;
            border: none;
            border-bottom: 1px rgba(58,64,66, 0.5) solid;
            line-height: 35px;
            margin-bottom: 40px;
            color: #3A4042;
         }
         .wrap-form .inputs.-pwd {
            background-image: url("../../img/hidden.svg");
            background-repeat: no-repeat;
            background-position: right;
            background-size: 23px;
            font-size: 22px;
            letter-spacing: 4px;
         }
         .wrap-form .forget {
            text-align: right;
            color: rgba(58,64,66, 0.5);
            font-size: 14px;
            cursor: pointer;
            margin-bottom: 113px;
         }
         .wrap-form .submit {
            height: 48px;
            width: 302px;
            line-height: 48px;
            border: none;
            border-radius: 24px;
            background-color: #f25a70;
            color: #FFF;
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
         }
         `;
      $head.insertBefore($style, null);
   }

   module.render = () => {
      module._style();
      return `
         <section class="wrap-header">
            <header class="header-login">
               <a class="login">LOG IN</a>
               <a class="signup">SIGN UP</a>
            </header>
            <div class="bkglogo"><img class="logo" src="../../img/icon-collabcode.png"></div>
            <div class="wrap-form">
               <h1 class="title">Hello!</h1>
               <label class="labels">Username or e-mail</label>
               <input class="inputs" placeholder="example@email.com">

               <label class="labels">Password</label>
               <input class="inputs -pwd" type="password" length="8" placeholder=" " required>
               <a class="forget">Forget password?<a/>

               <button class="submit" type="submit">Login</button>
            </div>
         </section>
         `;
   }

   return {
      render: module.render
   }
})();