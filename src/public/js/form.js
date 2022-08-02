const eyeView = document.getElementById("eyeView");
const password = document.getElementById("passwordd");
const formulario = document.querySelector(".formulariLogout");
const inputs = document.querySelectorAll(".formulariLogout .input");
const formularioLogin = document.querySelector(".formularioLogin");
const formularioInputs = document.querySelectorAll(".formularioLogin input");

const expresiones = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
};
let camposValidation = {
  correo: false,
  password: false,
};

function validarFormulario(e) {
  switch (e.target.name) {
    case "email":
      dataCampos(expresiones.correo, e.target, "email");
      break;
    case "password":
      dataCampos(expresiones.password, e.target, "password");
      break;

    default:
      break;
  }
}

const dataCampos = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.querySelector(`.group_${campo}`).classList.add("textGood");
    document.querySelector(`.group_${campo}`).classList.remove("textValidetor");
    document.querySelector(`.validatos_${campo}`).classList.add("textrue");
    document.querySelector(`.group_${campo}`).classList.remove("textValidetor");

    camposValidation[campo] = true;
  } else {
    document.querySelector(`.group_${campo}`).classList.remove("textGood");
    document.querySelector(`.validatos_${campo}`).classList.add("textcolor");
    document.querySelector(`.validatos_${campo}`).classList.remove("textrue");
    document.querySelector(`.group_${campo}`).classList.add("textValidetor");
    document.querySelector(`.valib`).style.display = "none";

    camposValidation[campo] = false;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);

  input.addEventListener("blur", validarFormulario);
});

/* =============================== */
const expresiones1 = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
};
let camposValidation1 = {
  correo: false,
  password: false,
};

function validarFormulario1(e) {
  switch (e.target.name) {
    case "correo":
      dataCampos1(expresiones1.correo, e.target, "correo");
      break;
    case "passwordd":
      dataCampos1(expresiones1.password, e.target, "passwordd");
      break;

    default:
      break;
  }
}

const dataCampos1 = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.querySelector(`.group_${campo}`).classList.add("textGood");
    document.querySelector(`.group_${campo}`).classList.remove("textValidetor");
    document.querySelector(`.validatos_${campo}`).classList.add("textrue");
    document.querySelector(`.group_${campo}`).classList.remove("textValidetor");

    document.querySelector(`.tyu`).style.display = "none";
    camposValidation1[campo] = true;
  } else {
    document.querySelector(`.group_${campo}`).classList.remove("textGood");
    document.querySelector(`.validatos_${campo}`).classList.add("textcolor");
    document.querySelector(`.validatos_${campo}`).classList.remove("textrue");
    document.querySelector(`.group_${campo}`).classList.add("textValidetor");

    document.querySelector(`.tyu`).style.display = "block";
    camposValidation1[campo] = false;
  }
};
formularioInputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario1);

  input.addEventListener("blur", validarFormulario1);
});

/* */
eyeView.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
const eyeViews = document.getElementById("eyeViewst");
const passwords = document.getElementById("password");

eyeViews.addEventListener("click", () => {
  if (passwords.type === "password") {
    passwords.type = "text";
  } else {
    passwords.type = "password";
  }
});

const leftImiciar = document.getElementById("leftImiciar");
const contentProvider = document.getElementById("contentProvider");
const createCount = document.getElementById("createCount");
const menuBarrea = document.querySelector(".icon-item a i");

leftImiciar.addEventListener("click", () => {
  if (leftImiciar !== "click") {
    contentProvider.classList.add("actimg");
    document.getElementById("title").style.color = "#000";
    menuBarrea.style.color = "#fff";
    menuBarrea.style.background = "rgb(0 0 0 / 17%)";
    menuBarrea.style.padding = "10px";
    menuBarrea.style.fontSize = "1.5rem";
    menuBarrea.style.margin = "0px";
    menuBarrea.style.borderRadius = "10px";
  }
  if (leftImiciar && "click") {
    createCount.addEventListener("click", () => {
      contentProvider.classList.remove("actimg");
      document.getElementById("title").style.color = "#fff";
      menuBarrea.style.color = "#fff";
      menuBarrea.style.background =
        " linear-gradient(90deg, #475ED7 0%, #D895CD 53.51%)";
      menuBarrea.style.padding = "10px 18px";
      menuBarrea.style.fontSize = "30px";
      menuBarrea.style.margin = "10px";
      menuBarrea.style.borderRadius = "50px";
    });
  }
});
