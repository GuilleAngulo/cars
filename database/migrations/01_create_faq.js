module.exports = {
  async up(knex) {
    return knex.schema.createTable("faq", (table) => {
      table.increments("id").primary();
      table.string("question").notNullable();
      table.string("answer").notNullable();
      table.date("createDate").notNullable();
    });
  },

  async down(knex) {
    return knex.schema.dropTable("faq");
  },
};
