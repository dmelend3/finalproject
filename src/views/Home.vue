<template>
  <div>
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
        image: ["diamond.jpg", "sapphire.jpg", "pearl.jpg"],
        autoRoll: false
      }
    };
  }
};
</script>
