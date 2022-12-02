// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";

export default class FuncionariosController {

    index() {
      return Funcionario.query().preload('vendas')
      }
    
      store({ request }) {
        const dados = request.only(["nome", "cpf", "telefone", "endereco", "salario"]);
    
        return Funcionario.create(dados);
      }
    
      show({ request }) {
        const id = request.param("id");
        return Funcionario.findOrFail(id);
      }
    
      async destroy({ request }) {
        const id = request.param("id");
        const funcionario = await Funcionario.findOrFail(id);
        return funcionario.delete();
      }
    
      async update({ request }) {
        const id = request.param("id");
        const funcionario = await Funcionario.findOrFail(id);
    
        const dados = request.only(["nome", "cpf", "telefone", "endereco", "salario"]);
    
        funcionario.merge(dados);
        return funcionario.save();
      }
}
