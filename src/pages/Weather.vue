<template>
  <h1>Welcome To Weather Page</h1>
  <div class="q-pa-md q-gutter-md"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherNa",
  mounted() {
    this.$axios({
      method: "get",
      url: "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=64bdf86fff1f7e7fdf4bea88cbdd9f4d",
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
</script>
