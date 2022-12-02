// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto";

export default class ProdutosController {

    index({request}) {
      return Produto.query().preload('vendaprodutos')
      return Produto.query().preload('produtoingredientes')

      const {marcaId, categoriaId, tamanho, valor} = request.all()

      const produto = Produto.query().preload('marcas').preload('categorias')
      .select(['id', "marcaId", "categoriaId", "tamanho", "valor"])

      if(marcaId){
        produto.where('marcaId', marcaId)
    }
      if(categoriaId){
        produto.where('categoriaId', categoriaId)
    }
    if(tamanho){
      produto.where(tamanho)
  }
    if(valor){
      produto.where(valor)
  }
    
      return produto
      }
    
      store({ request }) {
        const dados = request.only(["marcaId", "categoriaId", "tamanho", "valor"]);
    
        return Produto.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Produto.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const produto = await Produto.findOrFail(id);
        return produto.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const produto = await Produto.findOrFail(id);
    
        const dados = request.only(["marcaId", "categoriaId", "tamanho", "valor", "nome"]);
    
        produto.merge(dados);
        return produto.save();
      }
}
