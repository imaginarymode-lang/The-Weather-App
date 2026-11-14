import { getApiWeather } from "./weatherApi.js";
import { showDataProcess, showWeatherData } from "./ui.js";

const cityInput = document.getElementById("city-input");
const form = document.getElementById("city");
const toggleBtn = document.getElementById("unit-toggle");
let currentUnit = "metric";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const value = cityInput.value.trim();
  if (value) {
    const rawData = await getApiWeather(value, currentUnit);
    const cleanData = showDataProcess(rawData);
    showWeatherData(cleanData, currentUnit);
  }
});

toggleBtn.addEventListener("click", async () => {
  currentUnit = currentUnit === "metric" ? "us" : "metric";
  const currentCity = cityInput.value.trim();

  if (currentCity) {
    const rawData = await getApiWeather(currentCity, currentUnit);
    const cleanData = showDataProcess(rawData);
    showWeatherData(cleanData);
  }
});
