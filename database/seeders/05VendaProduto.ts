import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VendaProduto from 'App/Models/VendaProduto'

export default class extends BaseSeeder {
  public async run () {
    await VendaProduto.createMany([
      {vendaId: 1, produtoId: 2, quantidade: 2, valor: 50.0},
      {vendaId: 3, produtoId: 3, quantidade: 1, valor: 120.0},
      
    ])
  }
}
