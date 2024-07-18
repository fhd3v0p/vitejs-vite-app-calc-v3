<!-- src/AppMain.vue -->
<template>
  <div id="app">
    <MainFon />
    <MainMenuButton />
    <MenuVes />
    <MenuLitr />
    <ResultPriceBox /> <!-- Добавляем новый компонент -->
  </div>
</template>

<script>
import MainFon from './components/MainFon.vue';
import MainMenuButton from './components/MainMenuButton.vue';
import MenuVes from './components/MenuVes.vue';
import MenuLitr from './components/MenuLitr.vue';
import ResultPriceBox from './components/ResultPriceBox.vue'; // Импортируем новый компонент

export default {
  name: 'AppMain',
  components: {
    MainFon,
    MainMenuButton,
    MenuVes,
    MenuLitr,
    ResultPriceBox  // Регистрируем новый компонент
  }
};
</script>

<style src="./styles.css"></style>
