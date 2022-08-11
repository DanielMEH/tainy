let getData = localStorage.getItem("data");
console.log(getData);
let data = JSON.parse(getData);
let date = data.dataCookie;
console.log(date);
document
  .querySelector(".recoveryForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const password = document.querySelector("password").value;
    const password2 = document.querySelector("password1").value;
    if (
      (password == null && password2 == null) ||
      (password == "" && password2 == "")
    ) {
      document.getElementById("cambiostate").innerHTML =
        "El campo no puede estar vacio";
      document.getElementById("cambiostate").style.color = "red";
      setTimeout(() => {
        document.getElementById("cambiostate").innerHTML = "";
      }, 3000);
      return;
    } else {
      document.querySelector(".spinner").style.display = "block";
      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch(
        `http://localhost:3000/recovery/usuario/${email}`,
        {
          method: "POST",
          header: { "Content-type": "application/x-www-form-urlencoded" },
          body: formData,
        }
      );

      const data = response;
      if (data.status == 200) {
        const data = await response.json();
        console.log(data);
        if (data.message == "DATA_SUCCESSFUL") {
          document.querySelector(".spinner").style.display = "none";

          let dataAuntentication = { dataCookie: email };
          let dataEmail = localStorage.setItem(
            "data",
            JSON.stringify(dataAuntentication)
          );
          console.log(dataEmail);
          window.location.href = `http://localhost:3000/recovery/password/user`;
          return;
        } else if (data.message == "ERROR_DATAMYSQLI") {
          await Swal.fire({
            icon: "error",
            title: "Este correo no existe",
            text: "Intenta de nuevo",
          });
          document.querySelector(".spinner").style.display = "none";
          return;
        }
      }
    }
  });
