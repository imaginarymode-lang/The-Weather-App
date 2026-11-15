import { getApiWeather } from "./weatherApi.js";
import { showDataProcess, showWeatherData } from "./ui.js";

const cityInput = document.getElementById("city-input");
const form = document.getElementById("city");
const toggleBtn = document.getElementById("unit-toggle");
const statusMessage = document.getElementById("status-message");
const locationName = document.getElementById("location-name");
const tempCondition = document.getElementById("temp-condition");
const dateSeason = document.getElementById("date-season");
let currentUnit = "metric";

function showLoading(message) {
  locationName.textContent = "";
  tempCondition.textContent = "";
  dateSeason.textContent = "";
  statusMessage.textContent = message;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const value = cityInput.value.trim();
  if (value) {
    showLoading("Loading weather data...");
    try {
      const rawData = await getApiWeather(value, currentUnit);
      const cleanData = showDataProcess(rawData);
      statusMessage.textContent = "";
      showWeatherData(cleanData, currentUnit);
    } catch (error) {
      showLoading("Error fetching weather. Please check the city name.");
    }
  }
});

toggleBtn.addEventListener("click", async () => {
  currentUnit = currentUnit === "metric" ? "us" : "metric";
  const currentCity = cityInput.value.trim();

  if (currentCity) {
    showLoading("Updating units...");
    try {
      const rawData = await getApiWeather(currentCity, currentUnit);
      const cleanData = showDataProcess(rawData);
      statusMessage.textContent = "";
      showWeatherData(cleanData, currentUnit);
    } catch (error) {
      showLoading("Error updating units.");
    }
  }
});
