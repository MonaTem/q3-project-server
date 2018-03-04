module.exports = {
  up(knex, Promise) {
    return knex.schema.createTable('cards', (table) => {
      table.increments('id').primary();
      table.text('cardname');
      table.text('cardinfo');
      table.integer('suitid').references('suitid').inTable('suits');
      table.text('card_image_url');
    });
  },
  down(knex, Promise) {
    return knex.schema.dropTable('cards');
  }
}
