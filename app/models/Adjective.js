const sql = require("../../config/mysql");

const Adjective = function (adjective) {
    this.adjective = adjective.adjective;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Adjective.findById = (adjectiveId, result) => {
    sql.query(
        `SELECT * FROM adjectives WHERE name LIKE '%${adjectiveId}%'`,
        (err, res) => {
            if (err) {
                // if error
                console.log("error: ", err); // log error
                result(err, null); // return error
                return;
            }

            if (res.length) {
                // if adjective found
                console.log("Found adjective: ", res[0]); // log found adjective
                result(null, res[0]); // return found adjective
                return;
            }

            result({ kind: "not_found" }, null); // not found adjective
        }
    ); // sql.query
};

Adjective.getAll = (count, filter, result) => {
    let query = "SELECT * FROM adjectives";

    if (count) {
        query += ` ORDER BY RAND() LIMIT ${count}`;
    }

    if (filter) {
    }

    sql.query(query, (err, res) => {
        if (err) {
            // if error
            console.log("error: ", err); // log error
            result(null, err); // return error
            return;
        }

        console.log("adjectives: ", res); // log adjectives
        result(null, res); // return adjectives
    }); // sql.query
};
module.exports = Adjective;
