const apiKey = "01be76448babf58a3e7328a605683454";

fetchWeatherInfo("cambodia");
fetchFiveDaysForecast("cambodia");


async function fetchWeatherInfo(city){
  const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try{
    const response = await fetch(apiLink);

    const data =await response.json();
    // console.log(data);

    const weatherToday = data.weather[0].main;
    // console.log(weatherToday);
    document.querySelector(".weather-today").src = weatherIcon[`${weatherToday}`];
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"°C";

    const min_temp = Math.round(data.main.temp_min);
    const max_temp = Math.round(data.main.temp_max);
    document.querySelector(".max-min-temp").innerHTML = `L:${min_temp}° H:${max_temp}°`;

    document.querySelector(".city-name").innerHTML = data.name;

    document.querySelector(".humidity-today").innerHTML = data.main.humidity+"%";

    document.querySelector(".wind-speed-today").innerHTML = data.wind.speed+"m/s";

    document.querySelector(".feel-like-today").innerHTML = Math.round(data.main.feels_like)+"°C";

    document.querySelector(".visibility-today").innerHTML = Math.round(data.visibility/1000) +"km";

    fetchFiveDaysForecast(city);
  }catch(error){
    console.log("Can't fetch the data ", error);
  }

}

document.querySelector(".search-button").addEventListener("click", ()=>{
  const cityInput = document.getElementById("city-name-input").value;
  fetchWeatherInfo(cityInput);
})
document.querySelector("#city-name-input").addEventListener("keydown", (event)=>{
  if(event.key === "Enter"){
    const cityInput = document.getElementById("city-name-input").value;
    fetchWeatherInfo(cityInput);
  }

})

const weatherIcon = {
  Clear: "./image/sunny.svg",
  Clouds: "./image/cloud.svg",
  Rain: "./image/rain.svg",
  Snow: "./image/snow.svg",
  Drizzle: "./image/rainy.svg",      
  Thunderstorm: "./image/rainy.svg",  
  Mist: "./image/cloud.svg",         
  Haze: "./image/cloud.svg",         
  Fog: "./image/cloud.svg",         
  Snow: "./image/snow.svg",  
}

async function fetchFiveDaysForecast(city){
  const apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiLink);
  const data = await response.json();

  console.log(data);
  const todayWeather = data.list.slice(0,8);
  // console.log(todayWeather)
  checkHourlyForecast(todayWeather);
  fiveDaysForecastData(data.list);
}

function checkHourlyForecast(dataHourly){
  let html = "";
  dataHourly.forEach((hour)=>{
    const time = new Date(hour.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const temp = Math.round(hour.main.temp);
    const weatherToday = hour.weather[0].main;
    // console.log(weatherToday);
    const iconSrc = weatherIcon[weatherToday];

    // console.log(time);
    html += `
      <div class="forecast-box col-4 col-md-3">
        <p>${time}</p>
        <img src="${iconSrc}" alt="" class="forecast-icon">
        <p>${temp}°C</p>
      </div>
    `;
  });
  document.querySelector(".hourly-forecast-details").innerHTML = html;
}

function fiveDaysForecastData(days){
  const dailyForecast = days.filter(item => item.dt_txt.includes("12:00:00"));
  console.log(dailyForecast);
  let html = "";
  dailyForecast.forEach((day)=>{
    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
    const weatherToday = day.weather[0].main;
    // console.log(weatherToday);
    const iconSrc = weatherIcon[weatherToday];

    html += `
      <div class="forecast-each-day col-12">
        <div class="forecast-date col-4">
          ${date}
        </div>
        <img src="${iconSrc}" alt="" class="forecast-today col-3">
        <span class="min-temp">${Math.round(day.main.temp_min)}°C</span>
        <div class="temp-bar">
          <div class="temp-fill"></div>
        </div>
        <span class="max-temp">${Math.round(day.main.temp_max)}°C</span>
      </div>
    `;
  });

  document.querySelector(".five-days-forecast-details").innerHTML = html;
}