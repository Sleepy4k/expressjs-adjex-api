var mongoose = require("mongoose");

// Get Config File
var database = require("./database");

// Main logic
if (database.default == "mongoose") {
    var connection = database.connections[1];

    module.exports = {
        connect: async function main() {
            await mongoose.connect(
                `mongodb://${connection.host}:${connection.port}/${connection.database}`
            );
            console.log("Database connected with host server");
        },
        status: function () {
            return mongoose.STATES[mongoose.connection.readyState];
        },
    };
}
