let Publications = [];

async function renderData() {
  let data = await getPublications();
  console.log(data);
  Publications = data.data;
  itemsPublic(Publications);
}
renderData();
async function getPublications() {
  let response = await fetch("http://localhost:3000/publicationDataUser");

  return await response.json();
}

const getPublicationsUser = (publications) =>
  publications.map((publication) => {});

function itemsPublic(Publications) {
  getPublicationsUser(Publications);
  console.log(Publications);
  let html = "";
  for (let i = 0; i < Publications.length; i++) {
    html += `
            <div class="card-d">
                    <div class="card-header">
                        <img src="${Publications[i].url_image}" alt="rover" />
                    </div>
                    <div class="card-body">
                        <h4>
                            <span class="tag tag-purple" id="nombreCon">${Publications[i].nombreC}</span>
                        </h4>
                        <p>Lugar: <span id="lugar"></span>${Publications[i].realizacionC}</p>
                        <span class="tag tag-teal">Adquirir ahora</span>
                        <div class="user">
                            <div class="idImage">
                                <img src="https://www.crea.org.ar/wp-content/uploads/2017/10/Avatar-1.jpg" alt="user" />
                            </div>
                            <div class="user-info">
                                <h5 id="userPublic"></h5>
                                <small ><span id="date">Hace: ${Publications[i].fechaAdd}</span></small>
                            </div>
                        </div>
                    </div>
                </div>
            `;
  }
  document.querySelector("#cards").innerHTML = html;
}

let users = [];
async function resulData() {
  const data = await loadData();
  users = data.data;

  let html = "";
  for (let i = 0; i < users.length; i++) {
    html += ` ${
      users[i].url_image !== null
        ? `<img src="${users[i].url_image}" alt="user" />`
        : `<img src="https://www.crea.org.ar/wp-content/uploads/2017/10/Avatar-1.jpg" alt="user" />`
    }`;
  }

  document.querySelector(".idImage").innerHTML = html;
}
resulData();

async function loadData() {
  const response = await fetch("http://localhost:3000/perfilUsuarioData");
  return await response.json();
}
