import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoIngrediente from 'App/Models/ProdutoIngrediente'

export default class extends BaseSeeder {
  public async run () {
    await ProdutoIngrediente.createMany([
      {produtoId: 1, ingredienteId:2},
      {produtoId: 3, ingredienteId:1},
      {produtoId: 2, ingredienteId:2},
      {produtoId: 1, ingredienteId:1},
    ])
  }
}
