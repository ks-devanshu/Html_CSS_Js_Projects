const apiKey = '03588fbbcdb5fc34fbf661339638b2c7';
// openweathermap.org
// usermail : xacela6715@luxudata.com
const inputEl = document.getElementById('city-input');
const searchBtnEl = document.getElementById('search-btn');
const outputEl = document.getElementById('output-div');
const errorEl = document.getElementById('error-div');
const tempDeg = document.getElementById('temp-cel');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const imageEl = document.getElementById('weather-img');
const descEl = document.getElementById('description');

searchBtnEl.addEventListener("click", () => {
    const result = getWeatherData(inputEl.value);
})

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if(!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();
        updateView(data);        
        outputEl.style.display = 'block';
        errorEl.style.display = 'none';
        
    } catch (error) {
        console.log(error.message);
        outputEl.style.display = 'none';
        errorEl.style.display = 'block';
    }
}

function updateView(data) {
    tempDeg.innerHTML = Math.round(data.main.temp);
    feelsLike.innerHTML = Math.round(data.main.feels_like);
    humidity.innerHTML = data.main.humidity;
    windSpeed.innerHTML = data.wind.speed;
    descEl.innerHTML = data.weather[0].description;
    imageEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}