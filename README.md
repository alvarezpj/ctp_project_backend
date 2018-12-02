# CTP Project (Backend)



## Getting Started

Run the following commands:
```bash
# with Postgres installed and configured, create database and user
createuser -P -s -e ctp_user
createdb -h localhost -U ctp_user db_development

# now, run the server
git clone git@github.com:alvarezpj/ctp_project_backend.git
cd ./ctp_project_backend
npm install
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:seed:all
node app.js

# for development purposes, run 'npm run start:dev' instead of 'node app.js'
```



## Database Tables/Schema

| categories |
|:----------:|
| id : INTEGER (PK) |
| name : STRING |

| events |
|:------:|
| id : INTEGER (PK) |
| name : STRING |
| category_id : INTEGER (FK, references(categories, id)) |
| description : TEXT |
| capacity : INTEGER |
| address : STRING |
| neighborhood_id : INTEGER (FK, references(new_york_city_neighborhoods, id)) |
| longitude : FLOAT |
| latitude : FLOAT |
| organizer_id : INTEGER (FK, references(users, id)) |
| date_time : DATE {TIMESTAMP} |
| duration : INTEGER |

| new_york_city_neighborhoods |
|:------------:|
| id : INTEGER (PK) |
| name: STRING |

| users |
|:-----:|
| id : INTEGER (PK) |
| first_name : STRING |
| last_name : STRING |
| email : STRING, UNIQUE |
| is_active : BOOLEAN |

| users_events |
|:------------:|
| id : INTEGER (PK) |
| event_id : INTEGER (FK, references(events, id)) |
| user_id : INTEGER (FK, references(users, id)) |



## Available Endpoints

### table: categories

* POST /category - create new category
* GET /category - retrieve all categories
* GET /category/:categoryId/event - retrieve all events associated to a category
* GET /category/:categoryId - retrieve category by id
* PUT /category/:categoryId - update an existing category
* DELETE /category/:categoryId - delete an existing category

### table: events

* POST /event - create new event
* GET /event - retrieve all events
* GET /event/:eventId - retrieve event by id
* PUT /event/:eventId - update existing event
* DELETE /event/:eventId - delete existing event

### table: new_york_city_neighborhoods

* GET /neighborhood - retrieve all neighborhoods
* GET /neighborhood/:neighborhoodId - retrieve single neighborhood by id
* GET /neighborhood/:neighborhoodId/event - retrieve all events associated to a neighborhood

### table: users

* POST /user - create new user
* POST /user/:userId/event/eventId - allow user join a specific event
* GET /user/:userId/event - retrieve all events associated to a user
* GET /user/:userId - retrieve single user by id
* PUT /user/:userId - update existing user. Endpoint can be used to "delete" an existing user by setting the ```is_active``` flag to ```false```.



## What's Missing?

* error handling
* user authentication with Passport.js
