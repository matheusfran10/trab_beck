// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProdutoIngrediente from "App/Models/ProdutoIngrediente";

export default class ProdutoIngredientesController {

    index({ request}) {
      const {produtoId, ingredienteId} = request.all()

      const produtoIngrediente = ProdutoIngrediente.query().preload('produtos').preload('ingredientes')
      .select(['id', "produtoId", "ingredienteId"])

      if(produtoId){
        produtoIngrediente.where('produtoId', produtoId)
    }
      if(ingredienteId){
        produtoIngrediente.where('ingredienteId', ingredienteId)
    }
   
      return produtoIngrediente
      }
    
      store({ request }) {
        const dados = request.only(["produtoId", "ingredienteId"]);
    
        return ProdutoIngrediente.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return ProdutoIngrediente.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const produtoIngrediente = await ProdutoIngrediente.findOrFail(id);
        return produtoIngrediente.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const produtoIngrediente = await ProdutoIngrediente.findOrFail(id);
    
        const dados = request.only(["produtoId", "ingredienteId"]);
    
        produtoIngrediente.merge(dados);
        return produtoIngrediente.save();
      }
}
