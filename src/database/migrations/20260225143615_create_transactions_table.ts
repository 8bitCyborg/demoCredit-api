import pkg from 'knex';
const { Knex } = pkg;

export async function up(knex: any): Promise<void> {
  return knex.schema.createTable("transactions", (table: any) => {
    table.increments("id").primary();
    table.integer("wallet_id").unsigned().notNullable()
      .references("id").inTable("wallets").onDelete("CASCADE");
    table.bigInteger("amount").notNullable().defaultTo(0);
    table.enum("type", ["credit", "debit"]).notNullable();
    table.string("counterparty_name").nullable();
    table.integer("counterparty_id").unsigned().nullable();
    // Purpose: 'funding', 'transfer', 'withdrawal'
    table.string("category").notNullable();
    table.string("reference").unique().notNullable();
    table.string("description").nullable();
    table.enum("status", ["pending", "success", "failed"]).defaultTo("pending");
    table.integer("metadata_recipient_id").nullable();
    table.timestamps(true, true);
    table.index(["wallet_id", "status"]);
  });
};


export async function down(knex: any): Promise<void> {
  return knex.schema.dropTable("transactions");
};