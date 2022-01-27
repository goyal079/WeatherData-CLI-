import axios from "axios";
import { question } from "readline-sync";

async function getWeather(cityname) {
  try {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=a426dd50b8b4887bd4328c35f555359f`
    );
    let data = res.data;
    let report = `Below is the weather report for conditions recorded in ${cityname}\nTemperature: ${
      data.main.temp
    }\xB0C\n  Max: ${data.main.temp_max}\xB0C\n  Min: ${
      data.main.temp_min
    }\xB0C\nVisibility: ${data.visibility / 1000} kM\nAtmospheric Pressure: ${
      data.main.pressure
    } hPa\nHumidity: ${data.main.humidity}%\nWind:\n  Speed: ${
      data.wind.speed
    } m/s\n  Direction: ${data.wind.deg}\xB0`;
    return report;
  } catch (err) {
    console.error(err);
  }
}

let city = question("Enter city name to get it's weather report:");
let report = await getWeather(city);
console.log(report);
