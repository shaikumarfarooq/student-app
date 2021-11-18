import logo from './logo.svg';
import './App.css';
import React from "react"
import CreateSchool from './CreateSchool';

function App() {


  React.useEffect(() => {
    // fetch("http://localhost:5000/school/get/2").then(data => {
    //   data.json().then(jsonData =>{
    //     console.log(jsonData)
    //   });
    // })
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CreateSchool />
    </div>
  );
}

export default App;
