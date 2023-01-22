var mysql = require("mysql");

// Get Config File
var database = require("./database");

// Main logic
if (database.default == "mysql") {
    var dbConfig = database.connections[2];

    const connection = mysql.createConnection({
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
    });

    connection.connect(function (err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }

        console.log("connected as id " + connection.threadId);
    });

    module.exports = connection;
}
