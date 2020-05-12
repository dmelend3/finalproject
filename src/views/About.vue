<template>
<div>
  <div class="wel">WELCOME</div>
  <div class="about">Here at Mel's Designs, we strive to find the perfect product you need, for any occasion</div>
  <h1 class="see">See the gallery of our satisfied customers!</h1>
  <div class="gallery">
    <img src="../assets/couple.jpg" alt />
    <img src="../assets/couple2.jpg" alt />
    <img src="../assets/couple3.jpg" alt />
    <img src="../assets/couple4.jpg" alt />
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
.see{
  font-family: "Tangerine";
  color: white;
  -webkit-text-stroke: 1px black;
  margin-top: 5ex; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}
.gallery{
  display: flex;
  width: 25%;
  padding: 5px;
}
</style>