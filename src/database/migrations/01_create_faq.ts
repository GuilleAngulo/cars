import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('faq', (table) => {
        table.increments('id').primary();
        table.string('question').notNullable();
        table.string('answer').notNullable();
        table.date('createDate').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('faq');
}
