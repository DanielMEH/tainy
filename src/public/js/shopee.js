let precio = document.querySelector('.price');
let fecha = document.querySelector(".envio-title");
let hora = document.querySelector(".hora");
let likes =document.querySelector(".likes");
let comentarios = document.querySelector(".comentarios");
console.log(document.querySelector('.shopee'));
  const money = new Intl.NumberFormat("en-CO", {
   style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
 });
 let convertPeso = money.format(precio);
 console.log(convertPeso);
    console.log( "aaaaa,",precio.innerHTML = convertPeso);
