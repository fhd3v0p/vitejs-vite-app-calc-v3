<!-- src/AppMain.vue -->
<template>
  <div id="app-main">
    <MainFon />
    <MainMenuButton />
    <MenuVes />
  </div>
</template>

<script>
import MainFon from './components/MainFon.vue'
import MainMenuButton from './components/MainMenuButton.vue'
import MenuVes from './components/MenuVes.vue'

export default {
  name: 'AppMain',
  components: {
    MainFon,
    MainMenuButton,
    MenuVes
  }
}
</script>

<style src="./styles.css"></style>
