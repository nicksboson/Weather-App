import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Searchbar.css";
import { useState } from "react";
import axios from "axios"
import ShowInfo from "./ShowInfo";

export default function Searchbar() {

let [city,setCity] = useState("");
let [data,setData] = useState({});
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "cf3a40e07f873ad073880201beacc02b";

let getWeatherInfo = async()=>{
  let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonRes = await res.json();
  setData ( {
    name : jsonRes.name,
    Temp : jsonRes.main.temp,
    humidity : jsonRes.main.humidity,
    minTemp: jsonRes.main.temp_min,
    maxTemp: jsonRes.main.temp_max,
    feelsLike: jsonRes.main.feels_like,
    description : jsonRes.weather[0].description,
    icon: jsonRes.weather[0].icon
  })
  console.log(data);
}


function submissionHandler(event){
  event.preventDefault();
setCity("");
getWeatherInfo();
  }

function handleChange(event){
  setCity(event.target.value);
}

  return (
    <div className="searchbar">
        <h1>Weather App</h1>
      <div  >
        <form action="" style={{textAlign:"center"}} onSubmit={submissionHandler}>
          <TextField id="city" label="City Name" variant="outlined" required style={{textAlign:"center"}} name="city" value= {city} onChange={handleChange} autoComplete="off" />
          <Button variant="contained" type="submit" style={{marginTop:"10px",marginLeft:"10px",textAlign:"center"}}>
            Submit
          </Button>
        </form>
      </div>

<div className= "info">

{data && data.name ? (<ShowInfo info={data} />) : null}
</div>
      
    </div>
  );
}
