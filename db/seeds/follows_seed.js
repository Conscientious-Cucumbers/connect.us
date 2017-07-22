
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('follows').del()
    .then(function () {
      // Inserts seed entries
      return knex('follows').insert([
        {id_follower: 1, id_followed: 2},
        {id_follower: 1, id_followed: 3},
        {id_follower: 1, id_followed: 4},

        {id_follower: 2, id_followed: 1},
        {id_follower: 2, id_followed: 3},
        {id_follower: 2, id_followed: 4},


        {id_follower: 3, id_followed: 2},
        {id_follower: 3, id_followed: 4},
        {id_follower: 3, id_followed: 5},


        {id_follower: 4, id_followed: 3},
        {id_follower: 4, id_followed: 5},
        {id_follower: 4, id_followed: 6},

        {id_follower: 5, id_followed: 2},
        {id_follower: 5, id_followed: 3},
        {id_follower: 5, id_followed: 4},

        {id_follower: 6, id_followed: 2},
        {id_follower: 6, id_followed: 5},
        {id_follower: 6, id_followed: 1},

        {id_follower: 7, id_followed: 1},
        {id_follower: 7, id_followed: 3},
        {id_follower: 7, id_followed: 6}
      ]);
    });
};
