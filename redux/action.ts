import axios from "axios";
import React from "react";
import{Dispatch} from "redux";

const getCountry= (input:string, navigation: any)=>(dispatch: Dispatch)=> {
    return axios
    .get(`https://restcountries.eu/rest/v2/name/${{input}}`)
    .then((country)=>{
        dispatch({
            type: "SET_COUNTRY",
            data: country,
        });
        navigation.navigate("Country");
    });
};
const getCountryWeather = 
(capital: string, navigation: any)=>(dispatch: Dispatch)=>{
    return axios
    .get(
        `http://api.weatherstack.com/current?access_key=b7d7f802a2ec37d37936b1eace8a0fe3&query=${capital}`
    )
    .then((weather)=>{
        dispatch({
            type:"SET_WEATHER",
            data:weather
        });
        navigation.navigate("Weather");
    });
};
export {getCountry,getCountryWeather};