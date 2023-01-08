// Get Config File
var directory = require("../../../config/path");

// Traits
var responseData = require(`../../${directory.trait}/responseData`);

// Services
var adjectiveService = require(`../../${directory.service}/AdjectiveService`);

// Catch Error
function catchError(permintaan, respon, error) {
    console.log(error.message);

    return responseData.error(
        permintaan,
        respon,
        {
            message: "system error",
            error: error.message,
        },
        500
    );
}

// Main Module CRUD
module.exports = {
    /**
     * Display a listing of the resource.
     *
     * @param Request permintaan
     * @param Response respon
     *
     * @return Array
     */
    index: (permintaan, respon) => {
        try {
            adjectiveService.index(permintaan, respon);
        } catch (error) {
            catchError(permintaan, respon, error);
        }
    },

    /**
     * Display a specified resource.
     *
     * @param Request permintaan
     * @param Response respon
     * @param Int id
     *
     * @return Array
     */
    show: (permintaan, respon) => {
        try {
            adjectiveService.show(permintaan, respon);
        } catch (error) {
            catchError(permintaan, respon, error);
        }
    },
};
