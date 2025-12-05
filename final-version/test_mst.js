const axios = require('axios');

async function test() {
    try {
        const response = await axios.get('https://www.myshiptracking.com/vessels?name=EVERGREEN', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
            }
        });
        console.log(response.data);
    } catch (e) {
        console.error(e);
    }
}

test();
