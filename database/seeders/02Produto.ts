import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {marcaId: 1, categoriaId: 2, tamanho:'G', valor: 35},
      {marcaId: 3, categoriaId: 1, tamanho:'M', valor: 25},
      {marcaId: 1, categoriaId: 3, tamanho:'G', valor: 35},
    ])
  }
}
