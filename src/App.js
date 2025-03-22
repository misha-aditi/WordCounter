// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Alert from './component/Alert';


function App() {
  const[mode, setMode] = useState('light');
   const[alert, setAlert] = useState('null');

  const showAlert =(message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

 const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#080479';
     showAlert("Dark mode has been enabled","success")
      setInterval(() => {                              //  (flash changing title)
        document.title = "download antivirus"
      }, 1500);
      setInterval(() => {
        document.title = "download rummy circle"
      }, 1000);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success")
    }
  }
  return (
   <>
   <Navbar title="My Words" aboutText="About us" mode = {mode} toggleMode = {toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <Textform heading="Enter Your Text" mode = {mode} showAlert = {showAlert}/>
   </div>
   <div className="container my-3">
    <About/>
   </div>
   
   </>
  );
}

export default App;
