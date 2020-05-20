<template>
<div>
    <div class="flex justify-center items-center">
        <h4 class="text-4xl mt-24" :style="{fontFamily: 'Tangerine'}">Already sent a request? Sign in and check the status of your request here.</h4>
    </div>
        <v-card>
            <v-card-title>
                <div>Requested by:</div>
                <p>{{ user.displayName }}</p>
            </v-card-title>
            <v-card-text>
                <v-list>
                    <v-subheader>
                Order Status:
                    </v-subheader>
                    <v-list-item v-for="requests in users" :key="requests.id" :to="`requests/${requests.email}`">
                    <v-list-item-content>
                        <v-list-item-title v-text="requests.status"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
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
                users: []
            }
        },
        computed: {
            ...mapGetters({
                user: "getUser"
            })
        },
        mounted()
        {
            this.bind()
        },
        methods: {
            async bind() {
                await this.$bind("users", db.collection("requests"))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>