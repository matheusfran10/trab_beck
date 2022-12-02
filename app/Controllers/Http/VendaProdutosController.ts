// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import VendaProduto from "App/Models/VendaProduto";

export default class VendaProdutosController {

    index({request}) {
      const {vendaId, produtoId, quantidade, valor} = request.all()

      const vendaProduto = VendaProduto.query().preload('vendas').preload('produtos')
      .select(['id', "produtoId", "vendaId", "quantidade", "valor"])

      if(vendaId){
        vendaProduto.where('vendaId', vendaId)
    }
      if(produtoId){
       vendaProduto.where('produtoId', produtoId)
    }
    if(quantidade){
      vendaProduto.where(quantidade)
  }
    if(valor){
      vendaProduto.where(valor)
  }
      return vendaProduto
      }
    
      store({ request }) {
        const dados = request.only(["produtoId", "vendaId", "quantidade", "valor"]);
    
        return VendaProduto.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return VendaProduto.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const vendaProduto = await VendaProduto.findOrFail(id);
        return vendaProduto.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const vendaProduto = await VendaProduto.findOrFail(id);
    
        const dados = request.only(["produtoId", "vendaId", "quantidade", "valor"]);
    
        vendaProduto.merge(dados);
        return vendaProduto.save();
      }
}
