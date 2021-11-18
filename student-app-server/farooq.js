
import { app  } from "../index.js";
import  getSchools from './db/school.js'


export default function Api(){
app.get("/school/get-all",(req,res)=>{
    getSchools((school)=>{
        const resutls = school.map(name=>{
            return {name:name.NAME,address:{addressId:name.ADDRESSID ,houseNo:name.ADDRESS,street:name.STREET,town:name.TOWN ,district:name.TOWN ,state:name.STATE,country:name.COUNTRY ,is_address:name.IS_SCHOOL_ADDR  }}
        })
        res.send(resutls)
    });


});
}




import {getConnection} from './db.js'

export default function getSchools(callbackFn){

    const connection = getConnection();
    connection.connect();

    connection.query(`SELECT * FROM SCHOOL S, ADDRESS  A WHERE S.ADDRESSID = A.ADDRESSID`,(error,result,fields)=>{
        if(error) throw error;
        connection.end();
        callbackFn(error ?[]: result)

    })
}
