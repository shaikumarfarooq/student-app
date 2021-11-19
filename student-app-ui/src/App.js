import logo from './logo.svg';
import './App.css';
import React from "react"
import CreateSchool from './CreateSchool';
import DisplaySchools from './components/DisplaySchools';

function App() {


  React.useEffect(() => {
    // fetch("http://localhost:5000/school/get/2").then(data => {
    //   data.json().then(jsonData =>{
    //     console.log(jsonData)
    //   });
    // })
  }, []);

  return (
    <div>    
      <CreateSchool />
      <DisplaySchools />
    </div>
  );
}

export default App;
