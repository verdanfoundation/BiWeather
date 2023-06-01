var CurrentWeatherJSON = "s";

class Weather {
    constructor(unixTimestamp, isDay, temperature, relativeTemperature, dewpoint, apparentTemperature,
        precipitationProbability, rain, weatherCode, surfacePressure, cloudcover,
        visibility, windSpeed, windDirection, windGusts, soilTemperature, soilMoisture) {
            this.unixTimestamp = unixTimestamp;
            this.isDay = isDay;
            this.temperature = temperature;
            this.relativeTemperature = relativeTemperature;
            this.dewpoint = dewpoint;
            this.apparentTemperature = apparentTemperature;
            this.precipitationProbability = precipitationProbability;
            this.rain = rain;
            this.weatherCode = weatherCode;
            this.surfacePressure = surfacePressure;
            this.cloudcover = cloudcover;
            this.visibility = visibility;
            this.windSpeed = windSpeed;
            this.windDirection = windDirection;
            this.windGusts = windGusts;
            this.soilTemperature = soilTemperature;
            this.soilMoisture = soilMoisture;
    }

    

    static createFromCurrentWeatherAPI(currentWeatherJSON) {
        return new Weather(currentWeatherJSON.time, currentWeatherJSON.is_day,
            currentWeatherJSON.temperature, null, null, null, null, null,
            currentWeatherJSON.weathercode, null, null, null, currentWeatherJSON.windspeed,
            currentWeatherJSON.winddirection, null, null, null);
    }

    getWeatherIconLink() {
        return `ico/weather/${this.weatherCode}_${this.isDay}.png`;
    }

    static async fetchWeatherPromise(lat, lon) {
        const requestLink = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,rain,weathercode,surface_pressure,cloudcover,visibility,windspeed_10m,winddirection_10m,windgusts_10m,soil_temperature_0cm,soil_moisture_0_1cm,uv_index,is_day&current_weather=true&timeformat=unixtime&forecast_days=16`;

        const requestResult = await fetch(requestLink);
        const response = await requestResult.text();
        return response;
    }
}