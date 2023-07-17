<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <HeaderVue />
    <DrawerVue />
    <q-page-container class="GPL__page-container q-px-lg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { VueElement, defineComponent, ref } from "vue";
import { useCounterStore } from "./stores/main";
import HeaderVue from "./layouts/HeaderVue.vue";
import DrawerVue from "./layouts/DrawerVue.vue";
import localforage from "localforage";
export default defineComponent({
  name: "App",
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");

    const store = useCounterStore();

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      search,

      store,

      toggleLeftDrawer,
    };
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
