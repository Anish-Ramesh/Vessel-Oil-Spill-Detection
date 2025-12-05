const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://vessels1.p.rapidapi.com/vessel/244110359', // Using user example MMSI
    headers: {
        'x-rapidapi-key': 'b3f908e177mshc6e18f1ad07cbb6p183bdbjsne93bc24941dc',
        'x-rapidapi-host': 'vessels1.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error(error);
    }
}

fetchData();
