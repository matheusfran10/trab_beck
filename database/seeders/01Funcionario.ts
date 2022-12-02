import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome:'Ronaldo F', cpf:'123.456.789.10', endereco:'QNP 13 Cj H casa 13', telefone:'61 98228-8062', salario: 1000},
      {nome:'Andreia C', cpf:'111.456.789.10', endereco:'QNP 15 Cj H casa 13', telefone:'61 98676-7062', salario: 1000},
      {nome:'Pedro A', cpf:'222.456.789.10', endereco:'QNP 17 Cj H casa 13', telefone:'61 94383-8062', salario: 1000},
    ])
  }
}
