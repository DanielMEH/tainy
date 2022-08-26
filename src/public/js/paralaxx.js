const imagenParalaxx = document.querySelector(".conrParalaxx");
const TitleParalaxx = document.getElementById("title");
const containerImagen = (entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      window.onscroll = function () {
        let posision = window.pageYOffset || document.documentElement.scrollTo;

        const img1 = document.getElementById("img1");
        const img2 = document.getElementById("img2");
        const img3 = document.getElementById("img3");
        const img4 = document.getElementById("img4");
        const img5 = document.getElementById("img5");
        const img6 = document.getElementById("img6");
        img1.style.opacity = "1";
        img2.style.opacity = "1";
        img3.style.opacity = "1";
        img4.style.opacity = "1";
        img5.style.opacity = "1";
        img6.style.opacity = "1";
        img1.style.right = posision * 0.1 + "px";
        img1.style.transform = `translateY(-${posision * 0.1}px)`;
        img2.style.bottom = posision * 0.1 + "px";
        img3.style.left = posision * 0.1 + "px";
        img3.style.transform = `translateY(-${posision * 0.1}px)`;
        img5.style.bottom = posision * 0.1 + "px";
        img4.style.right = posision * 0.1 + "px";
        img4.style.transform = `translateY(${posision * 0.1}px)`;
        img6.style.transform = `translateY(${posision * 0.1}px)`;
        img6.style.left = posision * 0.1 + "px";
      };
    } else {
    }
  });
};

const observerParalaxx = new IntersectionObserver(containerImagen, {
  root: null,
  rootMargin: "100px 0px 100px 0px",
  threshold: 1.0,
});
observerParalaxx.observe(imagenParalaxx);
function observerViews() {}
const textParalaxxContent = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("active");
      entrada.target.classList.remove("delete");
    } else {
      entrada.target.classList.remove("active");
      entrada.target.classList.add("delete");
    }
  });
};

const observerSecond = new IntersectionObserver(textParalaxxContent, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
});
observerSecond.observe(TitleParalaxx);

const thirdImage = document.getElementById("thirdImage");
const observerThirdt = (entradas, observador) => {
  entradas.forEach((entrada) => {
    console.log(entradas);
    if (entrada.isIntersecting) {
      window.onscroll = function () {
        let position = window.pageYOffset || document.documentElement.scrollTo;
        const imagenk = document.querySelector(".imgcount");
        imagenk.style.opacity = "1";
        let arrayImagen = [...document.querySelectorAll(".cunt-j")];
        arrayImagen.forEach((entrada) => {
          entrada.classList.add("activ");
        });
      };
    } else {
      let arrayImagen = [...document.querySelectorAll(".cunt-j")];
      arrayImagen.forEach((entrada) => {
        entrada.classList.remove("activ");
      });
    }
  });
};

const newObserverSecond = new IntersectionObserver(observerThirdt, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
});
newObserverSecond.observe(thirdImage);
