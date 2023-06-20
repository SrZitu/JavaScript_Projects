
let weather = {
  apiKey: "a2f6e8d56e32c8e64914535a312df769",
  fetchWeather: function (city) {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
      .then((response) => {
        if (!response.data) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.data;
      })
      .then((data) => this.displayWeather(data))
      .catch((error) => {
        console.error(error);
        alert("Failed to fetch weather data.");
      });
  },
  displayWeather: function (wheatherData) {
    const { name } = wheatherData;
    const { icon, description } = wheatherData.weather[0];
    const { temp, humidity, feels_like } = wheatherData.main;
    const { speed } = wheatherData.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°C";
    document.querySelector(".feels_like").innerText =
      "Feels like  " + Math.round(feels_like) + "°C";

    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
 
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup",  (event)=> {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("sylhet");

