<template>
  <h1>Welcome</h1>
  <q-btn @click="testAPIcall" color="cyan-10">Click ME!!</q-btn>
  <div class="q-pa-md q-gutter-md">
    <q-badge
      rounded
      color="pink-5"
      size="m"
      :label="labelna"
      style="height: 50px; width: 50px"
    />
    <q-badge rounded color="primary" label="999+" />
    <q-badge rounded color="orange" label="Round" />
  </div>

  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="mail" label="On Left" />
    <q-btn color="secondary" icon-right="mail" label="On Right" />
    <q-btn
      color="red"
      icon="mail"
      icon-right="send"
      label="On Left and Right"
    />
    <br />
    <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card bg-purple text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card
      flat
      bordered
      class="my-card"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
    >
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Our Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Send Feedback</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Share</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section> </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestNa",
  data() {
    return {
      labelna: 20,
    };
  },
  methods: {
    testAPIcall() {
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
  },
});
</script>
