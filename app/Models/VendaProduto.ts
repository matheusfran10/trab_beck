import { DateTime } from 'luxon'
import { BaseModel, column , belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'
import Venda from './Venda'

export default class VendaProduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantidade: number

  @column()
  public valor: number  

  @column()
  public vendaId: number

  @column()
  public produtoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=>Produto )
  public produtos: BelongsTo<typeof Produto>

  @belongsTo( ()=>Venda )
  public vendas: BelongsTo<typeof Venda>
}
