export const register = () => {
    const registerTemplate = `
    <section class="registerContainerMain">
        <div class="titleGrid">
            <h1 class="helpPotatoesTittle">Help Potatoes</h1>
        </div>
        <div class= "containerRegisterGrid">
            <p class="registerTittle">Regístrate</p>
            <p class="pIconRegister">Elige el icono con el que te identifiques</p>
        
        <div class="papasImg">
            <img src="./img/papamamá.png">
            <img src="./img/papapapá.png">
            <img src="./img/pape.png">
        </div>
            <div class= "inputContainerRegister">
                <input type="text" id="inputName" placeholder="Usuario">
                <p id="emptyInputName" class="error"></p>
                <input type="email" id="inputEmail" placeholder="Correo electrónico">
                <p id="errorEmail" class="error"></p>
                <input type="password" id="inputPassword"placeholder="Contraseña">
                <p id="passError" class="error"></p>
                <button id="buttonRegister" class="buttonnextPage">Registrarte</button>
            </div>
            <div class="withGoogle">
            <p class="pGoogle">Regístrate con Google</p>
            <img src="./img/googleLogo.png" alt="google logo" id="googleImg" class="logoGoogle">
            <p class="pGoogle">¿Ya tienes una cuenta?</p>
            <button id="backLogin" class="backpage">Iniciar Sesión</button>
            </div>
            <section id="modalEmailV" class="verificationEmailModal" style="display:none">
            <div class="divContainerModal">
            <div class="containerModal">
            <p>Para verificar tu correo revisa tu bandeja de entrada</p>
            <button class="okaybtnModal" id="closeModal">Aceptar</button>
            </div>
            </div>
            </section>
            
    
        </div>
    </section>   
     `;





    return registerTemplate;
}