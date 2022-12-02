import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
     {clienteId: 1, funcionarioId: 2, data: new Date(22,12,2022)},
     {clienteId: 2, funcionarioId: 2, data: new Date(22,12,2022)},
     {clienteId: 1, funcionarioId: 1, data: new Date(22,12,2022)},
    ])
  }
}