const mongoose = require('mongoose');
const { Vessel } = require('./db');

async function checkDB() {
    try {
        const count = await Vessel.countDocuments();
        console.log(`Total Vessel Records: ${count}`);

        if (count > 0) {
            const latest = await Vessel.findOne().sort({ timestamp: -1 });
            console.log('Latest Record:', JSON.stringify(latest, null, 2));
        }
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.disconnect();
    }
}

checkDB();
