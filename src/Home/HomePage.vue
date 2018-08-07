<template>
  <div class="home">
    <img class="robot" src="../assets/robot-home.png" aria-hidden="true"/>
    <div class="getStarted">
      <router-link to="/build">Get Started</router-link> building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

 <style scoped>
  .home{
    text-align: center;
  }
  .robot{
    height: 300px;
  }
</style>
