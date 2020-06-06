import Knex from "knex";

export async function up(Knex: Knex) {
  // Criar a Tabela
  return Knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable;
    table.string("title").notNullable;
  });
}

export async function down(Knex: Knex) {
  // Voltar atras (Deletar a Tabela)
  return Knex.schema.dropTable("items");
}
