import { app } from "../index.js";
import { getConnection } from "./db.js";

export default function registerAPI() {

    // get school details by id
    app.get("/school/get/:id", (request, response) => {

        const id = request.params.id;

        const connection = getConnection();
        connection.connect();
   
        connection.query(`SELECT * FROM SCHOOL WHERE ID=${id}`, function (error, results, fields) {
          if (error) throw error;
          connection.end();
          response.send(results[0] ? results[0] : {});
        });
    });
    
    // delete school details by id
    // /school/delete/:id
    

    // create school details
    // /school/create
    

}
