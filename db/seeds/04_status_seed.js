
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([

        {title: 'San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 2},
        {title: 'Los Angeles - Fire', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 2},
        {title: 'San Francisco - Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 2},



        {title: 'San Francisco - Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 3},
        {title: 'Los Angeles - Fire', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 3},
        {title: 'San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 3},



        {title: 'Los Angeles - Fire', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 4},
        {title: 'San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 4},
        {title: 'San Francisco - Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 4},



        {title: 'San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 5},
        {title: 'San Francisco - Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 5},
        {title: 'Los Angeles - Fire', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 5},



        {title: 'Los Angeles - Fire', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 6},
        {title: 'San Francisco - Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 6},
        {title: 'San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 6},



        {title: 'Los Angeles - Fire', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 7},
        {title: 'San Francisco - Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 7},
        {title: 'San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 7}
      ]);
    });
};


//meeting jews resist capitalism
//https://cdn.filestackcontent.com/ZCP7kpesQ7mOXbR3pIgU

//San Francisco from airplane
//https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S

//los angeles fire under the freeway
//https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6

//San Francisco car accident in the public place, at financial district road, next to the public transportation
//https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl


//I am victim of someone left his dog in the car with no water all day, hot weather
//https://cdn.filestackcontent.com/2MjJVhEzQxmGOVCDufrJ
