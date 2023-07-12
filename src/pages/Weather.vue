<template>
  <h3>Welcome To Weather Page</h3>

  <q-card class="my-card" style="max-width: 90vw" flat bordered>
    <q-img src="mountainbg.jpg" fit="cover" style="max-height: 300px">
      <div
        style="height: 100vh; width: 20vw; background: rgba(0, 0, 0, 0.27)"
        class="absolute-top-right text-subtitle1 text-right"
      >
        <h3 class="q-mt-sm q-mb-lg">{{ weatherdata.name }}</h3>

        <h5 v-if="kelvinToCelsius(weatherdata.main.temp)" class="q-mt-sm">
          <q-icon size="lg" color="yellow" left name="light_mode" />

          {{ kelvinToCelsius(weatherdata.main.temp) }} &#8451;
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

      options: ["Bangkok", "London", "Tokyo", "Berlin", "New York"],
    };
  },
  data() {
    return {
      weatherdata: {
        main: {},
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
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
