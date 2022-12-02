// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Ingrediente from "App/Models/Ingrediente";

export default class IngredientesController {

    index() {
        return Ingrediente.all();
      }
    
      store({ request }) {
        const dados = request.only(["nome",]);
    
        return Ingrediente.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Ingrediente.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const ingrediente = await Ingrediente.findOrFail(id);
        return ingrediente.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const ingrediente = await Ingrediente.findOrFail(id);
    
        const dados = request.only(["nome"]);
    
        ingrediente.merge(dados);
        return ingrediente.save();
      }
}
