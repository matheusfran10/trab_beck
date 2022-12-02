import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('marca_id').unsigned().references('id').inTable('marcas').notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.decimal('valor').notNullable()
      table.string('tamanho', 1).notNullable()
     

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
