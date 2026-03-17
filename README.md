# 🌦 Weather Forecast Web Application

A responsive **Weather Forecast Web Application** that provides real-time weather information using the OpenWeatherMap API.  
The application automatically detects the user's location and displays current weather conditions, forecast data, and global city weather monitoring.

This project demonstrates **API integration, asynchronous JavaScript, DOM manipulation, and responsive UI design**.

---

# 📌 Features

### 🌍 Current Location Weather
- Automatically detects the user's location using the Geolocation API
- Displays current temperature and weather condition

### 🔎 Search Weather by City
- Search weather information by city name
- Displays wind speed, humidity, pressure, sunrise and sunset

### 📅 Weather Forecast
- Displays 6-day weather forecast
- Dynamic weather icons based on weather conditions

### 🌎 World Weather Monitoring
- Add and view weather of multiple cities worldwide
- Card-based UI layout for different locations

### 📱 Responsive UI
- Mobile-friendly layout
- Clean modern interface

---

# 🖥 Application Pages

## 1️⃣ Home Page
Shows weather information based on the user’s current location.

Features:
- City name detection
- Current temperature
- Weather condition
- Humidity
- Feels-like temperature
- 6-day forecast

---

## 2️⃣ Search Weather Page
Allows users to search weather information for any city.

Displayed data:
- Temperature
- Wind speed
- Pressure
- Humidity
- Sunrise & Sunset time

---

## 3️⃣ World Weather Page
Displays weather for multiple cities around the world.

Features:
- Add new city
- View city temperature
- Dynamic weather cards

Example cities displayed:
- London
- Paris
- New York
- Mumbai

---

# ⚙ Technologies Used

## Frontend
- HTML5 – Application structure
- CSS3 – Styling and responsive layout
- JavaScript (ES6) – Application logic

## APIs
- OpenWeatherMap API – Weather data provider
- Geolocation API – Detects user location

---

# 🏗 System Architecture

User  
↓  
Web Browser  
↓  
JavaScript (Fetch API)  
↓  
OpenWeatherMap API  
↓  
Weather Data (JSON)  
↓  
Dynamic UI Update  

---

# 📂 Project Structure

weather-app
│
├── index.html  
├── search.html  
├── world.html  
│
├── css  
│   ├── style.css  
│   ├── search.css  
│   └── world.css  
│
├── js  
│   ├── main.js  
│   ├── search.js  
│   └── world.js  
│
└── img  
    ├── sun.png  
    ├── cloud.png  
    ├── rain.png  
    ├── snow.png  
    ├── haze.png  
    ├── mist.png  
    └── thunderstorm.png  

---

# 🚀 Installation & Usage

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/weather-app.git

### 2️⃣ Navigate to the Project Folder

cd weather-app

### 3️⃣ Run the Application

Open the following file in your browser:

index.html

---

# ⚠ Challenges Faced

- Handling asynchronous API requests
- Dynamic DOM updates
- Managing weather icons for different conditions
- Responsive UI design for mobile devices

---

# 🔮 Future Improvements

Possible future enhancements include:

- Save cities using LocalStorage
- Add weather alerts
- Add interactive weather maps
- Convert the application into a Progressive Web App (PWA)

---

# 📚 Learning Outcomes

Through this project, the following concepts were practiced:

- REST API integration
- Fetch API & async/await
- DOM manipulation
- Responsive web design
- JSON data handling

---

# 📜 License

This project is developed for educational and learning purposes.