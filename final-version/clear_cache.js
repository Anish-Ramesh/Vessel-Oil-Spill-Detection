const mongoose = require('mongoose');
const { Vessel } = require('./db');

async function clearCache() {
    try {
        const mmsi = '636016138';
        console.log(`Clearing cache for MMSI: ${mmsi}`);
        await Vessel.deleteMany({ mmsi: mmsi });
        console.log('Cache cleared successfully!');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.disconnect();
    }
}

clearCache();
