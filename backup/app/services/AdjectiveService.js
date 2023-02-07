// Get Config File
var directory = require("../../config/path");
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Traits
var responseData = require(`../${directory.trait}/responseData`);

// Models
const Adjective = require(`../${directory.models}/Adjective`);

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
            var url_string =
                permintaan.protocol +
                "://" +
                permintaan.get("host") +
                permintaan.originalUrl;
            var url = new URL(url_string);
            var count = url.searchParams.get("count");
            var filter = url.searchParams.get("filter");

            console.log(count);
            console.log(filter);

            Adjective.getAll(count, filter, (err, data) => {
                if (err) {
                    return responseData.error(
                        permintaan,
                        respon,
                        {
                            success: false,
                            message:
                                "Some error occurred while retrieving users.",
                            error: err.message,
                        },
                        500
                    );
                } else {
                    return responseData.success(permintaan, respon, {
                        success: true,
                        message: "Berhasil ambil data!",
                        data: data,
                    });
                }
            });
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
            Adjective.findById(letter, (err, data) => {
                if (err) {
                    return responseData.error(
                        permintaan,
                        respon,
                        {
                            success: false,
                            message:
                                "Some error occurred while retrieving users.",
                            error: err.message,
                        },
                        500
                    );
                } else {
                    return responseData.success(permintaan, respon, {
                        success: true,
                        message: "Berhasil ambil data!",
                        data: data,
                    });
                }
            });
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
