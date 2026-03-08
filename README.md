# Weather App 🌦️

This is a simple **Weather Application** built using **HTML, CSS, and JavaScript**.
It fetches real-time weather data from the **OpenWeather API** and displays weather information for any searched city.

---

## Features

* Search weather by **city name**
* Optional **country filter**
* Displays:

  * City and country
  * Current temperature
  * Weather condition
  * Minimum and maximum temperature
  * Current date
* Uses **OpenWeather API**
* Responsive and clean **UI design**
* Weather icons using **Font Awesome**

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* OpenWeather API
* Font Awesome

---

## Project Files

```text
weather-app
│
├── index.html
├── main.css
├── main.js
└── background.gif
```

---

## How the Application Works

1. The user enters a **city name** in the search bar.
2. JavaScript sends a request to the **OpenWeather API**.
3. The API returns weather data in **JSON format**.
4. The application extracts:

   * Temperature
   * Weather condition
   * Min / Max temperature
   * City name
5. The data is dynamically displayed on the webpage.

---

## Example API Request

```text
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
```

---

## How to Run the Project

1. Download or clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
```

2. Open the project folder

```bash
cd weather-app
```

3. Open **index.html** in your browser.

---

## Future Improvements

* Add **humidity and wind speed display**
* Add **weather icons from API**
* Add **7-day weather forecast**
* Add **automatic location detection**
* Improve UI animations

---

## Author

Rajkumar Jaiswal

---

This project was created for **learning JavaScript and API integration**.
