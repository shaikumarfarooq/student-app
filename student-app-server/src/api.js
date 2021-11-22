import { app } from "../index.js";
import bodyParser from "body-parser";
import getSchools, { createSchool, deleteSchool, getSchool, updateSchool } from "./db/school.js";
import { createAddress, deleteAddress, getAddressByParams, updateAddress } from "./db/address.js";

export default function registerAPI() {

  app.use(bodyParser.json());

  // get school details by id
  app.get("/school/get/:id", (request, response) => {
    const id = request.params.id;
    getSchool(id, (school) => {
      response.send(school)
    });
  });

  // delete school details by id  
  app.delete("/school/delete/:id", (req, res) => {
    const id = req.params.id;
    // Get School Details (Callback function delete school)
    // Delete address in delete school's callback function
    // Return response(res.send) in delete address's callback function

    getSchool(id, (school)=> {
      if(!school){
        res.send({ message: "Failed to delete School" });
      } else {
        deleteSchool(id, (result)=> {
          if(result){
            deleteAddress(school.ADDRESSID, (addrResult)=> {
              res.send(addrResult ? { message: "School deleted successfully" } : { message: "Failed to delete School" });
            })
          } else {
            res.send({ message: "Failed to delete School" });
          }
        })      
      }
    });          
  });

  // create school details
  app.post("/school/create", (req, res) => {
    const body = req.body;
    console.log(body)
    if (!body.address) {
      res.send({ message: "Address is mandatory to create a School" });
    }

    getAddressByParams(body.address, (address) => {
      if (!address) {
        createAddress({ ...body.address, isSchoolAddr: true }, (addr) => {
          console.log(addr)
          createSchool({ name: body.name, addressId: addr.ADDRESSID }, (result) => {
            res.send(result ? { message: "school created successfully" } : { message: "Failed to create school" });
          });
        })
      } else {
        createSchool({ name: body.name, addressId: address.ADDRESSID }, (result) => {
          res.send(result ? { message: "school created successfully" } : { message: "Failed to create school" });
        });
      }
    });
  });

  // update school details
  app.put('/school/update', (req, res) => {
    const body = req.body;
    console.log(body)
    updateSchool({ id: body.id, name: body.name }, (school) => {
      console.log(school)
      if (body.address) {
        updateAddress({ ...body.address, addressid: school.ADDRESSID }, (result) => {
          console.log(result)
          res.send(result ? { message: "school updated successfully" } : { message: "Failed to update School" })
        })
      } else {
        res.send({ message: "school updated successfully" })
      }
    });
  });

  app.get("/school/get-all", (req, res) => {
    getSchools((schools) => {
      const resutls = schools.map(name => {
        return { id: name.ID, name: name.NAME, address: { addressId: name.ADDRESSID, houseNo: name.HOUSENO, street: name.STREET, town: name.TOWN, district: name.TOWN, state: name.STATE, country: name.COUNTRY, is_address: name.IS_SCHOOL_ADDR } }
      })
      res.send(resutls)
    });
  });

}
