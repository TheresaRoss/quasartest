<template>
  <h3>Welcome To Weather Page</h3>

  <q-card class="my-card" style="max-width: 90vw" flat bordered>
    <q-img src="mountainbg.jpg" fit="cover" style="max-height: 300px">
      <div
        style="height: 100vh; width: 30vw; background: rgba(0, 0, 0, 0.27)"
        class="absolute-top-right text-subtitle1 text-right"
      >
        <h3
          v-if="kelvinToCelsius(weatherdata.main.temp)"
          class="q-mt-sm q-mb-lg"
        >
          {{ weatherdata.name }}, {{ weatherdata.sys.country }}
        </h3>

        <h5
          v-if="kelvinToCelsius(weatherdata.main.temp)"
          class="q-mt-sm q-mb-md"
        >
          <q-icon
            size="lg"
            left
            :color="weathersym.color"
            style="justify-content: start"
            :name="weathersym.name"
          />

          {{ kelvinToCelsius(weatherdata.main.temp) }} &#8451;
        </h5>
        <h5 v-if="kelvinToCelsius(weatherdata.main.temp)" class="q-mt-sm">
          <q-icon
            size="lg"
            style="justify-content: start"
            left
            name="device_thermostat"
          />

          {{ kelvinToCelsius(weatherdata.main.feels_like) }} &#8451;
        </h5>
      </div>
    </q-img>

    <q-card-actions align="left">
      <q-select
        style="width: 30vw"
        rounded
        standout
        v-model="city"
        outlined
        :options="options"
        label="Choose City"
        label-color="black"
        stack-label
        color="red"
        input-class="q-ml-lg"
      />
      <q-btn
        class="q-ml-md q-py-lg"
        label="Submit"
        padding="sm md"
        rounded
        color="primary"
        @click="searchweather"
      />
      <q-space />
      <q-btn flat round color="red" icon="favorite" />
      <q-btn flat round color="teal" icon="bookmark" />
      <q-btn flat round color="primary" icon="share" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WeatherNa",
  setup() {
    return {
      city: ref(null),

      options: ["Bangkok", "London", "Tokyo", "Berlin", "New York", "Auckland"],
    };
  },
  data() {
    return {
      weatherdata: {
        main: {},
        sys: {},
        weather: {},
      },
      weathersym: {
        name: "",
        color: "",
      },
    };
  },
  methods: {
    searchweather() {
      if (this.city == "") {
        return;
      }
      const urltosend =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.city +
        "&appid=" +
        process.env.API_KEY;
      this.$axios({
        method: "get",

        url: urltosend,
      })
        .then((res) => {
          console.log(res.data);
          this.weatherdata = res.data;
          this.weatherCodeToIcon(res.data.weather[0].id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    kelvinToCelsius(kelvin) {
      if (kelvin) {
        return (kelvin - 273.15).toFixed(2);
      } else {
        return false;
      }
    },
    weatherCodeToIcon(code) {
      const result = Math.floor(code / 100);
      console.log(result);
      switch (result) {
        case 2:
          this.weathersym.name = "thunderstorm";
          this.weathersym.color = "grey-8";
          return;
        case 3:
          this.weathersym.name = "rainy_light";
          this.weathersym.color = "blue-6";
          return;
        case 5:
          this.weathersym.name = "rainy";
          this.weathersym.color = "blue-9";
          return;
        case 6:
          this.weathersym.name = " weather_snowy";
          this.weathersym.color = "white";
          return;

        case 8:
          if (code == 800) {
            this.weathersym.name = " sunny";
            this.weathersym.color = "yellow";
          } else {
            this.weathersym.name = "cloudy";
            this.weathersym.color = "grey-6";
          }
          return;
        default:
          return;
      }
    },
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
