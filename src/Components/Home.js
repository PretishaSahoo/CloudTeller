import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../Images/background.webp";
import Footer from './Footer.js'

export default function Home() {
  return (
    <>
      <div
        className="home-container"
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          overflow: "auto"
        }}
      >
        <nav
          className="navbar navbar-expand-lg fixed-top p-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: " blur(10px)",
          }}
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 120 120"
                id="weather"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="60"
                    x2="60"
                    y1="-725.988"
                    y2="-845.988"
                    gradientTransform="matrix(1 0 0 -1 0 -725.988)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#1d6ff2"></stop>
                    <stop offset="1" stopColor="#1ac8fc"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="-550.983"
                    x2="-550.983"
                    y1="-440.505"
                    y2="-442.505"
                    gradientTransform="matrix(21.5 0 0 -21.5 11884.645 -9443.866)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ffc700"></stop>
                    <stop offset="1" stopColor="#ffea00"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#a)"
                  d="M26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A25.94821,25.94821,0,0,1,0,94V26A25.94821,25.94821,0,0,1,26,0Z"
                ></path>
                <circle cx="38.5" cy="48.5" r="21.5" fill="url(#b)"></circle>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  style={{ isolation: "isolate" }}
                  d="M43,90a16.51916,16.51916,0,0,1-4-32.4,21.00077,21.00077,0,0,1,40.9-6.3,21.8614,21.8614,0,0,1,3.6-.3,19.5,19.5,0,0,1,0,39H43Z"
                  opacity=".88"
                ></path>
              </svg>
              CloudTeller
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-4 ">
                  <a
                    className="nav-link active p-2"
                    aria-current="page"
                    href="#Home"
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "0 2px 4px rgba(255, 255, 255, 0.4)",
                      borderRadius: "6px",
                      transition: "color 0.3s",}}
                    onMouseEnter={(e) =>(e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
                    onMouseLeave={(e) =>(e.target.style.backgroundColor = "transparent")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mx-4 ">
                  <a
                    className="nav-link active p-2"
                    aria-current="page"
                    href="#About"
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "0 2px 4px rgba(255, 255, 255, 0.4)",
                      borderRadius: "6px",
                      transition: "color 0.3s",}}
                    onMouseEnter={(e) =>(e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
                    onMouseLeave={(e) =>(e.target.style.backgroundColor = "transparent")}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-4 ">
                  <Link
                    className="nav-link active p-2"
                    aria-current="page"
                    to="/tabularview"
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "0 2px 4px rgba(255, 255, 255, 0.4)",
                      borderRadius: "6px",
                      transition: "color 0.3s",}}
                    onMouseEnter={(e) =>(e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
                    onMouseLeave={(e) =>(e.target.style.backgroundColor = "transparent")}
                  >
                    Tabular View
                  </Link>
                </li>
                <li className="nav-item mx-4 ">
                  <Link
                    className="nav-link active p-2"
                    aria-current="page"
                    to="/mapview"
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "0 2px 4px rgba(255, 255, 255, 0.4)",
                      borderRadius: "6px",
                      transition: "color 0.3s",}}
                    onMouseEnter={(e) =>(e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
                    onMouseLeave={(e) =>(e.target.style.backgroundColor = "transparent")}
                  >
                    Map View
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>

        <section id="Home" className="container my-5" style={{paddingTop:"150px" , paddingBottom:"100px"}}>
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-3 mb-4 fw-bold" style={{ color: '#009bff' }}>Welcome to </h1>
              <span className="display-3 fw-bold" style={{color:"white"}}>CloudTeller</span>
              <p className="lead mb-4" style={{ color: '#6c757d' }}>
              Stay updated with real-time weather information accessible from anywhere in the world. Experience accurate, timely, and detailed meteorological data right at your fingertips. Our application ensures that you receive the most current weather updates, allowing you to plan your days with confidence. Whether you need to check the temperature, humidity levels, wind speeds, or overall weather conditions, our service provides you with comprehensive and reliable information instantly. Make informed decisions based on precise weather forecasts tailored to your local environment or any global destination.
              </p>
              <Link to="/mapview" className="btn btn-lg my-4 mx-2" style={{ background: 'linear-gradient(45deg, #007bff, #0056b3)', color: 'white', border: 'none' }}>Map View</Link>
              <Link to="/tabularview" className="btn btn-lg my-4 mx-2" style={{ background: 'linear-gradient(45deg, #ffc107, #ff8c00)', color: 'white', border: 'none' }}>Tabular View</Link>
            </div>
          </div>
        </section>
        <section id="About" className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
          <h1 className="display-3 mb-4 fw-bold" style={{ color: 'gold'  }}>About Us </h1>
            <p className="mb-4" style={{ color: '#6c757d' }}>
            Our weather application offers comprehensive weather details including current temperature, minimum and maximum temperatures, humidity levels, wind speed, and much more for locations around the world. With our app, you can access up-to-date and accurate weather data that helps you stay prepared for any conditions. Whether you are planning your daily activities, scheduling travel, or simply need to know if you should bring an umbrella, our application has you covered.
            <br />
            Choose between two distinct versions to suit your preferences: a standard version for straightforward weather updates and a map version, which incorporates MapBox technology for a dynamic and interactive experience. The map version enhances your weather tracking by providing visual representations of weather changes and patterns across different regions. This feature is particularly useful for visual learners and those who engage more interactively with maps.
            <br />
            Our application is designed to be intuitive and user-friendly, ensuring that you can easily navigate between different features and obtain the weather information you need without hassle. </p>
            <h3 className="mb-3" style={{ color: '#17a2b8' }}>Technologies Used</h3>
              <ul className="list-unstyled" style={{ color: '#343a40' }}>
                <li style={{ color: '#6c757d' }}><strong style={{color:"white"}}>React JS:</strong > For building the frontend UI, ensuring a dynamic and responsive user experience.</li>
                <li style={{ color: '#6c757d' }}><strong style={{color:"white"}}>Weather API:</strong> For fetching real-time, accurate weather data.</li>
                <li style={{ color: '#6c757d' }}><strong style={{color:"white"}}>Bootstrap:</strong> For responsive design and styling, making the app look great on any device.</li>
                <li style={{ color: '#6c757d' }}><strong style={{color:"white"}}>MapBox:</strong> For the interactive map version, providing a visually appealing way to explore weather data.</li>
              </ul>
          </div>
        </div>
      </section>
      <Footer></Footer>
      </div>
    </>
  );
}
