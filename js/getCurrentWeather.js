const coordinatesRequest = new URLSearchParams(window.location.search);
const latitude = coordinatesRequest.get('lat');
const longitude = coordinatesRequest.get('lon');

const weatherPromise = Weather.fetchWeatherPromise(latitude, longitude);

async function main() {
    const result = await weatherPromise;
    const currentWeatherJSON = JSON.parse(result).current_weather;

    let currentWeather = Weather.createFromCurrentWeatherAPI(currentWeatherJSON); 

    $("#temperature").text(`${currentWeather.temperature} °C`);
    $("#temperature").css("background-color", getTemperatureColorCode(parseFloat(currentWeather.temperature)));

    $("#wind-speed").text(`${currentWeather.windSpeed} km/h`);
    $("#wind-direction").text(`${currentWeather.windDirection}°`);

    $("#weather-icon").attr("src", currentWeather.getWeatherIconLink());
}

function getTemperatureColorCode(temperature) {
    if (temperature >= 30) {
        return TemperatureColor.RED;
    } else if (temperature >= 25) {
        return TemperatureColor.ORANGE;
    } else if (temperature >= 20) {
        return TemperatureColor.YELLOW;
    } else if (temperature >= 15) {
        return TemperatureColor.GREEN;
    } else if (temperature >= 10) {
        return TemperatureColor.PURPLE;
    } else if (temperature >= 5) {
        return TemperatureColor.TEAL;
    } else if (temperature >= 0) {
        return TemperatureColor.LIGHT_BLUE;
    } else if (temperature >= -10) {
        return TemperatureColor.LIGHT_INDIGO;
    } else {
        return TemperatureColor.INDIGO;
    }
}

main();