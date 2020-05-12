<template>
  <div id="app">
    <div class="text-2xl text-center">
    <h4>Find a store near you</h4>
    </div>
    <google-map />
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";

export default {
  name: "Stores",
  components: {
    GoogleMap
  }
};
</script>