# CTP Project (Backend)

## Getting Started

Run the following commands:
```bash
# with Postgres installed and configured, create database and user
createuser -P -s -e ctp_user
createdb -h localhost -U ctp_user db_development

# with npm installed, install sequelize-cli
npm install -g sequelize-cli

# run the backend by ...
cd ctp_project_backend
npm install
sequelize db:migrate
npm run start:dev

# Nodemon is installed, so the server will restart after any file changes :)
```

## Tables

| events |
|:------:|
| id : UUID (PK) |
| name : STRING |
| category : INTEGER (FK) |
| description : TEXT |
| capacity : INTEGER |
| attending : INTEGER |
| address : STRING |
| neighborhood : INTEGER (FK) |
| longitude : FLOAT |
| latitude : FLOAT |
| organizer : INTEGER (FK) |
| event_time : DATE {TIMESTAMP} |
| event_date : DATEONLY |
| duration : INTEGER |

| categories |
|:----------:|
| id : INTEGER (PK) |
| name : STRING |

| users |
|:-----:|
| id : INTEGER (PK) |
| first_name : STRING |
| last_name : STRING |
| email : STRING, UNIQUE |
| isActive : BOOLEAN |

| users_events |
|:------------:|
| id : INTEGER (PK) |
| event_id : INTEGER (FK) |
| user_id : INTEGER (FK) |

| neighborhood |
|:------------:|
| id : INTEGER (PK) |
| name: STRING, UNIQUE |


## Available Endpoints

### categories

* GET /category - retrieve all categories
* GET /category/:categoryId - retrieve category name by id
```javascript
{
    id: category_id,
    name: category_name
}
```
* POST /category - create new category
```javascript
{
    name: category_name
}
```
* PUT /category/:categoryId - update an existing category's name
```javascript
{
    name: category_name
}
```
* DELETE /category/:categoryId - delete an existing category

### events

* GET /event - retrieve all events
* GET /event/:eventId - retrieve event by id
```javascript
{
    id: event_id,
    name: event_name,
    category: event_category,
    description: event_description,
    capacity: number_seats_available,
    attending: number_people_attending_event,
    address: event_location,
    neighborhood: event_neighborhood,
    longitude: event_longitude,
    latitude: event_latitude,
    organizer: event_organizer,
    event_time: event_time_timestamp_like_2018-11-23 21:16:00.537 +00:00,
    event_date: event_date_like_2018-11-23,
    duration: event_duration_in_minutes
}
```
* POST /event - create new event
```javascript
{
    name: event_name,
    category: event_category,
    description: event_description,
    capacity: number_seats_available,
    address: event_location,
    neighborhood: event_neighborhood,
    longitude: event_longitude,
    latitude: event_latitude,
    organizer: event_organizer,
    event_time: event_time_timestamp_like_2018-11-23 21:16:00.537 +00:00,
    event_date: event_date_like_2018-11-23,
    duration: event_duration_in_minutes
}
```
* PUT /event/:eventId - update existing event
```javascript
{
    name: event_name,
    category: event_category,
    description: event_description,
    capacity: number_seats_available,
    attending: number_people_attending_event,
    address: event_location,
    neighborhood: event_neighborhood,
    longitude: event_longitude,
    latitude: event_latitude,
    organizer: event_organizer,
    event_time: event_time_timestamp_like_2018-11-23 21:16:00.537 +00:00,
    event_date: event_date_like_2018-11-23,
    duration: event_duration_in_minutes
}
```
* DELETE /event/:eventId - delete existing event

### users

* GET /user/:userId - retrieve user by id
```javascript
{
    id: user_id,
    first_name: user_first_name,
    last_name: user_last_name,
    email: user_email_address,
    password_hash: salted_password_hash,
    isActive: is_user_active?
}
```
* POST /user - create new user
```javascript
{
    first_name: user_first_name,
    last_name: user_last_name,
    email: user_email_address,
    password_hash: salted_password_hash,
}
```
* PUT /user/:userId - update existing user. Endpoint can be used to "delete" an existing user by setting the ```isActive``` flag to ```false```.
```javascript
{
    first_name: user_first_name,
    last_name: user_last_name,
    email: user_email_address,
    password_hash: salted_password_hash,
    isActive: is_user_active?
}
```


## What's Missing?

* CRUD operations for ```users_events``` and ```neighborhoods``` tables
* associations among tables
* multiple-table queries
* user authentication with Passport.js
