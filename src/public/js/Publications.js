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
  let imageGet = localStorage.getItem("img");

  let img = JSON.parse(imageGet);
  let NameGet = localStorage.getItem("name");
  let name = JSON.parse(NameGet);
  console.log(name);
  name.name == null
    ? (document.getElementById("nameUid").innerHTML = "Identificate")
    : (document.getElementById("nameUid").innerHTML = name.name);
  img.img == null
    ? (document.getElementById("publicimgUser").src =
        "https://hylandandpadilla.com/wp-content/plugins/schema-and-structured-data-for-wp//admin_section/images/default_user.jpg")
    : (document.getElementById("publicimgUser").src = img.img);
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
                                <img src="${img.img}" alt="user" />
                            </div>
                            <div class="user-info">
                                <h5 id="userPublic">${name.name}</h5>
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
  for (let i = 0; i <= users.length; i++) {
    let inserimg = { img: await users[i].url_image };
    const insert = localStorage.setItem("img", JSON.stringify(inserimg));
    let inserName = { name: await users[i].name };
    const insertName = localStorage.setItem("name", JSON.stringify(inserName));
  }

  document.querySelector(".idImage").innerHTML = html;
}

resulData();

async function loadData() {
  const response = await fetch("http://localhost:3000/perfilUsuarioData");
  return await response.json();
}
