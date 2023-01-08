module.exports = {
    /**
     * Create success respon body
     *
     * @param  Request  permintaan
     * @param  Response  respon
     * @param  Params  params
     * @param  Integer  code
     * @return Array
     */
    success: function (permintaan, respon, params, code) {
        console.log("SERVER create success response api - - ms - -");

        respon.status(code || 200);

        respon.json({
            status: "success",
            message: params.message,
            meta: {
                hostname: permintaan.hostname,
                method: permintaan.method,
                url: permintaan.url,
            },
            data: params.data,
        });
    },

    /**
     * Create error respon body
     *
     * @param  Request  permintaan
     * @param  Response  respon
     * @param  Params  params
     * @param  Integer  code
     * @return Array
     */
    error: function (permintaan, respon, params, code) {
        console.log("SERVER create error response api - - ms - -");

        respon.status(code || 500);

        respon.json({
            status: "error",
            message: params.message,
            error: params.error,
            meta: {
                hostname: permintaan.hostname,
                method: permintaan.method,
                url: permintaan.url,
            },
        });
    },
};
