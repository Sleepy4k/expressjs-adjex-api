// Get Config File
var directory = require('../../config/path');
var database = require('../../config/database');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Traits
var responseData = require(`../${directory.trait}/responseData`);

const random_api = `https://random-word-form.herokuapp.com/random/adjective`;
const word_api = `https://api.dictionaryapi.dev/api/v2/entries/en`;

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

// Main Module CRUD
module.exports = {
    /**
     * Display a listing of the resource.
     *
     * @param  Request  permintaan
     * @param  Response  respon
     *
     * @return Array
     */
    index: async (permintaan, respon) => {
        try {
            var url_string = permintaan.protocol + '://' + permintaan.get('host') + permintaan.originalUrl;
            var url = new URL(url_string);
            var c = url.searchParams.get('filter');

            fetch(c != null ? random_api + '/' + c + '?count=25' : random_api + '?count=25', options)
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);

                    return responseData.success(permintaan, respon, {
                        data: json,
                    });
                })
                .catch((err) => console.error(`SERVER error to get data from api|${err} - - ms - - `));
        } catch (error) {
            return responseData.error(
                permintaan,
                respon,
                {
                    error: error.message,
                },
                500
            );
        }
    },

    /**
     * Display a specified resource.
     *
     * @param  Request  permintaan
     * @param  Response  respon
     *
     * @return Array
     */
    show: async (permintaan, respon) => {
        var letter = permintaan.params.letter;

        try {
            fetch(word_api + `/${letter}`, options)
                .then((res) => res.json())
                .then((json) => {
                    var respon_data = [];

                    json[0].meanings.forEach((object) => {
                        if (object.partOfSpeech == 'adjective') {
                            object.definitions.forEach((element) => {
                                if (element.example != undefined) {
                                    respon_data.push({
                                        definition: element.definition,
                                        example: element.example,
                                    });
                                } else {
                                    respon_data.push({
                                        definition: element.definition,
                                        example: 'No example',
                                    });
                                }
                            });
                        }
                    });

                    return responseData.success(permintaan, respon, {
                        data: {
                            word: json[0].word,
                            data: respon_data,
                        },
                    });
                })
                .catch((err) => console.error(`SERVER error to get data from api|${err} - - ms - - `));
        } catch (error) {
            return responseData.error(
                permintaan,
                respon,
                {
                    message: error.message,
                },
                500
            );
        }
    },
};
