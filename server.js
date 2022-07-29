require("dotenv").config();
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { json } = require("body-parser");
const { get } = require("http");
const { log } = require("console");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//weather api: https://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid=env.WEATHER_API

const fetchWeatherData = (city, res) => {
  const apiKey = process.env.WEATHER_API;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  https.get(url, function (response) {
    if (response.statusCode === 200) {
      response.on("data", function (data) {
        const json = JSON.parse(data);
        const temp = Math.floor(json.main.temp);
        const windSpeed = Math.floor(json.wind.speed);
        const humidity = json.main.humidity;
        const tempMax = Math.floor(json.main.temp_max);
        const tempMin = Math.floor(json.main.temp_min);
        const iconId = json.weather[0].icon;
        const city = json.name;
        res.render("index", {
          temp: temp,
          windSpeed: windSpeed,
          humidity: humidity,
          tempMax: tempMax,
          tempMin: tempMin,
          iconId: iconId,
          cityName: city,
        });
      });
    } else {
      response.on("data", function (data) {
        const json = JSON.parse(data);
        const message = json.message;
        if (message == "city not found" || city == "") {
          res.render("pageNotFound", {
            message: "The entered location is not valid !!",
          });
        } else {
          res.render("pageNotFound", {
            message: "Unknown error occurred!!",
          });
        }
      });
    }
  });
};

app.get("/", (req, res) => {
  fetchWeatherData("London", res);
});

app.get("*", (req, res) => {
  res.render("pageNotFound", { message: "Page not found" });
});

app.post("/", (req, res) => {
  const location = req.body.city;
  fetchWeatherData(location, res);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started");
});
