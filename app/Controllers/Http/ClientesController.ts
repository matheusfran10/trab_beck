// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente";

export default class ClientesController {
  index() {
    return Cliente.query().preload('vendas')
  }

  store({ request }) {
    const dados = request.only(["nome", "cpf", "telefone", "endereco"]);

    return Cliente.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Cliente.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const cliente = await Cliente.findOrFail(id);
    return cliente.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const cliente = await Cliente.findOrFail(id);

    const dados = request.only(["nome", "cpf", "telefone", "endereco"]);

    cliente.merge(dados);
    return cliente.save();
  }
}