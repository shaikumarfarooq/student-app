import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateSchool from './UpdateSchool';

const data = [
    {
        "edit":"Edit",
        "name": "ZPUHS Settipalli",
        "address": {
            "houseNo": "2/120",
            "street": "Settipalli",
            "town": "Settipalli",
            "district": "Kadapa",
            "state": "AP",
            "country": "INdia"
        }
    },
    {
        "name": "ZPUHS Rayachoti",
        "address": {
            "houseNo": "1/120",
            "street": "Settipalli",
            "town": "Settipalli",
            "district": "Kadapa",
            "state": "AP",
            "country": "INdia"
        }
    }]


export default function DisplaySchools() {

    const [schools, setSchools] = useState([]);
    const [dataFilter,setdataFilter]=useState(null);

    useEffect(()=> {
        getSchools();
    }, []);  

    function getSchools(){
        axios.get("http://localhost:5000/school/get-all").then(response => {
            setSchools(response.data)

    }).catch(error => console.error(error));
    }

    function editSchool(id){
    
        // console.log(id)
        const filterData = schools.filter((value)=> id === value.id
            
        )
       console.log(filterData)

       setdataFilter(
        filterData[0]
);
       
        

    }
    console.log('filterData',dataFilter)
    return (
        <div>
            <div >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" onClick={getSchools} height="20" fill="currentColor" class="bi bi-arrow-clockwise icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
            </div>
            <table className="Table">
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Name</th>
                        <th>HouseNo</th>
                        <th>Street</th>
                        <th>Town</th>
                        <th>District</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schools.map((data, index) => {
                            return (
                                <tr key={index} className="rows">
                                    <td> <svg onClick={()=>editSchool(data.id)}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>
                                    <td>{data.name}</td>
                                    <td>{data.address.houseNo}</td>
                                    <td>{data.address.street}</td>
                                    <td>{data.address.town}</td>
                                    <td>{data.address.district}</td>
                                    <td>{data.address.state}</td>
                                    <td>{data.address.country}</td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
            <div>
                {/* Add Update School component here */}
                {dataFilter !== null ? <UpdateSchool data ={dataFilter} schools={getSchools} clear={setdataFilter} /> : ""}
                
            </div>
        </div>
    );
}

