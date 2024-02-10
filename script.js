function fetchWeatherData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3380a21e5fmshf0e383b37282dc1p1f50acjsnb5fd427786a1',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        cityName.innerHTML = city;
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response as JSON
        })
        .then(data => {
            console.log(data); // Log the response data
            // Update HTML elements with response data
            cloud_pct.innerHTML = data.cloud_pct;
            temp.innerHTML = data.temp;
            temp2.innerHTML = data.temp;
            feels_like.innerHTML = data.feels_like;
            humidity.innerHTML = data.humidity;
            humidity2.innerHTML = data.humidity;
            min_temp.innerHTML = data.min_temp;
            max_temp.innerHTML = data.max_temp;
            wind_speed.innerHTML = data.wind_speed;
            wind_speed2.innerHTML = data.wind_speed;
            sunrise.innerHTML = data.sunrise;
            sunset.innerHTML = data.sunset;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        getWeather(city.value);
    });

    // Initial call to fetch weather data for Bengaluru
    getWeather("Bengaluru");
}

// Call the function
fetchWeatherData();
