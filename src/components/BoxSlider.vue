<!-- src/components/BoxSlider.vue -->
<template>
    <div class="bg-container">
      <CalculaterLitres class="calculator-position" />
      <SlidersCalculaterLitres class="slider-position" />
    </div>
  </template>
  
  <script>
  import CalculaterLitres from './CalculaterLitres.vue';
  import SlidersCalculaterLitres from './SlidersCalculaterLitres.vue';
  
  export default {
    name: 'BoxSlider',
    components: {
      CalculaterLitres,
      SlidersCalculaterLitres,
    },
  }
  </script>
  
  <style scoped>
  .bg-container {
    background-color: #FFFFFF;
    border-radius: 30px;
    width: 372px; /* Ширина контейнера */
    height: 223px; /* Высота контейнера */
    position: absolute;
    top: 344px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10; /* Установим высокий z-index */
  }
  .calculator-position {
    position: relative;
    top: 10px;
    left: 17px;
  }
  .slider-position {
    position: absolute;
    top: 39px;
    right: 22px;
  }
  </style>
  