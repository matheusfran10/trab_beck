import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ingrediente from 'App/Models/Ingrediente'

export default class extends BaseSeeder {
  public async run () {
    await Ingrediente.createMany([
      {nome:'bacon'},
      {nome:'queijo'},
      {nome:'molho de tomate'},
      {nome:'ovo'},
      {nome:'presunto'},
      {nome:'maionese'},
    ])
  }
}
