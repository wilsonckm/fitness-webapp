const apiExercise = require('../models/apis')

//API info
const token = process.env.Exercise_Key;
const ROOT_URL= 'https://api.api-ninjas.com/v1/exercises?muscle=';  
// const NAME_URL= 'https://api.api-ninjas.com/v1/exercises?query=';  

module.exports = {
    // create,
    index,
    // show,
}


async function index (req, res, next) {
    //Takes whatever information is passed into the form on the /api page
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
        //parses data and coverts into javascript object! 
        //Otherwise would get plain text. 
        const exercisesAPI = await response.json();
        res.render('api', {muscle, exercisesAPI});
        // console.log(exercisesAPI)
    } catch (error) {
        console.error('Request failed:', error);
        res.status(500).send('Request failed');
    }
}


// async function create(req,res) {
//     const exerciseName = req.query;
//     const url = `${NAME_URL}${exerciseName}`;
//     try {
//         const response = await fetch(url, {
//             headers: {
//                 'X-Api-Key': token
//             }
//         });
//         //if response was false/token error
//         if (!response.ok) {
//             console.log('Token error!!!')
//             res.send('Error: Token not found!!!');
//         }
//         //parses data and coverts into javascript object! 
//         //Otherwise would get plain text. 
//         const exercisesAPI = await response.json();
//         // res.render('exercises', {exerciseName});
//         // console.log(exercisesAPI)
//         console.log(exerciseName)
//     } catch (error) {
//         console.error('Request failed:', error);
//         res.status(500).send('Request failed');
//     }

    
//     // try {
//     //     res.redirect('/exercises')
//     // } catch (error) {
//     //     console.log(error)
//     //     res.render('api', { errorMsg: error.message})
//     // }
// }

// async function show (req, res) {
//     const exerciseName = req.query.name;
//     const url = `${ROOT_URL}${exerciseName}`;
//     try {
//         const response = await fetch(url, {
//             headers: {
//                 'X-Api-Key': token
//             }
//         });
//         //if response was false/token error
//         if (!response.ok) {
//             console.log('Token error!!!')
//             res.send('Error: Token not found!!!');
//         }
//         //parses data and coverts into javascript object! 
//         //Otherwise would get plain text. 
//         const exercisesAPI = await response.json();
//         res.render('api', {muscle, exercisesAPI});
//         // console.log(exercisesAPI)
//     } catch (error) {
//         console.error('Request failed:', error);
//         res.status(500).send('Request failed');
//     }

//     console.log(exerciseName)

// }