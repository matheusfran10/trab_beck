// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Marca from "App/Models/Marca";

export default class MarcasController {

    index() {
      return Marca.query().preload('produtos')
      }
    
      store({ request }) {
        const dados = request.only(["nome"]);
    
        return Marca.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Marca.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const marca = await Marca.findOrFail(id);
        return marca.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const marca = await Marca.findOrFail(id);
    
        const dados = request.only(["nome"]);
    
        marca.merge(dados);
        return marca.save();
      }
}
