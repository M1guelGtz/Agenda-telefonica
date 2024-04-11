import { Contacto } from "../models/Contacto.js";
import { listaContacto } from "../models/ListaContacto.js";
import { Queue } from "../models/Queue.js";


export const cola = new Queue()
export const listaDeContactos = new listaContacto()
export const contacto = new Contacto()