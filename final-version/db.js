const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://bgarihanth:Gan12345@cluster1.z7q6q.mongodb.net/VesselData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the Vessel schema
const vesselSchema = new mongoose.Schema({
    mmsi: String,
    imo: Number,
    name: String,
    timestamp: Date, // Vessel's actual timestamp
    cachedAt: { type: Date, default: Date.now }, // When we fetched/cached this record
    length: Number,
    width: Number,
    draft: Number,
    cog: Number,
    heading: Number,
    latitude: Number,
    longitude: Number,
    weather: String,
    weatherdescription: String,
    temperature: Number,
    pressure: Number,
    humidity: Number,
    windspeed: Number,
    rain: String,
    clouds: Number
});

// Create a TTL index on the 'cachedAt' field to expire documents after 3600 seconds (1 hour)
vesselSchema.index({ cachedAt: 1 }, { expireAfterSeconds: 3600 });

// Create the Vessel model
const Vessel = mongoose.model('Vessel', vesselSchema);

module.exports = { Vessel };
