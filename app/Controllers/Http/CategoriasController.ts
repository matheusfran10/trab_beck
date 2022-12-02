// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria";

export default class CategoriasController {
    index() {
      return Categoria.query().preload('produtos');
      }
    
      store({ request }) {
        const dados = request.only(["nome"]);
    
        return Categoria.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Categoria.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const categoria = await Categoria.findOrFail(id);
        return categoria.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const categoria = await Categoria.findOrFail(id);
    
        const dados = request.only(["nome"]);
    
        categoria.merge(dados);
        return categoria.save();
      }
}
