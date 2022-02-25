const en = require('../helper/language/en.json'),
    crawler = require('../utils/crawler');

// jwt expire after 1 month
exports.jwtExpireAfter = 1 * 30 * 24 * 60 * 60 * 1000; // as millisecond : months * days * hours * minutes * seconds * 1000ms

global.coworkers = [];

exports.init = async () => {
    // check coworkers data not exist
    if (coworkers.length === 0) {
        // get coworkers data
        console.log(en.updateCoworkers);
        crawler();
    }
};