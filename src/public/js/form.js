const eyeView = document.getElementById("eyeView");
const password = document.getElementById("passwordd");

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

leftImiciar.addEventListener("click", () => {
  if (leftImiciar !== "click") {
    contentProvider.classList.add("actimg");
    document.getElementById("title").style.color = "#000";
  }
  if (leftImiciar && "click") {
    createCount.addEventListener("click", () => {
      contentProvider.classList.remove("actimg");
      document.getElementById("title").style.color = "#fff";
    });
  }
});
