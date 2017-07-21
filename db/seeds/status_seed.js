exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('statuses').del()
   .then(function () {
     // Inserts seed entries
     return knex('statuses').insert([
       {text: 'Great-Great-Great Day!', id_user: 1},
       {text: 'Pokemon mon mon!', id_user: 1},
       {text: 'Hey Guys!', id_user: 1},
       {text: 'Hello Guys!', id_user: 1},
       {text: 'It s Raining!', id_user: 1},
       {text: 'Programming!', id_user: 1},
       {text: 'Bootcamp - all day!', id_user: 1},
       {text: 'At the fire!', id_user: 1},
       {text: 'Handy App', id_user: 1},

       {text: 'Great Day!', id_user: 2},
       {text: 'Ha-Ha Pokemon mon mon!', id_user: 2},
       {text: 'Hey Guys!', id_user: 2},
       {text: 'Hello Guys!', id_user: 2},
       {text: 'It s Raining!', id_user: 2},
       {text: 'All day - Programming!', id_user: 2},
       {text: 'Bootcamp - all day!', id_user: 2},
       {text: 'At the House!', id_user: 2},
       {text: 'Smart App!', id_user: 2},

       {text: 'Great-Great Day!', id_user: 3},
       {text: 'Pokemon!', id_user: 3},
       {text: 'Hey Guys!', id_user: 3},
       {text: 'Hello Guys!', id_user: 3},
       {text: 'It s Raining!', id_user: 3},
       {text: 'I am Programming!', id_user: 3},
       {text: 'Hack Reactor Bootcamp - all day!', id_user: 3},
       {text: 'At the Store!', id_user: 3},
       {text: 'Quick App', id_user: 3},

       {text: 'Wonderful Day!', id_user: 4},
       {text: 'Pokemon mon-mon!', id_user: 4},
       {text: 'Hey Guys!', id_user: 4},
       {text: 'Hello Guys!', id_user: 4},
       {text: 'It s Raining!', id_user: 4},
       {text: 'It is time for Programming!', id_user: 4},
       {text: 'I am at the Bootcamp - all day!', id_user: 4},
       {text: 'At the stage!', id_user: 4},
       {text: 'Like my App', id_user: 4},

       {text: 'Great-Great-Great-Great-Great Day!', id_user: 5},
       {text: 'Pokemon-hehe!', id_user: 5},
       {text: 'Hey Guys!', id_user: 5},
       {text: 'Hello Guys!', id_user: 5},
       {text: 'It s Raining!', id_user: 5},
       {text: 'At school, Programming!', id_user: 5},
       {text: 'Bootcamp -spending here all day!', id_user: 5},
       {text: 'At the building!', id_user: 5},
       {text: 'Fast App', id_user: 5},

       {text: 'Wonderful Great-Great-Great Day!', id_user: 6},
       {text: 'Poke-Pokemon mon mon!', id_user: 6},
       {text: 'Hey Guys!', id_user: 6},
       {text: 'Hello Guys!', id_user: 6},
       {text: 'It s Raining!', id_user: 6},
       {text: 'App Development, Programming!', id_user: 6},
       {text: 'Spend hours at the Bootcamp - all day!', id_user: 6},
       {text: 'At the door!', id_user: 6},
       {text: 'Love my App', id_user: 6},

       {text: 'Great-Sunny Day!', id_user: 7},
       {text: 'Pokemonsssss!', id_user: 7},
       {text: 'Hey Guys!', id_user: 7},
       {text: 'Hello Guys!', id_user: 7},
       {text: 'It s Raining!', id_user: 7},
       {text: 'Programming!', id_user: 7},
       {text: 'I am here, Bootcamp - all day!', id_user: 7},
       {text: 'On my way!', id_user: 7},
       {text: 'My App!', id_user: 7}


     ]);
   });
};


// exports.seed = function(knex, Promise) {
//  // Deletes ALL existing entries
//  return knex('profiles').del()
//    .then(function () {
//      // Inserts seed entries
//      return knex('profiles').insert([
//        {first: 'Sam', last: 'Gru', display: 'Sam Gru', email: 'samgru@domain.com', phone: '6503338888', profile_picture: null, username: 'grus'},
//        {first: 'Tom', last: 'Gde', display: 'Tom Gde', email: 'tomgde@domain.com', phone: '6507779988', profile_picture: null, username: 'tomgde'},
//        {first: 'Tom', last: 'Gde', display: 'Tom Gde', email: 'tomgde@domain.com', phone: '6507779988', profile_picture: null, username: 'tomgde'}
//      ]);
//    });
// };