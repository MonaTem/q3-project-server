
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
  await knex.raw("INSERT INTO cards (cardname, suitid, cardinfo, card_image_url) VALUES ('The Fool', 1, 'The Fool card in the Tarot deck can represent the innocent naïf unencumbered by obligations and open to lifes adventures. It can also be the spiritual innocent, one whose spirit welcomes bliss with an open heart.','https://lh3.googleusercontent.com/XHBlRLpRx_6vg9sTxzNkG8A_cON94ofWcI-1tLEt720VyrrjCSs3VsQkfJ7syK4X3bSA7Ug4r6chtWXL6QnmHrsCBV7_Et38GSEwFpnrDNkmKvUY-LhcXh7ISJljXilqVBz6_-08qv2vgNLHz93iOsxK2LFURC74vjHQPmYbfnl6DNqGCZY0Vsz1GSeOt3xK2ZkNxPqaPrZ3h1et65HWEUVBTy_hR9P8PRhtMRa1ZRF2aj3RJpa1I5XU2BUlmF4Mdhq3xi9Bfc4d5wpfo1n0cc_tKlekPr7YCh4teptjjwwuWa6cMKbgYS2rH-GRrInhwEpVxvfM0xfZd1tUyYdxuVWmYJuoWQVN_tdvyqEmPNkZwTgB6-KbrvBT9SUFwJnuVwsTRMbDRO268nwYyO6YO_841lIzmMnMM6TqOem5sbUjL7z2mZJT9DBmbPuTUx_xzdt_aPNN8o0M1n2DAq9DaSQ69v6bNSY4ugqAj6JWLwGBBvFCD0ZY8QnjtuEhICEYxvDj604EvWasKWCSmRbNDEnPq-OQqbLd6vu_tjWVKiJkvx7XnFUKxW-a1kjtytOhtiaOQGaLaPu64BDPq99FUzO3NcX72a8ESqNCH0Y=w199-h340-no')");
  await knex.raw("INSERT INTO cards (cardname, suitid, cardinfo, card_image_url) VALUES ('The Queen of Cups', 5, 'Much about this card is mysterious or indecipherable.','https://lh3.googleusercontent.com/qHo3nET7NCysShWW2La5MBELlp-8WWhbx_WrQK7aQw1hRhRJvGI7IM3iBukSLKKeF6psQq6zFo4-p8tInSmHTSbCZxZawAO_cMN693ABxCijeTgu7w9MWHxnqEOzKJz_edpahSU3rq22GgGzPkyRpK2NoHVK0hZAJ_gnO0Rr6bqtjR5NXiXlxijb6cdjlsQ7jQ7Luf525oyHDboQksd26atU5IhgKL27wIAERrYW0HDenalqM5g4uN5dhuJLtcJRPo0vP-_lbDRJkbA79aM66bDbMSviEiE-J-KCy6CRmiikfMhZb0d8I4WYvgyXNHMUAloWpnAyZCG3-9O0N1kKXwtN1nD-gsIfpJD0dK3yiulVxGynv_SRVVM5WKYR8we4nmNk9qMDxrP6dA-wzceW6XodyOEc0u21gROPNa8X3ZZuxpjLFeI9Bc5S-gadGFvSV8jK1aRFjQMgFLrNwfLVN3cOk-3rMAfiYaYB0rMDmCL1c-EMhAZjdIpoGZPBL1SDTw6j37wm2X2mOloz0QST477dYkk5AWh3xUHM23yfAGLTFCblEWHNcjX9kTtn7VLww676g0JhF2ZO_fiftVzWeJcnXiJDLYHe2RbL-pk=w199-h340-no')";
};
