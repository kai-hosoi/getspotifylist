
const axios = require('axios'),
    cheerio = require('cheerio'),
    iconv = require('iconv');

const getList = (spURL) => {
    axios.get(spURL,{responseType: 'arraybuffer',
        transformResponse: (data) => {
            try{
            const sjis = new Buffer.from (data, 'binary');
            const utf8 = iconv.decode (sjis, "SHIFT_JIS");
            return utf8;
            }catch(error){
                console.log(error);
            }
        }}).then((response) => {
            try{
            const $ = cheerio.load(data);
            console.log(response.data);
            console.log($("t_yrXoUO3qGsJS4Y6iXX").text());
            }catch(error){
                console.log(error);
            }
        }
    );
};

// const axios = require("axios");
// const cheerio = require("cheerio");
// const pretty = require("pretty");

getList("https://open.spotify.com/collection/tracks");


// axios(spURL).then((response) => {
//     // const html_data = response.data;
//     const $ = cheerio.load(response);
//     console.log($('title').text());
//   });

// const $ = cheerio.load(markup);
// console.log(pretty($.html()));

// const mango = $(".fruits__mango");
// console.log(mango.html());

// const apple = $(".fruits__apple");
// console.log(apple.attr("class"));