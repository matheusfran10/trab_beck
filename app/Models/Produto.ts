import { DateTime } from "luxon";
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Marca from "./Marca";
import Categoria from "./Categoria";
import VendaProduto from "./VendaProduto";
import ProdutoIngrediente from "./ProdutoIngrediente";

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number;


  @column()
  public marcaId: number;

  @column()
  public categoriaId: number;

  @column()
  public tamanho: string;

  @column()
  public valor: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo( ()=>Marca )
  public marcas: BelongsTo<typeof Marca>

  @belongsTo( ()=>Categoria )
  public categorias: BelongsTo<typeof Categoria>

  @hasMany( ()=> VendaProduto )
  public vendaprodutos: HasMany<typeof VendaProduto>

  @hasMany( ()=> ProdutoIngrediente )
  public produtoingredientes: HasMany<typeof ProdutoIngrediente>
}
