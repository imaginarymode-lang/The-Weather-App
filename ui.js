const statusMessage = document.getElementById("status-message");
const locationName = document.getElementById("location-name");
const tempCondition = document.getElementById("temp-condition");
const dateSeason = document.getElementById("date-season");

export function showWeatherData(weather, currentUnit) {
  const unitSymbol = currentUnit === "metric" ? "°C" : "°F";

  statusMessage.textContent = "";
  locationName.textContent = weather.address;
  tempCondition.textContent = `${weather.temp} ${unitSymbol} — ${weather.condition}`;
  dateSeason.textContent = `Date: ${weather.date} | Season: ${weather.season}`;

  document.body.classList.remove("winter", "spring", "summer", "autumn");
  document.body.classList.add(weather.season);
}
export function showDataProcess(rawData) {
  const dateObj = new Date(rawData.days[0].datetime);
  const month = dateObj.getMonth();
  const isNorthern = rawData.latitude >= 0;

  let season = "";

  switch (month) {
    case 11:
    case 0:
    case 1:
      season = "winter";
      break;
    case 2:
    case 3:
    case 4:
      season = "spring";
      break;
    case 5:
    case 6:
    case 7:
      season = "summer";
      break;
    case 8:
    case 9:
    case 10:
      season = "autumn";
      break;
  }
  if (!isNorthern) {
    const oppositeSeasons = {
      winter: "summer",
      spring: "autumn",
      summer: "winter",
      autumn: "spring",
    };
    season = oppositeSeasons[season];
  }

  return {
    temp: rawData.currentConditions.temp,
    condition: rawData.currentConditions.conditions,
    address: rawData.resolvedAddress,
    date: rawData.days[0].datetime,
    season: season,
  };
}
