// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda";

export default class VendasController {
    index({request}) {
      return Venda.query().preload('vendaprodutos')

      const {clienteId, funcionarioId, data} = request.all()

      const venda = Venda.query().preload('clientes').preload('funcionarios')
      .select(['id', "clienteId", "funcionarioId", "data"])

      if(clienteId){
        venda.where('clienteId', clienteId)
    }
      if(funcionarioId){
        venda.where('funcionarioId', funcionarioId)
    }
    if(data){
      venda.where(data)
  }
      return venda
      }
    
      store({ request }) {
        const dados = request.only(["clienteId", "funcionarioId", "data"]);
    
        return Venda.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Venda.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const venda = await Venda.findOrFail(id);
        return venda.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const venda = await Venda.findOrFail(id);
    
        const dados = request.only(["clienteId", "funcionarioId", "data"]);
    
        venda.merge(dados);
        return venda.save();
      }
}
