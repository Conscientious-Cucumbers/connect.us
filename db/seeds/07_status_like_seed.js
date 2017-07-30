
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status_likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('status_likes').insert([
        {id_user: 1, id_status: 2},
        {id_user: 1, id_status: 3},
        {id_user: 1, id_status: 1},

        {id_user: 2, id_status: 1},
        {id_user: 2, id_status: 3},
        {id_user: 2, id_status: 2},


        {id_user: 3, id_status: 2},
        {id_user: 3, id_status: 1},
        {id_user: 3, id_status: 3},


        {id_user: 4, id_status: 2},
        {id_user: 4, id_status: 3},
        {id_user: 4, id_status: 1},


        {id_user: 5, id_status: 2},
        {id_user: 5, id_status: 3},
        {id_user: 5, id_status: 1},


        {id_user: 6, id_status: 2},
        {id_user: 6, id_status: 1},
        {id_user: 6, id_status: 3},


        {id_user: 7, id_status: 3},
        {id_user: 7, id_status: 1},
        {id_user: 7, id_status: 2}

      ]);
    });
};
