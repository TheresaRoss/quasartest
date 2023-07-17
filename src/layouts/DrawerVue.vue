<template>
  <q-drawer
    v-model="store.opened"
    bordered
    behavior="mobile"
    @click="leftDrawerOpen = false"
  >
    <q-scroll-area class="fit">
      <q-toolbar class="GPL__toolbar">
        <q-toolbar-title class="row items-center text-grey-8">
          <span class="q-ml-sm">Sidebar Menu</span>
        </q-toolbar-title>
      </q-toolbar>

      <q-list padding>
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

        <q-separator class="q-my-md" />

        <q-item
          v-for="link in links2"
          :key="link.text"
          clickable
          class="GPL__drawer-item"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item
          v-for="link in links3"
          :key="link.text"
          clickable
          class="GPL__drawer-item"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <!-- <q-drawer
    v-model="store.opened"
    :width="200"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer> -->
</template>
<script>
import { defineComponent } from "vue";
import { useCounterStore } from "../stores/main";

import { ref } from "vue";

const menuList = [
  {
    icon: "inbox",
    label: "Inbox",
    separator: true,
  },
  {
    icon: "send",
    label: "Outbox",
    separator: false,
  },
  {
    icon: "delete",
    label: "Trash",
    separator: false,
  },
  {
    icon: "error",
    label: "Spam",
    separator: true,
  },
  {
    icon: "settings",
    label: "Settings",
    separator: false,
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    separator: false,
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    separator: false,
  },
];
export default defineComponent({
  name: "App",
  setup() {
    const store = useCounterStore();
    return {
      drawer: ref(true),
      menuList,
      store,

      links1: [
        { icon: "photo", text: "Home", ref: "/" },
        { icon: "photo_album", text: "Weather", ref: "weather" },
        { icon: "assistant", text: "Table", ref: "table" },
        { icon: "people", text: "Team Management", ref: "/management" },
      ],
      links2: [
        { icon: "archive", text: "Archive", ref: "/" },
        { icon: "delete", text: "Trash", ref: "/" },
      ],
      links3: [
        { icon: "settings", text: "Settings", ref: "/" },
        { icon: "help", text: "Help & Feedback", ref: "/" },
        { icon: "get_app", text: "App Downloads", ref: "/" },
      ],
      createMenu: [
        { icon: "photo_album", text: "Album" },
        { icon: "people", text: "Shared Album" },
        { icon: "movie", text: "Movie" },
        { icon: "library_books", text: "Animation" },
        { icon: "dashboard", text: "Collage" },
        { icon: "book", text: "Photo book" },
      ],
    };
  },
});
</script>
