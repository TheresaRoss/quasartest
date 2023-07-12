import { defineStore } from "pinia";

export const useSecondStore = defineStore("counter2", {
  state: () => ({
    counter: 999,
    opened: false,
  }),

  getters: {
    doubleCount(state) {
      return state.counter + 2;
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
