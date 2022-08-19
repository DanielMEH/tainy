const clickModal = document.querySelector(".update");
clickModal.addEventListener("click", () => {
  if (clickModal !== "click") {
    const modal = document.querySelector(".modal");
    const formModal = document.querySelector(".formulario");
    formModal.style.transform = " translateY(0)";
    modal.style.visibility = " visible";
    modal.style.opacity = "1";
    console.log(modal);
  }

  if (clickModal && "click") {
    const modal = document.querySelector(".modal");
    const formModal = document.querySelector(".formulario");
    formModal.style.transform = " translateY(0)";
    document.querySelector("#cancel").addEventListener("click", () => {
      formModal.style.transform = " translateY(-35rem)";
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    });
  }
});
