
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  if (true) {
    return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([

        {title: 'I am in San Francisco today, there is a bad Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 2},
        {title: 'I am in Los Angeles - there is a horrible Exposure', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 2},
        {title: 'I am in San Francisco - Look at the Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 2},



        {title: 'San Francisco - Airplane', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 3},
        {title: 'Los Angeles - Fire', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 3},
        {title: 'San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 3},



        {title: 'Attention Los Angeles people!', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 4},
        {title: 'Attention San Francisco guys! Crazy Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 4},
        {title: 'From the Airport', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 4},



        {title: 'Look, San Francisco - Car Accident', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 5},
        {title: 'San Francisco', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 5},
        {title: 'Attention, Los Angeles! Bad Fire!', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 5},



        {title: 'Fire in Los Angeles', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 6},
        {title: 'Airplane San Francisco', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 6},
        {title: 'Car Accident in San Francisco', text: 'Uploading a picture, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 6},



        {title: 'Los Angeles', text: 'I am a victim of the firefighting, there is an exposure under the busy freeway!', image: 'https://cdn.filestackcontent.com/d3SnBboiRc3f7aocCQn6', id_user: 7},
        {title: 'Sunny San Francisco', text: 'Flying to San Francisco, view is awesome, check out the picture I just made!', image: 'https://cdn.filestackcontent.com/0Qu6db0T1yS9uxtb8h9S', id_user: 7},
        {title: 'Car Accident', text: 'Uploading a picture from San Francisco, check out guys, there is a car accident at financial district road, next to the public transportations', image: 'https://cdn.filestackcontent.com/fAUDg2zSQHW9Jwa7GzQl', id_user: 7}
      ]);
    });
  }
};

