<!-- src/AppMain.vue -->
<template>
  <div class="app-main">
    <MainFon />
    <MainMenuButton />
    <MenuVes />
    <MenuLitr />
    <ResultPriceBox />
    <BoxSliders />
  </div>
</template>

<script>
import MainFon from './components/MainFon.vue';
import MainMenuButton from './components/MainMenuButton.vue';
import MenuVes from './components/MenuVes.vue';
import MenuLitr from './components/MenuLitr.vue';
import ResultPriceBox from './components/ResultPriceBox.vue';
import BoxSliders from './components/BoxSliders.vue';

export default {
  name: 'AppMain',
  components: {
    MainFon,
    MainMenuButton,
    MenuVes,
    MenuLitr,
    ResultPriceBox,
    BoxSliders
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
