const api = {
  key: "2654f8f650f03abf51df219541d10f02",
  base: "https://api.openweathermap.org/data/2.5/"
};

document.addEventListener("DOMContentLoaded", () => {

  const searchBtn = document.querySelector(".search-btn");
  const searchBox = document.querySelector(".search-box");

  searchBtn.addEventListener("click", getResults);

  searchBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      getResults();
    }
  });

});

async function getResults() {

  const city = document.querySelector(".search-box").value;

  if (!city) {
    alert("Enter city name");
    return;
  }

  try {

    const response = await fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`);

    const data = await response.json();

    if (data.cod != 200) {
      alert("City not found");
      return;
    }

    displayResults(data);

  } catch (error) {

    console.error("Error fetching weather:", error);

  }

}

function displayResults(weather) {

  const city = document.querySelector(".location .city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  const now = new Date();
  const date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  const temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  const weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  const hilow = document.querySelector(".hi-low");
  hilow.innerText =
    `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

}

function dateBuilder(d) {

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;

}