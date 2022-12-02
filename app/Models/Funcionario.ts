import { DateTime } from 'luxon'
import { BaseModel , column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column()
  public salario: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Venda)
  public vendas: HasMany<typeof Venda>
}
