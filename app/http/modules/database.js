// Get Config File
var config = require("../../../config/database");

// Validate database config
function validate(type) {
    try {
        var connection = config.connections;

        connection.forEach((element) => {
            if (element.driver == type) {
                console.log(
                    "SERVER database connection default exist - - ms - -"
                );

                return false;
            }
        });
    } catch (error) {
        console.log("SERVER database default error or not exist - - ms - -");

        return true;
    }
}

module.exports = {
    /**
     * Get connection from config
     *
     * @return String
     */
    get: function () {
        if (!validate(config.default)) {
            return config.default;
        }
    },
};
