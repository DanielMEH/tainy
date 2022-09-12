let publicData = [];
async function CardsPublicdata() {
  const data = await getPublicaionesHome();
  const cardsPublicTainy = document.getElementById("cardsPublicTainy");
  const cardsPublicTainy2 = document.getElementById("cardsPublicTainy2");
  const carrusel__imagenes = document.getElementById("carrusel__imagenes");
  const addCoursel = document.querySelector(".addCoursel");
  console.log(addCoursel);
  publicData = data.dataPublic;
  console.log(publicData);
  let html = "";
  let htmlCarrusel = "";
  let htmlCarruselItems = "";
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  for (let i = 0; i < publicData.length; i++) {
    let nums = publicData[i].like;
    let numberParts = nums.toString().split(".");
    numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let numss = numberParts.join(".");
    fecha = new Date(publicData[i].fechaC);

    html += `

        <section class="slidersContent">
        <img src="${publicData[i].url_image}" alt="">
        <div class="datos">
            <div class="h">${publicData[i].nombreC}</div>
            <div class="p">⭐⭐⭐ ${publicData[i].calificacion}</div>
            <div class="p">${publicData[i].realizacionC}</div>
            <div class="d "><a class="shpeecomp" href="/shoppe/${
              publicData[i].idPublic
            }">Adquirir ahora</a></div>
        </div>
        <div class="viwsTolpiInfo">
            <div class="tic-tol"></div>
            <div class="head-top-s">
                <h3>${publicData[i].nombreC}</h3>
                <p>En descuento</p>
            </div>
            <div class="second-head-t">
                <div class="tfll">
                    El mejor concierto de la historria entra ya
                </div>
                <div class="start-topl">
                    <span class="fd">Muy bien</span> <span class="df">${
                      publicData[i].calificacion
                    }</span>
                </div>
            </div>
            <div class="data-tolpi">
                <div class="topl1-ul">
                    <ul class="ul">
                        <li>Precio: <span>${money.format(
                          publicData[i].precioC
                        )}</span></li>
                        <li>Lugar: <span>${
                          publicData[i].realizacionC
                        }</span></li>
                        <li>Hora: <span>${moment(
                          publicData[i].horaC,
                          "H:m:s"
                        ).format("h:mm a")}</span></li>
                    </ul>
                </div>
                <div class="topl1-ul">
                    <ul>
                        <li>Fecha: <span>${fecha.toLocaleDateString(
                          "es-ES",
                          options
                        )}</span></li>
                        <li>Numero de coleta: <span>${
                          publicData[i].boletasC
                        }</span></li>
                        <li><i class="fas fa-heart"></i> <span>${numss}</span></li>
                    </ul>
                </div>
        
            </div>
            <div class="ubicacion">
                <div class="cantantes">
                   Cantantes: ${publicData[i].artistaC}
                </div>
        
                <div class="mapIcon">
                    <span>Ver ubicacion <i class="fas fa-map-marker-alt"></i></span>
                </div>
            </div>
        </div>
    </section>
        `;
  }

  for (let k = 1; k < publicData.length; k++) {
    htmlCarrusel += `
    <div class="img1">
    <img src="${publicData[k].url_image}" alt="">
    </div>`;
  }


  cardsPublicTainy.innerHTML = html;
  cardsPublicTainy2.innerHTML = html;
  carrusel__imagenes.innerHTML = htmlCarrusel;
}

CardsPublicdata();

async function getPublicaionesHome() {
  const response = await fetch("http://localhost:3000/publicacionesHome");

  return await response.json();
}
getPublicaionesHome();
