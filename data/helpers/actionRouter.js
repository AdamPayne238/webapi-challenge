const express = require('express');
const router = express.Router();

//Import function model
Actions = require('./actionModel.js');

//Import projectModel here if needed
Projects = require('./projectModel');

//Working
router.get('/', (req, res) => {
    const id = req.params.id;
    Actions.get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ message: "error retrieving action"})
    })
});

//Working
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Actions.get(req.params.id)
    .then(action => {
        if(id){
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: "Action ID not found"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Error retrieving action"})
    })
});



module.exports = router;