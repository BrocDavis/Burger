let connection = require("../config/connection.js");

let orm = {
    selectAll: (tableinput, cb) => {
        let querystring = "SELECT * FROM burgers";
        connection.query(querystring, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
    insertOne() {

    }
updateOne() {

    }
}



module.exports = orm;