const weatherDisplay = document.getElementById("weather-display");

export function showWeatherData(weather, currentUnit) {
  const unitSymbol = currentUnit === "metric" ? "°C" : "°F";
  weatherDisplay.textContent = `Temperature: ${weather.temp} ${unitSymbol} in ${weather.address}`;
}

export function showDataProcess(rawData) {
  return {
    temp: rawData.currentConditions.temp,
    condition: rawData.currentConditions.conditions,
    address: rawData.resolvedAddress,
  };
}
