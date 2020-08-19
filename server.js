// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PORT= process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = "mongodb+srv://jess:mongopassword@cluster0.wen5q.azure.mongodb.net/fruits-example?retryWrites=true&w=majority"

// mongoose connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

// Controller
const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);

const vegetablesController = require("./controllers/vegetables.js");
app.use("/vegetables", vegetablesController);


// Homepage

app.get('/', (req, res)=> {
    res.render("Homepage")    
}) 

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});

