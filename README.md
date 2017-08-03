# ConnectHub.us

ConnectHub.us is a social networking website in which users can post pictures, news, and statuses for their friends and other users to see.  Users can also scroll through their news feed to view the most up-to-date news from 20+ news outlets around the world. 


## Team

- Pablo Boserman
- Jake Gober
- Taras Ignashchenko
- Saikal Kalmanbetova

## Roadmap

View the project roadmap [here](https://docs.google.com/document/d/1j4W-cdtjkargVpzr2DUWVT1dR6Nj349fIxXf1xJlb0Y/edit?usp=drive_webs)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Create an account from scratch using the 'sign in' tab. Or, sign in with the Google or Facebook login buttons.  Once logged in, you will be able to set your username, which will serve as your username to other users of the application. The app has six (6) zones of use: 1. Newsfeed  2. Notifications 3. Your Profile  4. Other User Profiles  5. Settings  6. About.   

1.  In the Newsfeed, you can veiw the latest news from 20+ news outlets around the world.  Clicking on any of these news snippits will allow you to see the description,
source, and link of the original news article.  You may click the 'heart' button to indicate that you like a certain news article.
2. Clicking the notifications icon shows the user what other users have recently followed him/her.
3. In the Profile, you will be able to post new statueses that will have a title, description, and an uploaded photo of your choice.  In your profile, you also have access
to your basic information, a list of your 'liked' statuses and news peices, and a list of your followers/followees.
4. In the Profile of another user, you can see all of the information that you can see on your own profile page, but all of the information will be that of the specific user's page you are on.
5. In the settings page, you can alter any of your personal information.  The updated information is viewable to you and other users of the app via your profile page.
6. The About page contains information about Connect.us 



## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- React-Redux 5.0.x
- React-Router 4.1.x
- etc. 

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
```

## App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable. 

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

This application utilizes Facebook and Google authorization as options for user login/signup. 

See https://www.npmjs.com/package/config
And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:

`knex migrate:latest --env NODE_ENV`

To rollback a version, run:

`knex migrate:rollback --env NODE_ENV`

To populate the database with seed data, run:

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run start`

To run tests: `yarn run test`

To run the web worker: `yarn run web_worker`

To run your redis server for the session store `redis-server`


###



