<template>
  <q-header elevated class="bg-white text-grey-8" height-hint="64">
    <q-toolbar class="GPL__toolbar" style="height: 64px">
      <q-btn
        flat
        dense
        round
        @click="store.turnaround()"
        aria-label="Menu"
        icon="menu"
        class="q-mx-md"
      />

      <q-toolbar-title
        v-if="$q.screen.gt.sm"
        shrink
        class="row items-center no-wrap"
      >
        <span class="q-ml-sm">Menu La</span>
      </q-toolbar-title>

      <q-space />

      <q-item
        v-for="link in links1"
        :key="link.text"
        clickable
        class="GPL__drawer-item"
        :to="link.ref"
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.text }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat color="text-grey-7" icon="apps">
          <q-tooltip>Google Apps</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="notifications">
          <q-badge color="red" text-color="white" floating> 2 </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn round flat>
          <q-label class="q-px-md"> Username Na Ja </q-label>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
  <!-- <div class="">
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
        <q-route-tab
          to="/table"
          color="purple-8"
          text-color="white"
          label="Table"
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
  </div> -->
</template>
<script>
import { defineComponent, reactive } from "vue";
import { useCounterStore } from "../stores/main";
import { useSecondStore } from "src/stores/secondstore";
export default defineComponent({
  setup() {
    const store = useCounterStore();
    const store2 = useSecondStore();

    return {
      store,
      store2,
      links1: [
        { icon: "photo", text: "Home", ref: "/" },
        { icon: "photo_album", text: "Weather", ref: "weather" },
        { icon: "assistant", text: "Table", ref: "table" },
      ],
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
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=" +
        process.env.API_KEY,
    })
      .then((res) => {
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
