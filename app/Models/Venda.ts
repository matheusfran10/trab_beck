import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Funcionario from './Funcionario'
import VendaProduto from './VendaProduto'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data: Date

  @column()
  public clienteId: number

  @column()   
  public funcionarioId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=>Cliente )
  public clientes: BelongsTo<typeof Cliente>

  @belongsTo( ()=>Funcionario )
  public funcionarios: BelongsTo<typeof Funcionario>

  @hasMany( ()=> VendaProduto )
  public vendaprodutos: HasMany<typeof VendaProduto>
}
