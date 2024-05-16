import React, { useEffect} from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import backgroundImage from "../Images/background.webp";
import mapboxgl from 'mapbox-gl';


export default function MapView() {

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });

    map.on('click', (e) => {
        const coordinates = e.lngLat;

        // Reverse geocode coordinates to get city name
        const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.lng},${coordinates.lat}.json?access_token=${mapboxgl.accessToken}`;

        fetch(geocodeUrl)
            .then(response => response.json())
            .then(data => {
                const city = data.features[1].text; // Get the first feature's text (usually the city name)

                // Define options for weather API request
                const weatherOptions = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
                        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                    }
                };

                // Fetch weather data
                const weatherUrl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
                fetch(weatherUrl, weatherOptions)
                    .then(response => response.json())
                    .then(result => {
                        const temperature = result.temp;
                        const humidity = result.humidity;
                        const feels_like = result.feels_like;
                        const wind_speed = result.wind_speed;
                        const popupContent = `
                            <div className="rounded"  style={{
                              backgroundColor: "rgba(255, 255, 255, 0.3)",
                              backdropFilter: " blur(10px)",
                            }}>
                                <h6>Weather in ${city}</h6>
                                <p>Temperature: ${temperature}°C</p>
                                <p>Humidity: ${humidity} %</p>
                                <p>feels like ${feels_like}°C</p>
                                <p>wind speed: ${wind_speed} km/hr</p>
                                <p>
                            </div>
                        `;

                        new mapboxgl.Popup()
                            .setLngLat(coordinates) // Set the popup's location
                            .setHTML(popupContent)
                            .addTo(map);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    });
}, []);


  return (
   <>
   <Navbar/>
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
       <div id='map' style={{ width: '100vw', height: '100vh' }}></div>
      <Footer/>
      </div>
   </>
  )
}
