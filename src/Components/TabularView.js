import React, { useEffect, useState } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import backgroundImage from "../Images/background.webp";

export default function TabularView() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("kolkata");

  const fetchWeather = async (city) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    setCity(city);
    fetchWeather(city);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          overflow: "auto",
        }}
      >
        <div
          className="main"
          style={{ marginTop: " 200px ", marginBottom: "100px" }}
        >
            
          <h2
            className="display-3 fw-bold text-center p-4"
            style={{ color: "#009bff" }}
          >
            Weather for{" "}
            <span style={{ color: "white" }}>
              {city}
            </span>
          </h2>
          
          <div className="d-flex justify-content-center">
            <div className="d-flex">
                <input className="m-auto p-2 bg-transparent mb-4 rounded" placeholder="Enter location ..." type="text" onChange={handleCityChange}/>
                <button type="button" className="btn btn-info mx-2 mb-4" onClick={handleSubmit}>Search</button>
            </div>
        </div>


          
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div
                  className="card mb-4 rounded-3 shadow-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: " blur(10px)",
                  }}
                >
                  <div className="card-header py-3 head1">
                    <h4 className="my-0 fw-normal ">Temperature</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title temperature">
                      <span >{weather?.temp}</span>°C
                    </h1>
                    <ul className="list-unstyled mt-3 mb-1">
                      <li>
                        Temperature is <span >{weather?.temp}</span>°C
                      </li>
                      <li>
                        Min Temperature <span >{weather?.min_temp}</span>°C
                      </li>
                      <li>
                        Max Temperature <span >{weather?.max_temp}</span>°C
                      </li>
                      <li>
                        Cloud PCT is <span>{weather?.cloud_pct}</span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg  btn-warning"
                    >
                      {" "}
                      Find Out!
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card mb-4 rounded-3 shadow-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: " blur(10px)",
                  }}
                >
                  <div className="card-header py-3 head2">
                    <h4 className="my-0 fw-normal">Humidity</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {" "}
                      <span >{weather?.humidity}</span>%
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>
                        wind Degree is <span >{weather?.wind_degrees}</span>°
                      </li>
                      <li>
                        Feels like <span >{weather?.feels_like}</span>°C
                      </li>
                      <li>
                        Humidity is <span>{weather?.humidity}</span>%
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-primary btn-warning"
                    >
                      Find Out!
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card mb-4 rounded-3 shadow-sm "
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: " blur(10px)",
                  }}
                >
                  <div className="card-header py-3 head3 ">
                    <h4 className="my-0 fw-normal ">Wind-Info</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {" "}
                      <span >{weather?.wind_speed}</span>
                      <small className="text-body-secondary fw-light">
                        km/hr
                      </small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>
                        Wind Speed is <span>{weather?.wind_speed}</span>km/hr
                      </li>
                      <li>
                        Sunrise Time <span id="sunrise">{weather?.sunrise}</span>{" "}POSIX
                      </li>
                      <li>
                        Sunset Time <span id="sunset">{weather?.sunset}</span>{" "}POSIX
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-warning"
                    >
                      Find Out!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra container-fluid p-3 m-2 text-center ">
            <p>"Welcome to CloudTeller!Wish You have a very good day!"</p>
            <p>
              Come to Know about Weather all around you on just a simple swipe
              and Click!
              <br />
              Always There to help anytime!!!
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
