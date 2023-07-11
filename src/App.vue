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
import { defineComponent } from "vue";
import { useCounterStore } from "./stores/main";
import HeaderVue from "./layouts/HeaderVue.vue";
import DrawerVue from "./layouts/DrawerVue.vue";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
  components: {
    HeaderVue,
    DrawerVue,
  },
});
</script>
