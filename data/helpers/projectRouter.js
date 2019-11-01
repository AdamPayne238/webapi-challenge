const express = require('express');
const router = express.Router();

//Import function model
Projects = require('./projectModel.js');

//Import actionModel here if needed

//Not working may be because get requires id in function model?
router.get('/', (req, res) => {
    const id = req.params.id;
    Projects.get(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ err: "error retrieving projects"})
    })
});

//Working
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Projects.get(req.params.id)
    .then(project => {
        if(id){
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "Project ID not found"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Error retrieving Project"})
    })
});

//Working
router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ err: "Error inserting project"})
    })
});

//Working
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Projects.get(id)
    .then(project => {
        Projects.remove(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ err: "Unable to delete project"})
        })
    })
});

//Working
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const editProject = req.body;

    Projects.update(id, editProject)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({ err: "Failed to update project"})
    })
});






module.exports = router;