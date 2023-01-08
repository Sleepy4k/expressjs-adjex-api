var fs = require("fs");
var path = require("path");

// Get Config File
var { system } = require("../../../config/path");

// Validate database
var database = require("./database");

// Database Location
var dbPath = path.join(__dirname, `../../../${system.database}`);

module.exports = {
    /**
     * Check if database connection exist
     *
     * @param File file
     *
     * @return Bool
     */
    exist: function (file) {
        var path = `${dbPath}/${file}.json`;

        try {
            if (database.get() == "file") {
                fs.statSync(path);
            }

            console.log("SERVER database file exist - - ms - -");

            return true;
        } catch (error) {
            if (database.get() == "file") {
                fs.closeSync(fs.openSync(path, "w"));
                fs.writeFileSync(path, "[]");
            }

            console.log(`SERVER ${error.message} - - ms - -`);

            return module.exports.exist(file);
        }
    },

    /**
     * Get data from database
     *
     * @param File file
     *
     * @return Array
     */
    get: function (file) {
        var path = `${dbPath}/${file}.json`;

        try {
            if (database.get() == "file") {
                var dataBuffer = fs.readFileSync(path);
                var dataString = dataBuffer.toString();

                return JSON.parse(dataString);
            }
        } catch (error) {
            console.log(`SERVER ${error.message} - - ms - -`);
        }
    },

    /**
     * Store data to database
     *
     * @param File file
     * @param Body body
     *
     * @return Bool
     */
    store: function (file, body) {
        var path = `${dbPath}/${file}.json`;

        try {
            if (database.get() == "file") {
                var dataString = JSON.stringify(body);
                var dataSaved = fs.writeFileSync(path, dataString);

                return dataSaved;
            }
        } catch (error) {
            console.log(`SERVER ${error.message} - - ms - -`);
        }
    },

    /**
     * Find data from database
     *
     * @param File file
     * @param Id id
     *
     * @return Array
     */
    find: function (file, id) {
        try {
            var users = module.exports.get(file);
            var user = users.find((user) => user.urutan == id);

            return user;
        } catch (error) {
            console.log(`SERVER ${error.message} - - ms - -`);
        }
    },
};
