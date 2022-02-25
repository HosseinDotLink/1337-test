const axios = require('axios'),
    cheerio = require('cheerio'),
    en = require('../helper/language/en.json');

const getData = () => {
    axios.get('https://tretton37.com/meet')
        .then(res => {
            const $ = cheerio.load(res.data);
            const count = $('.ninja-summary').length;
            $('.ninja-summary').each((i, el) => {
                const id = i;
                const name = $(el).find('h1 a').text().replace($(el).find('h1 a').find('span').text(), '').trim();
                const city = $(el).find('h1 a').find('span').text().trim().split(' ')[1];
                const country = $(el).find('h1 a').find('span').text().trim().split(' ')[0];
                const imageFullUrl = $(el).find('.portrait').attr('src');
                let text = null;
                let imagePortraitUrl = null;

                const detailUrl = $(el).find('h1 a').attr('href');
                // get text and imagePortraitUrl from detailUrl
                axios.get('https://tretton37.com/' + detailUrl).then(res => {
                    const $ = cheerio.load(res.data);
                    text = $('.main-ninja-text').html();
                    imagePortraitUrl = $('image').attr('href');
                    coworkers.push({
                        id,
                        name,
                        city,
                        country,
                        imageFullUrl,
                        text,
                        imagePortraitUrl,
                    });
                    if (i === count - 1) {
                        console.log(en.updateCoworkersDone);
                    }
                }).catch(err => {
                    console.log(err);
                });
            });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = getData;