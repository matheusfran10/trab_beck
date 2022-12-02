import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome:'Matheus F', cpf:'123.456.789.10', endereco:'QNP 13 Cj H casa 13', telefone:'61 98228-8062'},
      {nome:'Samara C', cpf:'111.456.789.10', endereco:'QNP 15 Cj H casa 13', telefone:'61 98676-7062'},
      {nome:'Paulo A', cpf:'222.456.789.10', endereco:'QNP 17 Cj H casa 13', telefone:'61 94383-8062'},
    ])
  }
}
