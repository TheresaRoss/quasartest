<template>
  <h3>Welcome To Table Page</h3>
  <div class="row flex-center">
    <div class="row col-10">
      <q-select
        class="col-10"
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
        class="q-ml-md q-py-lg col"
        label="Submit"
        padding="sm md"
        rounded
        color="primary"
        @click="searchweather"
      />
    </div>
  </div>
  <q-table
    class="q-mt-lg"
    title="Weather Information"
    :rows="data"
    :columns="columns"
    no-data-label="I didn't find anything for you"
    row-key="name"
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          style="font-size: 18px"
        >
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="dt" :props="props"> {{ props.row.dt_txt }} </q-td>
        <q-td key="temp" :props="props">
          <q-badge color="deep-purple-2 " text-color="black"
            >{{ props.row.temp }} &#8451;
          </q-badge>
        </q-td>
        <q-td key="feels_like" :props="props">
          <q-badge color="light-blue-2 " text-color="black">
            {{ props.row.feels_like }} &#8451;
          </q-badge>
        </q-td>
        <q-td key="temp_max" :props="props">
          <q-badge color="lime-11 " text-color="black"
            >{{ props.row.temp_max }} &#8451;
          </q-badge>
        </q-td>
        <q-td key="temp_min" :props="props">
          <q-badge color="orange-11 " text-color="black">
            {{ props.row.temp_min }} &#8451;
          </q-badge>
        </q-td>
        <q-td key="description" :props="props">
          <q-badge color="light-green-11 " text-color="black">
            {{ props.row.description }}
          </q-badge>
        </q-td>
      </q-tr>
    </template>
    <template v-slot:no-data="{ icon, message, filter }">
      <div class="full-width row flex-center text-accent q-gutter-sm">
        <q-icon size="3em" name="sentiment_dissatisfied" />
        <span style="font-size: 18px"> Well this is sad... {{ message }} </span>
        <q-icon size="3em" :name="filter ? 'filter_b_and_w' : icon" />
      </div>
    </template>
  </q-table>
  <apexchart
    width="1000"
    type="line"
    :options="optionsla"
    :series="series"
  ></apexchart>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TableNa",
  components: {},
  setup() {
    return {
      city: ref(null),

      options: ["Bangkok", "London", "Tokyo", "Berlin", "New York", "Auckland"],
    };
  },
  data() {
    return {
      optionsla: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
        },
        markers: {
          size: 7,
          colors: ["#f44336"],
        },
      },
      series: [
        {
          name: "temp",
          data: [],
        },
        {
          name: "feels_like",
          data: [],
        },
      ],
      weatherdata: {},
      columns: [
        { name: "dt", label: "Datetime", field: "dt_txt", align: "left" },
        {
          name: "temp",
          label: "Temperature",
          field: "temp",
        },
        {
          name: "feels_like",
          label: "Feels_like",
          field: "feels_like",
        },

        {
          name: "temp_max",
          label: "Maximum Temperature",
          field: "temp_max",
        },
        {
          name: "temp_min",
          label: "Minimum Temperature",
          field: "temp_min",
        },
        { name: "description", label: "Description", field: "description" },
      ],
      data: [],
    };
  },
  methods: {
    searchweather() {
      if (this.city == "") {
        return;
      }
      const urltosend =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        this.city +
        "&appid=" +
        process.env.API_KEY;
      this.$axios({
        method: "get",

        url: urltosend,
      })
        .then((res) => {
          console.log(res.data);
          if (this.data.length > 0) {
            this.data = [];
          }
          res.data.list.forEach((element) => {
            this.data.push({
              dt_txt: element.dt_txt,
              temp: this.kelvinToCelsius(element.main.temp),
              feels_like: this.kelvinToCelsius(element.main.feels_like),
              temp_min: this.kelvinToCelsius(element.main.temp_min),
              temp_max: this.kelvinToCelsius(element.main.temp_max),
              description: element.weather[0].description,
            });

            this.optionsla.xaxis.categories.push(element.dt);
            this.series[0].data.push(this.kelvinToCelsius(element.main.temp));
            this.series[1].data.push(
              this.kelvinToCelsius(element.main.feels_like)
            );
          });

          console.log(this.optionsla);
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
