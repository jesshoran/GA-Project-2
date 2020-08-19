const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    rank:  { type: String, required: true },
    homePlanet:  { type: String, required: false },
    engineeringAccess: Boolean
},
// {timestamps: true}
);

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;