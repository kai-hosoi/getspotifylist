const axios = require('axios'),
    cheerio = require('cheerio');

const getList = (spURL) => {
    axios.get(spURL).then({data}) => {
        const $ = cheerio.load(data);
        console.log('title').text
    }

}