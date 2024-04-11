export class Contacto {
    #nombre
    #apellido
    #NumeroTelefonico
    #correoElectronico

    setNombre(nombre){
        this.#nombre = nombre
    }
    getNombre(){
        return this.#nombre
    }
    setApellido(apellido){
        this.#apellido = apellido
    }
    getApellido(){
        return this.#apellido
    }
    setTelefono(telefono){
        this.#NumeroTelefonico = telefono
    }
    getTelefono(){
        return this.#NumeroTelefonico
    }
    setCorreoElectronico(correoElectronico){
        this.#correoElectronico = correoElectronico
    }
    getCorreoElectronico(){
        return this.#correoElectronico
    }

}