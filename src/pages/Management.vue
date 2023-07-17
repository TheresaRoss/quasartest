<template>
  <h3>Welcome To Management Page</h3>
  <q-table
    class="q-mt-lg"
    title="Employee Information"
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

    <template v-slot:no-data="{ icon, message, filter }">
      <div class="full-width row flex-center text-accent q-gutter-sm">
        <q-icon size="3em" name="sentiment_dissatisfied" />
        <span style="font-size: 18px"> Well this is sad... {{ message }} </span>
        <q-icon size="3em" :name="filter ? 'filter_b_and_w' : icon" />
      </div>
    </template>
  </q-table>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ManagementNa",
  components: {},
  setup() {
    return {
      data: [
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
        {
          name: "John",
          role: "worker",
          age: "20",
          salary: "19.99",
          yearin: "5",
        },
      ],
      columns: [
        { name: "name", label: "Name", field: "name" },
        { name: "role", label: "Role", field: "role" },
        { name: "age", label: "Age", field: "age" },
        { name: "salary", label: "Salary", field: "salary" },
        {
          name: "yearin",
          label: "Year(s) in service",
          field: "yearin",
          align: "center",
        },
      ],
    };
  },
  data() {
    return {};
  },
});
</script>
