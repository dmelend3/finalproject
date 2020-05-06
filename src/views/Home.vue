<template>
  <div class="mx-auto mt-6 justify-center flex">
    <slider v-bind="setting" />
  </div>
</template>

<script>
import slider from "vue-image-scroll";

export default {
  name: "Home",
  components: {
    slider
  },
  data: function() {
    return {
      setting: {
        width: "500",
        image: ["diamond.jpg", "sapphire.jpg", "pearl.jpg"],
        autoRoll: false
      }
    };
  }
};
</script>
