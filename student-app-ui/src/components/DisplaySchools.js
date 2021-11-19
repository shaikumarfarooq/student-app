import axios from 'axios';
import React, { useEffect, useState } from 'react';

const data = [
    {
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

    useEffect(()=> {
        getSchools();
    }, []);  

    function getSchools(){
        axios.get("http://localhost:5000/school/get-all").then(response => {
            setSchools(response.data)
    }).catch(error => console.error(error));
    }

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
                    <tr >
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
            </div>
        </div>
    );
}

