const eyeView = document.getElementById("eyeView");
const password = document.getElementById("password");
const formulario = document.querySelector(".formulariLogout");
const inputs = document.querySelectorAll(".formulariLogout .input");

const expresiones = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
};
const campos = {
  email: false,
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
    campos[campo] = true;
  } else {
    document.querySelector(`.group_${campo}`).classList.remove("textGood");
    document.querySelector(`.validatos_${campo}`).classList.add("textcolor");
    document.querySelector(`.validatos_${campo}`).classList.remove("textrue");
    document.querySelector(`.group_${campo}`).classList.add("textValidetor");
    document.querySelector(`.valib`).style.display = "none";
    campos[campo] = false;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);

  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos.email && campos.password) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let ajax;
    let method = "POST";
    let url = "http://localhost:3000/loginAuthent";
    ajax = new XMLHttpRequest();
    ajax.onreadystatechange = async function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = this.responseText;
        

        if (response == "EXISTEMAIL") {
          await Swal.fire({
            icon: "error",
            title: "Este correo ya existe ",
            text: "Intenta con otro",
          });
          return;
        } else if (response == "SAVEDATA") {
          await Swal.fire({
            position: "center",
            icon: "success",
            title: "Te has registrado exitosamente ",
            text: "Inicia sesión para continuar",
            showConfirmButton: false,
            timer: 2300,
          });
          await formulario.reset();
          return;
        }
      }
    };

    ajax.open(method, url, true);
    ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    ajax.send("email=" + email + "&password=" + password);
  } else {
    const validation = document.getElementById("validation");
    validation.innerHTML = "<p>Los datos no son validos</p>";
    validation.style.color = "red";
    return setTimeout(() => {
      validation.innerHTML = "";
    }, 5000);
  }
});
/* =============================== */

/* */
eyeView.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
const eyeViews = document.getElementById("eyeViewst");
const passwords = document.getElementById("passwordd");

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
