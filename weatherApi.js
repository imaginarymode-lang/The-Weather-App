export async function getApiWeather(cityname, unit) {
  const respone = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}?unitGroup=${unit}&key=RVG8XH6EDAELRNBSG5SZ2AUY9`,
  );
  const data = await respone.json();

  return data;
}
