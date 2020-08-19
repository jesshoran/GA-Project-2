const express = require('express');
const router = express.Router();
const Crew = require('../models/dacrew.js');// export router

// Index
router.get('/', (req, res) => {
    Crew.find({}, (error, allDaCrew) => {
        res.render('dacrew/Index', {
            daCrew: allDaCrew
        })
    });

});


//New

router.get('/new', (req, res)=>{
    res.render('dacrew/New')
})


//Destroy
router.delete('/:id', (req, res) => {
    Crew.findByIdAndRemove(req.params.id, (err, crew) => {
        res.redirect('/crew');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.engineeringAccess = req.body.engineeringAccess === "on" ? true : false;
    Crew.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/crew');
    });
});


// Create

router.post('/', (req, res)=>{
    console.log(req.body)
    if (req.body.engineeringAccess ==='on'){
        req.body.engineeringAccess = true;
    } else {
        req.body.engineeringAccess = false
    }
    Crew.create(req.body, (error, createdCrew) => {
        if(error){
            res.status(500).send({
              error: error.message
            })
          } else {
            console.log(createdCrew)
            res.redirect('/crew')
          }
        })
      })

//Edit

    router.get('/:id/edit', (req, res) => {
    Crew.findById(req.params.id, (err, editCrew) => {
        res.render('dacrew/Edit', {
            crew: editCrew
        })
    });
    });

//Show
router.get('/:id', (req, res) => {
    Crew.findById(req.params.id, (error, showCrew) => {
        res.render('dacrew/Show', {
            crew: showCrew
        });
    });
});





module.exports = router;