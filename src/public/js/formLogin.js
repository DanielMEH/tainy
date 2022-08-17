const formularioLogin = document.querySelector(".formularioLogin");
const formularioInputs = document.querySelectorAll(".formularioLogin input");

formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".spinnerLogin").style.display = "block";
  let email = document.getElementById("correo").value;
  let password = document.getElementById("passwordd").value;
  let ajax;
  let method = "POST";
  let url = "http://localhost:3000/loginAuthentication";
  ajax = new XMLHttpRequest();
  ajax.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = this.responseText;

      if (response == "LOGIN") {
        document.querySelector(".spinnerLogin").style.display = "none";
        window.location.href = "http://localhost:3000/perfil";
        return;
      } else if (response == "ERRORDATALOGIN") {
        document.querySelector(".spinnerLogin").style.display = "none";
        await Swal.fire({
          icon: "error",
          title: "Este Usuario no existe ",
          text: "Intenta de nuevo",
        });
        return;
      }
    }
  };

  ajax.open(method, url, true);
  ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  ajax.send("email=" + email + "&password=" + password);
});
