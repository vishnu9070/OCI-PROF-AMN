// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById('weatherInfo').innerHTML = <p style="color:red;">City not found!</p>;
            return;
        }

        document.getElementById('weatherInfo').innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="weather-icon">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
