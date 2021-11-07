import { getConnection } from "./db.js";

export function getSchool(id, callbackFn) {
    const connection = getConnection();
    connection.connect();

    connection.query(`SELECT * FROM SCHOOL WHERE ID=${id}`, function (error, results, fields) {
        if (error) throw error;
        connection.end();
        callbackFn(results[0] ? results[0] : {message: "School not found"});
    });
}

export function deleteSchool(id, callbackFn) {
    const connection = getConnection();
    connection.connect();

    connection.query(`DELETE FROM SCHOOL WHERE ID=${id}`, function (error, result, fields) {
        if (error) throw error;
        connection.end();
        callbackFn(result.affectedRows > 0 ? true : false);
    });
}

export function createSchool(schoolObj, callbackFn) {
    const connection = getConnection();
    connection.connect();

    connection.query(`INSERT INTO SCHOOL VALUES (${schoolObj.id}, '${schoolObj.name}', ${schoolObj.addressId})`, (error, result, fields) => {
        connection.end();
        if (error) callbackFn(null)
        callbackFn(result.affectedRows > 0)
    });
}

export function updateSchool(schoolObj, callbackFn) {
    const connection = getConnection();
    connection.connect();

    connection.query(`UPDATE SCHOOL SET NAME='${schoolObj.name}', ADDRESSID=${schoolObj.addressId} WHERE ID=${schoolObj.id}`, (error, result, fields) => {
        connection.end();
        if (error) callbackFn(null)
        callbackFn(result.affectedRows > 0)
    });
}