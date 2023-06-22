const Exercise = require('../models/exercise')

module.exports = {
    index,
    new: newExercises,
    create,
    show,
    delete: deleteExercises,
    edit,
    update,
}

async function index (req, res) {
    const allExercises = await Exercise.find()
    res.render('exercises/', {
        exercises: allExercises
    })
}


function newExercises (req, res) {
    res.render('exercises/new', {errorMsg: ''})

}

async function create (req, res) {
    req.body.complete = !!req.body.complete
    try {
        await Exercise.create(req.body);
        res.redirect('/exercises')
        } catch (error) {
            console.log(error);
            res.render('exercises/new', { errorMsg: error.message})
        }
    } 

async function deleteExercises (req,res) {
    try {
        const toDeleteExercises = await Exercise.findById(req.params.id);
        console.log(toDeleteExercises);
        await Exercise.deleteOne(toDeleteExercises);
        res.redirect('/exercises')
        
    }
    catch (error) {
        console.log(error);
        res.render('exercises/new', { errorMsg: error.message})
    }
    
}

function show (req, res) {
    Exercise.findById(req.params.id).then((exercise) => {
        res.render('exercises/show', {
            exercise
        })
    })
}

async function edit (req, res) {
    const exercise = await Exercise.findById(req.params.id);
    res.render('exercises/edit', {
        exercise
    })
}

async function update(req, res) {
    req.body.complete = !!req.body.complete;
    const newExercise = await Exercise.updateOne({_id:req.params.id}, req.body)
    res.redirect(`/exercises/${req.params.id}`);
}