import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('cars', (table) => {
        table.increments('id').primary();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('year').notNullable();
        table.string('fuelType').notNullable();
        table.integer('kilometers').notNullable();
        table.string('details').notNullable();
        table.integer('price').notNullable();
        table.string('photoUrl').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('cars');
}
