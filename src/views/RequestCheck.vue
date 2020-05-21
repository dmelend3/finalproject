<template>
  <div>
    <div class="flex justify-center items-center">
      <h4 class="text-4xl mt-24" :style="{ fontFamily: 'Tangerine' }">
        Already sent a request? Sign in and check the status of your request
        here.
      </h4>
    </div>
    <div class="mx-auto">
      <v-card>
        <v-card-title class="flex justify-center">
          <div>Requested by: {{ user.displayName }}</div>
        </v-card-title>
        <v-card-text v-for="requests in userobj" :key="requests.user.email">
          <v-list class="flex justify-center">
            <v-subheader class="orders pr-2">Order Status: {{ requests.status }}</v-subheader>
            <v-subheader class="orders mt-48px">Options: {{ requests.options }}</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { db } from "../plugins/firebase";

export default {
  name: "RequestCheck",
  data() {
    return {
      request: "",
      userobj: {}
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  mounted() {
    this.bind();
  },
  methods: {
    async bind() {
      await this.$bind(
        "userobj",
        db.collection("requests").where("user.email", "==", this.user.email)
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
