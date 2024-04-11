import { cola } from "../controllers/dependencies.js";
import { Contacto } from "./Contacto.js";
export class listaContacto{
    addContacto(nombre,apellido,numero,correo){
        let contacto = new Contacto()

        contacto.setNombre(nombre)
        contacto.setApellido(apellido)
        contacto.setTelefono(numero)
        contacto.setCorreoElectronico(correo)
        let nuevoContacto = contacto
        cola.enqueue(nuevoContacto)
    }
    getContacto(){
        let objcontacto = cola.peek()
        console.log(objcontacto.getNombre())
        return objcontacto
        }
    deleteContacto(){
        let objcontacto=cola.dequeue()
        cola.enqueue(objcontacto)

    }
    comprobacion(){
        return cola.size()
    }
}