import React from "react";
import Container from "./component/Container";
import Input from "./component/input";
// import './style.css'
import axios  from "axios";
import './App.css';

const App = props =>{
    const [city, setCity] = React.useState('')
    const [tempObj, setTempObj] = React.useState({});
      
   const api = {
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  key: process.env.REACT_APP_WEATHER_API_KEY
};


    const onKeyPress = city => {
        setCity(city);
        axios.get(`${api.baseURL}?q=${city}&appid=${api.key}&units=metric`)
        .then((res)=>{
            if(res.status == 200){
                setTempObj({
                        temp : res.data.main.temp,
                        city : city,
                        country : res.data.sys.country                    
                    })
            }
        })
        .catch(error =>{
            setCity('')
            setTempObj({})
         console.log(error)})
    }
   const tempClass = temp =>{
        if(temp < 0)
            return 'app-cold';
        else
            return 'app-warm';
        }
       
    return(<div className={tempClass(tempObj.temp)}>
   <div className="App">
    <h1>Weather Forecast </h1>
   </div>
        <Input 
            city = {city}
            setCity = {setCity}
            onKeyPress = {onKeyPress}
        />
        <Container 
            tempData={tempObj} 
            city = {city}
        />
        <div className="footer">
            <p>Developed by <a href="https://www.linkedin.com/in/skr-sumant/" target="_blank">Sumant Kumar</a></p>
        </div>
    </div>
    
);
    
}

export default App;