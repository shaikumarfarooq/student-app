
import {getConnection} from './db.js'

export default function getSchool(id,callbackFn){

    const connection = getConnection();
    connection.connect();

    connection.query(`SELECT * FROM SCHOOL S, ADDRESS  A WHERE S.ADDRESSID = A.ADDRESSID`,(error,result,fields)=>{
        if(error) throw error;
        callbackFn([result[0]? result[0] : {message:'School is not found!!!'}])

    })
}



import { app  } from "../index.js";
import  getSchool from './db/school.js'


export default function Api(){
app.get("/school/get-all",(req,res)=>{
    console.log(req.params)
    const schdata =  req.params
    getSchool(schdata,(school)=>{
        res.send(school)
    });


});
}
