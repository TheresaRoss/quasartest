<template>
  <div class="">
    <q-toolbar class="bg-secondary text-white q-py-md shadow-2">
      <q-btn
        flat
        round
        dense
        icon="menu"
        @click="store.turnaround()"
        class="q-mr-sm"
      />
      <q-tabs>
        <q-route-tab
          to="/"
          color="primary"
          text-color="black"
          label="Primary"
        />
        <q-route-tab
          to="/weather"
          color="purple-8"
          text-color="white"
          label="Weather"
        />
      </q-tabs>

      <q-space />
      <span class="q-mr-lg" style="font-size: 25px"
        >{{ weatherdata.name }}:</span
      >
      <q-badge
        :v-if="kelvinToCelsius(weatherdata.main.temp) != NaN"
        class="q-mr-lg q-px-lg q-py-md"
        rounded
        style="font-size: 25px; background: rgba(38, 198, 218, 0.7)"
        >{{ kelvinToCelsius(weatherdata.main.temp) }} C

        <q-icon class="q-ml-sm" name="light_mode"></q-icon>
      </q-badge>
    </q-toolbar>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { useCounterStore } from "../stores/main";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    return {
      store,
    };
  },
  name: "HeaderVue",
  data() {
    return {
      weatherdata: {
        main: {},
      },
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=64bdf86fff1f7e7fdf4bea88cbdd9f4d",
    })
      .then((res) => {
        console.log(res.data);
        this.weatherdata = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    kelvinToCelsius(kelvin) {
      return (kelvin - 273.15).toFixed(2);
    },
  },
  // Component options and logic
});
</script>
