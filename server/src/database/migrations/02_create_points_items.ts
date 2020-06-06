import Knex from "knex";

export async function up(Knex: Knex) {
  // Criar a Tabela
  return Knex.schema.createTable("points_items", (table) => {
    table.increments("id").primary();
    table.integer("point_id").notNullable().references("id").inTable("points");
    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(Knex: Knex) {
  // Voltar atras (Deletar a Tabela)
  return Knex.schema.dropTable("points_items");
}
