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

//Working
router.post('/:id', (req, res) => {
    const insertAction = {...req.body, project_id: req.params.id};
    // const id = req.params.id;
    
    Actions.insert(insertAction)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to insert action"})
    })
});

// router.delete('/:id', (req, res) => {
//     const deleteAction = {...req.body, project_id: req.params.id};

//     Actions.remove(deleteAction)
//     .then(action => {
//         res.status(200).json(action)
//     })
//     .catch(err => {
//         res.status(500).json({ message: "id not found"})
//     })
// });

//Working
//Deleted project id 2
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Actions.get(id)
    .then(action => {
        Projects.remove(id)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json({ err: "Unable to delete action"})
        })
    })
});

//WOrking
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const editActions = req.body;

    Actions.update(id, editActions)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        res.status(500).json({ err: "Failed to update action"})
    })
});


module.exports = router;