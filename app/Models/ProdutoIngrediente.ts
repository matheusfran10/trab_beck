import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'
import Ingrediente from './Ingrediente'

export default class ProdutoIngrediente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public produtoId: number

  @column()
  public ingredienteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=>Produto )
  public produtos: BelongsTo<typeof Produto>

  @belongsTo( ()=>Ingrediente )
  public ingredientes: BelongsTo<typeof Ingrediente>
}
