import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    opened: false,
  }),

  getters: {
    doubleCount(state) {
      return state.counter + 1;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    turnaround() {
      this.opened = !this.opened;
      console.log(this.opened);
    },
  },
});
