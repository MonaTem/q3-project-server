
/*exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name").del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name").insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
*/
exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('suits').del();
  await knex('cards').del();
  await knex.raw("ALTER TABLE suits ALTER COLUMN suitid RESTART WITH 1");
  await knex.raw("INSERT INTO suits (suitname) VALUES ('Major Arcana')");
  await knex.raw("INSERT INTO suits (suitname) VALUES ('Wands')");
  await knex.raw("INSERT INTO suits (suitname) VALUES ('Swords')");
  await knex.raw("INSERT INTO suits (suitname) VALUES ('Pentacles')");
  await knex.raw("INSERT INTO suits (suitname) VALUES ('Cups')");
  await knex.raw("INSERT INTO cards (cardname, suitid, cardinfo) VALUES ('The Fool', 1, 'The Fool card in the Tarot deck can represent the innocent naïf unencumbered by obligations and open to life$$s$$ adventures. It can also be the spiritual innocent, one whose spirit welcomes bliss with an open heart.')");
  await knex.raw("INSERT INTO cards (cardname, suitid, cardinfo) VALUES ('The Queen of Cups', 5, 'Much about this card is mysterious or indecipherable.')");
};
