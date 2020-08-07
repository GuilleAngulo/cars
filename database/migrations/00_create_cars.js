module.exports = {
  async up(knex) {
    return knex.schema.createTable("cars", (table) => {
      table.increments("id").primary();
      table.string("make").notNullable();
      table.string("model").notNullable();
      table.integer("year").notNullable();
      table.string("fuelType").notNullable();
      table.integer("kilometers").notNullable();
      table.string("details").notNullable();
      table.integer("price").notNullable();
      table.string("photoUrl").notNullable();
    });
  },

  async down(knex) {
    return knex.schema.dropTable("cars");
  },
};
