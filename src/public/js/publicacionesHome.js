

let publicData = []
async function CardsPublicdata(){

    const data = await getPublicaionesHome()
    const cardsPublicTainy = document.getElementById("cardsPublicTainy")
    publicData = data.dataPublic
    let html ="";
    for (let i = 0; i < publicData.length; i++) {
        
        html += `

        <section class="slidersContent">
        <img src="${publicData[i].url_image}" alt="">
        <div class="datos">
            <div class="h">${publicData[i].nombreC}</div>
            <div class="p">⭐⭐⭐ 3.4</div>
            <div class="p">${publicData[i].realizacionC}</div>
            <div class="d"><a href="">Adquirir ahora</a></div>
        </div>
        <div class="viwsTolpiInfo">
            <div class="tic-tol"></div>
            <div class="head-top-s">
                <h3>Concierto las palmas</h3>
                <p>En descuento</p>
            </div>
            <div class="second-head-t">
                <div class="tfll">
                    El mejor concierto de la historria entra ya
                </div>
                <div class="start-topl">
                    <span class="fd">Muy bien</span> <span class="df">8.3</span>
                </div>
            </div>
            <div class="data-tolpi">
                <div class="topl1-ul">
                    <ul class="ul">
                        <li>Precio: <span>50.000</span></li>
                        <li>Lugar: <span>Armenia</span></li>
                        <li>Hora: <span>50:pms</span></li>
                    </ul>
                </div>
                <div class="topl1-ul">
                    <ul>
                        <li>Fecha: <span>10-agosto-2022</span></li>
                        <li>Lugar: <span>Armenia</span></li>
                        <li>Hora: <span>50:pms</span></li>
                    </ul>
                </div>
        
            </div>
            <div class="ubicacion">
                <div class="cantantes">
                    Cantantes: Bad bunny, Arcangel, Daddy yanki, Zhakira
                </div>
        
                <div class="mapIcon">
                    <span>Ver ubicacion <i class="fas fa-map-marker-alt"></i></span>
                </div>
            </div>
        </div>
    </section>
        `;
        
        
    }
   

    cardsPublicTainy.innerHTML = html
    
}


CardsPublicdata()

async function  getPublicaionesHome(){

    const response = await fetch("http://localhost:3000/publicacionesHome")
    return await response.json()


}
getPublicaionesHome()