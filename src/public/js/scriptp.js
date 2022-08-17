const clickModal = document.querySelector(".update")
clickModal.addEventListener("click",()=>{

    if (clickModal !== "click") {
    const modal= document.querySelector(".modal")
    const formModal = document.querySelector(".formulario")
    formModal.style.transform =" translateY(0)"
    modal.style.visibility =" visible"
    modal.style.opacity ="1"
    console.log(modal);
        
    }

    if(clickModal && "click"){
            const modal= document.querySelector(".modal")
            const formModal = document.querySelector(".formulario")
            formModal.style.transform =" translateY(0)"
            document.querySelector("#cancel").addEventListener("click",()=>{
            formModal.style.transform =" translateY(-35rem)"
            modal.style.visibility ="hidden"
            modal.style.opacity ="0"
        })
    }

    
  })

  let users = []
  async function resulData(){

    const data = await  loadData()
    users = data.data
    userListData(users)
   
    

  }
  resulData()

   async function loadData() {
    const response = await fetch("http://localhost:3000/perfilUsuarioData")
    return await response.json()
    
       
   }
  
   const itemsUserData = users => users.map(user =>{
       document.querySelector("#nameUser").innerHTML = `${user.name == "" ? "Identificate": user.name}`
       document.querySelector("#emailConect").innerHTML = `${user.correo == "" ? "Añadir": user.correo}`
       document.querySelector("#appelidoConect").innerHTML = `${user.apellido == "" ? "Añadir": user.apellido}`
       document.querySelector("#edadConect").innerHTML = `${user.edad == "" ? "Añadir": user.edad}`
       document.querySelector("#telConect").innerHTML = `${user.telefono == "" ? "Añadir": user.telefono}`
       document.querySelector("#nameUsers").innerHTML = `${user.name == "" ? "Identificate": user.name}`
       document.querySelector("#nnameUser").innerHTML = `${user.name == "" ? "Identificate": user.name}`
       document.querySelector("#dateCount").innerHTML = `${user.DateCreateCount == "" ? "Identificate": "data"}`
       document.querySelector("#countHeader").innerHTML = `${user.url_image == "" ? `
       <img src="image/imgDasboard/avatar.png" alt="">`: `<img src="${user.url_image}" alt="">`}`
       document.querySelector("#avatarImage").innerHTML = `
       
       ${user.url_image == "" ?`<img src="image/imgDasboard/avatar.png" alt="img-avatar" class="avatar-img">
       <button type="button" class="boton-avatar">
           <i class="far fa-image"></i>
       </button>` : `<img src="${user.url_image}" alt="img-avatar" class="avatar-img">
       <button type="button" class="boton-avatar">
           <i class="far fa-image"></i>
       </button>`}  
       
       `
       document.querySelector("#formularioTab").innerHTML =  `
       
       <div class="input">
       <input type="hidden" placeholder="Nombre" name="id" 
       class="border outline-none w-11/12 p-2 rounded m-3 focus:border-[#9f10e6]"
       value="${user.id }">
                    <input type="text" placeholder="Nombre" name="nombre" 
                        class="border outline-none w-11/12 p-2 rounded m-3 focus:border-[#9f10e6]"
                        value="${user.name }">
                </div>
                <div class="input">
                    <input type="text" placeholder="Apellido" name="apellido" 
                        class="border outline-none w-11/12 p-2 rounded m-3 focus:border-[#9f10e6]"
                        value="${user.telefono }">
                </div>
                <div class="input">
                    <input type="text" placeholder="Telefono" name="telefono" 
                        class="border outline-none w-11/12 p-2 rounded m-3 focus:border-[#9f10e6]"
                        value="${user.telefono}">
                </div>
                <div class="input">
                    <input type="text" placeholder="telefono" name="correo" 
                        class="border outline-none w-11/12 p-2 rounded m-3 focus:border-[#9f10e6]"
                        value="${user.correo}">
                </div>
                <div class="input">
                    <input type="text" placeholder="Edad" name="edad" 
                        class="border outline-none w-11/12 p-2 rounded m-3 focus:border-[#9f10e6]"
                        value="${user.edad}">
                </div>
                <div class="upload ">
                    <div class="span">Subir imagen <i class="fas fa-upload"></i></div>
                    <input type="file" placeholder="Imagen" name="image" 
                        class="absolute inset-0 w-full opacity-0 cursor-pointer">
    
                </div>
                <div class="buttons">
                    <span id="cancel">Cancelar</span>
                    <button class="border outline-none w-11/12 p-2 rounded m-3">Guardar</button>

                </div>
       `
      
    
   })
   function userListData(users){
       
       const itemsUser = itemsUserData(users)
       
       
    }
   
 

