<template>
<div>
  <div class="backgroundImage" :style="`background-image:url(${bgImage})`">
    <div class="mx-auto mt-20 justify-center flex">
      <slider v-bind="setting" />
    </div>
  </div>
  <div class="w-33%" :style="`background-image:url(${diamond2}) `">
  </div>
    <h1 class="my-4 flex justify-center items-center text-2xl">Sign up to request a quote today!</h1>
    <router-link class="justify-center items-center flex bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded" to="/login">Sign up</router-link>
</div>
</template>

<script>  
import slider from "vue-image-scroll";
import bgImage from "../assets/bg.jpg";
import diamond2 from "../assets/diamond2.jpg";

export default {
  name: "Home",
  components: {
    slider
  },
  data: function() {
    return {
      bgImage,
      diamond2,
      setting: {
        width: "500",
        image: ["diamond.jpg", "sapphire.jpg", "pearl.jpg"],
        autoRoll: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.backgroundImage{
  justify-content: center;
  display: flex;
  margin: auto;
 // margin-top: 60px;
  background-size: 100%;
  height: 500px;
  width: 100%;
}
</style>
