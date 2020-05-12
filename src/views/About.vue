<template>
<div>
  <div class="wel">WELCOME</div>
  <div class="about">Here at Mel's Designs, we strive to find the perfect product you need, for any occasion</div>
  <div class="my-auto mx-auto">
    <img src="../assets/couple.jpg" alt />
  </div>
</div>
</template>

<script>

  export default {
    name: "About"
  }
</script>

<style lang="scss" scoped>
.wel{
  font-family: "Tangerine";
  border-bottom: 2px solid;
  border-bottom-color: gold;
  margin-top: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
}
.about{
  font-family: "Tangerine";
  color: white;
  -webkit-text-stroke: 1px black;
  margin-top: 5ex; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  background-image: url(../assets/aboutimg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
}
</style>