<!-- src/AppMain.vue -->
<template>
    <div class="container">
      <MainFon />
      <MainMenuButton />
    </div>
  </template>
  
  <script>
  import MainFon from './components/MainFon.vue';
  import MainMenuButton from './components/MainMenuButton.vue';
  
  export default {
    components: {
      MainFon,
      MainMenuButton
    }
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 398px; /* Ширина контейнера */
    height: 591px; /* Высота контейнера */
  }
  </style>
  