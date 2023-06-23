var express = require('express');
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
  //if response was false/token error
      if (!response.ok) {
        console.log('Token error!!!')
        res.send('Error: Token not found!!!');
      }
    
      const exercisesAPI = await response.json();
      res.render('api', {muscle, exercisesAPI });
      console.log(exercisesAPI)
    } catch (error) {
      console.error('Request failed:', error);
      res.status(500).send('Request failed');
    }
  });

  module.exports = router;