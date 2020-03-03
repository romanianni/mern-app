const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get( (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/add').post( (req, res) => {
  const { username, description } = req.body;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
    timestamp: true
  });

  newExercise.save()
    .then( () => res.json('Exercise added!'))
    .catch(error => res.status(400).json('Error: ' + error))

});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise deleted!'))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      console.log(req.params);
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = req.body.duration;
      exercise.date = Date.parse(req.body.date);
     
      exercise.save()
        .then(exercise => res.json('Exercise updated!'))
        .catch(error => res.status(400).json('Error: ' + error))
      })
    .catch(error => res.status(400).json('Error: ' + error))
});

module.exports = router;