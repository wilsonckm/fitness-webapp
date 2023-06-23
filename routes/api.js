const { name } = require('ejs');
var express = require('express');
const exercise = require('../models/exercise');
const exercises = require('../controllers/exercises');
var router = express.Router();

//API
const token = process.env.Exercise_Key;
const ROOT_URL= 'https://api.api-ninjas.com/v1/exercises?muscle=';  

router.get('/', async function (req, res, next) {
    const muscle = req.query.muscle;
    const url = `${ROOT_URL}${muscle}`;
    try {
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': token
        }
      });
  
      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
        return res.status(response.status).send('Error');
      }
  
      const body = await response.json();
      res.render('api', { muscle: muscle, exercisesAPI: body });
      console.log(body)
    } catch (error) {
      console.error('Request failed:', error);
      res.status(500).send('Request failed');
    }
  });

// //API:
// const request = require('request');
// //If using request vs fetch

// router.get('/', function (req, res, next) {
//   const muscle = req.query.muscle;

//   const options = {
//     url: `${ROOT_URL} ${muscle}`,
//     qs: {
//         muscle: muscle,
        
//     },
//     headers: {
//       'X-Api-Key': token
//     }
//   };

//   request.get(options, function (error, response, body) {
//     if (error) {
//       console.error('Request failed:', error);
//       return res.status(500).send('Request failed');
//     }

//     if (response.statusCode !== 200) {
//       console.error('Error:', response.statusCode, body.toString('utf8'));
//       return res.status(response.statusCode).send('Error');
//     }
//     res.render('api', {muscle:body}); // Send the response back to the client
//   });
// });

  module.exports = router;