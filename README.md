#RepOne
An exercise web app to help keep track of exercises and filters within an API for new exercises to add.
Tech Stack: HTML, MongoDB, Express, Node,js, CSS

###Goals:
1. Implement CRUD operations
2. Integrate API to add an exercise library

Live Link: https://radiant-ravine-41773-d48fa3e55171.herokuapp.com/

#Contact: 
Feel free to contact me! This project is still under construction and was created for educational purposes. If you are interested in contributing, please reach out at wilsonckmchan@gmail.com

#Commit History:
## Commit 1:
### Downloaded all necessary modules/folders/files for express set up. Successfully connected Heroku

## Commit 2:
### Added method override, mongoose, and css

## Commit 3: 
### Completed CRUD app with routing, controllers, models and views

## Commit 4:
### Added API integration
Successfully added in API key to MongoDB, fetched proper URL, rendered proper information to corresponding ejs view. 

Critical barriers:
response.json() is important to parse data and converting into Javascript objects. Otherwise, data would be in plain text.

## Commit 5:
### Added feature to add exercise from API to current workout
Originally attempted to send data to database directly from API, however, was unsuccessful, therefore attempted secondary approach by sending values to database via EJS.
Located in API.ejs, button with hidden inputs sending values to post to "/exercises".

## Commit 6:
### Bug fixes for quads/quadriceps
Bug: Quads would not be recognized due to schema type and enum parameters
Addressed: Typo in form and schema

## Commit 7:
### Formatted data upon display 

Capitalized first letter and replaced "_" with spaces when data was displayed from API

Stylized with CSS

Bug: Schema continues to allow negative values for number types despite having min limits
Addressed: With HTML min limits to preven user from putting negative values

Added middleware to address image path issue. Images were not display and required relative path to be established in order to properly display in server.js


