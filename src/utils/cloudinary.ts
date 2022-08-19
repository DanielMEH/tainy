import {v2 as cloudinary} from "cloudinary"
import { claudinar_Name, claudinaryKey, claudinarySecret} from "../config/config"
cloudinary.config({

    cloud_name: claudinar_Name,
    api_key:  "537363646887393",
    api_secret: "B9HM9OZ1y-xprAEMOK0KbcUi5Mg",
    secure: true
})

export async function uploadImage(filePath : any) {

  return await  cloudinary.uploader.upload(filePath,{

        folder: "tainy"
        
    })
}
export async function uploadPublicImagen(filePath : any) {

  return await  cloudinary.uploader.upload(filePath,{

        folder: "tainy"
        
    })
}
export async function deleteImage(filePath : any) {

    return await  cloudinary.uploader.destroy(filePath)
}