const express = require('express');
const router = express.Router();
const Log = require('../models/logs.js');

// add routes
// Index
router.get('/', (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.render('logs/Index', {
            logs: allLogs
        })
    });

});

//New
router.get('/new', (req, res)=>{
    res.render('logs/New')
})

//Destroy
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Log.findByIdAndRemove(req.params.id, (err, log) => {
        res.redirect('/logs');
    });
});


//Update

router.put('/:id', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
    // Update the fruit document using our model
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/logs');
    });
});


//Create
router.post('/', (req, res)=>{
    console.log(req.body)
    if (req.body.shipIsBroken ==='on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false
    }
    // console.log(req.body);
    // console.log(req.body.title);
    // console.log(req.body.entry);
    Log.create(req.body, (error, createdLog) => {
        if(error){
            res.status(500).send({
              error: error.message
            })
          } else {
            console.log(createdLog)
            res.redirect('/logs')
          }
        })
      })
    

//Edit

router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Log.findById(req.params.id, (err, foundLog) => {
        // render the edit view and pass it the found fruit
        res.render('logs/Edit', {
            log: foundLog
        })
    });
});

//Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Log.findById(req.params.id, (error, foundLog) => {
        // render the Show route and pass it the foundFruit
        res.render('logs/Show', {
            log: foundLog
        });
    });
});


// export router
module.exports = router;