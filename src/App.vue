<template>
  <HeaderVue />
  <q-layout
    view="hHh Lpr lff"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <DrawerVue />
    <div class="q-mx-lg">
      <router-view />
    </div>
  </q-layout>
</template>

<script>
import { VueElement, defineComponent } from "vue";
import { useCounterStore } from "./stores/main";
import HeaderVue from "./layouts/HeaderVue.vue";
import DrawerVue from "./layouts/DrawerVue.vue";
import localforage from "localforage";
export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
  created() {
    localforage
      .setItem("man", 55555)
      .then(() => {
        console.log("Data set successfully");
      })
      .catch((error) => {
        console.error("Error setting data:", error);
      });
  },
  components: {
    HeaderVue,
    DrawerVue,
  },
});
</script>
