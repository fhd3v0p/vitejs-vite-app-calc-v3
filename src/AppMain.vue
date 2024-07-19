<!-- src/AppMain.vue -->
<template>
  <div class="app-main">
    <MainFon />
    <MainMenuButton />
    <MenuVes />
    <MenuLitr />
    <ResultPriceBox />
    <BoxSlider />
  </div>
</template>

<script>
import MainFon from './components/MainFon.vue';
import MainMenuButton from './components/MainMenuButton.vue';
import MenuVes from './components/MenuVes.vue';
import MenuLitr from './components/MenuLitr.vue';
import ResultPriceBox from './components/ResultPriceBox.vue';
import BoxSlider from './components/BoxSlider.vue';

export default {
  name: 'AppMain',
  components: {
    MainFon,
    MainMenuButton,
    MenuVes,
    MenuLitr,
    ResultPriceBox,
    BoxSlider
  }
};
</script>

<style>
.app-main {
  position: relative;
  width: 398px;
  height: 591px;
  margin: 0 auto;
  overflow: hidden;
  background: #1B1B1B; /* Темный фон */
}
</style>
