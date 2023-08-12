
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac4f77b15bmsh5b82e6eb6fa7f20p1fa7c5jsnd85a5ea85884',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;

	fetch(url, options)
	  .then(response => response.json())
	  .then(result => {
		console.log(result)

		
		temp.innerHTML=result.temp;
		temperature.innerHTML=result.temp;
		cloud_pct.innerHTML=result.cloud_pct
		feels_like.innerHTML=result.feels_like
		humidity.innerHTML=result.humidity
		humidity2.innerHTML=result.humidity
		min_temp.innerHTML=result.min_temp
		max_temp.innerHTML=result.max_temp
		wind_speed.innerHTML=result.wind_speed
		wind_speed2.innerHTML=result.wind_speed
		wind_degrees.innerHTML=result.wind_degrees
		sunrise.innerHTML=result.sunrise
		sunset.innerHTML=result.sunset
	  })
	  .catch(error => {
		console.error(error);
	  });

}
let a=document.getElementById('submit');
a.addEventListener('click',(event)=>{
	event.preventDefault();
	getWeather(city.value);
	cityName.innerHTML=city.value;
})

getWeather("Kolkata");
