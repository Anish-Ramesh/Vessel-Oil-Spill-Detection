const mongoose = require('mongoose');
const { Vessel } = require('./db');

async function seedDB() {
    try {
        const mmsi = '244110352';
        console.log(`Seeding DB for MMSI: ${mmsi}`);

        // Delete existing recent records to avoid duplicates
        await Vessel.deleteMany({ mmsi: mmsi });

        const mockVessel = new Vessel({
            mmsi: mmsi,
            imo: 0,
            name: 'COMPASS',
            timestamp: new Date(), // NOW
            length: 110,
            width: 10,
            draft: 2,
            cog: 91,
            heading: 511,
            latitude: 53.259190,
            longitude: 6.497000,
            weather: 'Clouds',
            weatherdescription: 'overcast clouds',
            temperature: 10,
            pressure: 1015,
            humidity: 80,
            windspeed: 5,
            rain: '0',
            clouds: 90
        });

        await mockVessel.save();
        console.log('Seeded successfully!');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.disconnect();
    }
}

seedDB();
