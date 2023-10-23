import React, { useState } from 'react'
import './WheatherApp.css'

import  search_icons from "../Assets/search.png";
import  clear_icons from "../Assets/clear.png";
import  cloud_icons from "../Assets/cloud.png";
import  drizzle_icons from "../Assets/drizzle.png";
import  rain_icons from "../Assets/rain.png";
import  snow_icons from "../Assets/snow.png";
import  wind_icons from "../Assets/wind1.png";
import  humidity_icons from "../Assets/humidity1.png";
import  latitude_icons from "../Assets/latitude200.png";
import  ground_icons from "../Assets/ground.png";
import sea_icons from "../Assets/sea_icon.png";


const dateBuilder =(d) =>{
        let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        let day=days[d.getDay()];
        let date=d.getDate();
        let month=months[d.getMonth()];
        let year=d.getFullYear();

        return `${day}, ${date} ${month} ${year}`;
       };



function WheatherApp() {
   
    let api_key="c64e79c6ddf81f9eca2878bf926244c5";

    const [wicon,setWicon] =useState(cloud_icons);

    const search= async () =>{
       const element =document.getElementsByClassName("cityInput")  
       if(element[0].value==="")
       {
        return 0;
       }

      

       

       let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

       let response  = await fetch(url);
       let data = await response.json();
       const humidity =document.getElementsByClassName("humidity-percent");
       const wind =document.getElementsByClassName("wind-rate");
       const temprature =document.getElementsByClassName("weather-temp");
       const type =document.getElementsByClassName("weather-type");
       const location =document.getElementsByClassName("weather-location");
       const longitude =document.getElementsByClassName("longitude");
       const latitude =document.getElementsByClassName("latitude");
       const sealevel =document.getElementsByClassName("sea_level");
       const groundlevel =document.getElementsByClassName("grnd_level");



       humidity[0].innerHTML =data.main.humidity+"%";
       wind[0].innerHTML =data.wind.speed+"km/h";
       temprature[0].innerHTML=data.main.temp+"°C";
       type[0].innerHTML=data.weather[0].main;
       location[0].innerHTML=data.name;
       longitude[0].innerHTML=data.coord.lon;
       latitude[0].innerHTML=data.coord.lat;
       sealevel[0].innerHTML=data.main.sea_level;
       groundlevel[0].innerHTML=data.main.grnd_level;

       if(data.weather[0].icon==="01d"|| data.weather[0].icon==="01n" )
       {
        setWicon(clear_icons);
       }
       else if(data.weather[0].icon==="02d"|| data.weather[0].icon==="02n")
       {
        setWicon(cloud_icons)
       }
       else if(data.weather[0].icon==="03d"|| data.weather[0].icon==="03n")
       {
        setWicon(drizzle_icons)
       }
       else if(data.weather[0].icon==="04d"|| data.weather[0].icon==="04n")
       {
        setWicon(cloud_icons)
       }
       else if(data.weather[0].icon==="09d"|| data.weather[0].icon==="09n")
       {
        setWicon(rain_icons)
       }
       else if(data.weather[0].icon==="10d"|| data.weather[0].icon==="10n")
       {
        setWicon(rain_icons)
       }
       else if(data.weather[0].icon==="13d"|| data.weather[0].icon==="13n")
       {
        setWicon(snow_icons)
       }
       else{
        setWicon(clear_icons)
       }
    }

  return (
    <div className='container'>
        <div className='top-bar'>
          <input type='text' className='cityInput' placeholder='search'/>
          <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icons} alt="" />
          </div>
        </div>
        <div className='weather-image'>
         <img src={wicon} alt="" />
        </div>
        <div className="weather-type">sunny</div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">India</div>
        <div className="date">{dateBuilder(new Date())}</div>
        <div className="data-container">
            <div className="element2">
                <img src={humidity_icons} alt="" className='icon2' />
                <div className="data2">
                    <div className="humidity-percent">64%</div>
                    <div className="text2">Humidity</div>
                </div>
            </div>
            <div className="element2">
                <img src={wind_icons} alt="" className='icon2' />
                <div className="data2">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text2">wind speed</div>
                </div>
            </div>
            </div>
            <div className="data-container">
            <div className="element2">
                <img src={latitude_icons}  alt="" className='icon2' />
                <div className="data2">
                    <div className="longitude">64</div>
                    <div className="text2">Longitude</div>
                </div>
            </div>
            <div className="element2">
                <img src={latitude_icons} alt="" className='icon2' />
                <div className="data2">
                    <div className="latitude">18 </div>
                    <div className="text2">Latitude</div>
                </div>
            </div>
            </div>
            <div className="data-container">
            <div className="element2">
                <img src={sea_icons} alt="" className='icon2' />
                <div className="data2">
                    <div className="sea_level">64</div>
                    <div className="text2">Sea-level</div>
                </div>
            </div>
            <div className="element2">
                <img src={ground_icons} alt="" className='icon2' />
                <div className="data2">
                    <div className="grnd_level">18 </div>
                    <div className="text2">Ground-level</div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default WheatherApp;