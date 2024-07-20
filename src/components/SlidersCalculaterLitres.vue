<template>
  <div class="sliders-container">
    <q-slider
      v-model="length"
      :min="0"
      :max="50"
      color="#EA3C53"
      track-color="rgba(234, 60, 83, 0.5)"
      thumb-color="#EA3C53"
      label
      label-always
      vertical
      class="length-slider"
    />
    <q-slider
      v-model="width"
      :min="0"
      :max="50"
      color="#FFBD9C"
      track-color="rgba(255, 189, 156, 0.5)"
      thumb-color="#FFBD9C"
      label
      label-always
      class="width-slider"
    />
    <q-slider
      v-model="height"
      :min="0"
      :max="50"
      color="#F5523D"
      track-color="rgba(245, 82, 61, 0.5)"
      thumb-color="#F5523D"
      label
      label-always
      class="height-slider"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SlidersCalculaterLitres',
  setup() {
    const length = ref(0);
    const width = ref(0);
    const height = ref(0);

    return {
      length,
      width,
      height
    }
  }
}
</script>

<style scoped>
.sliders-container {
  position: relative;
  width: 151px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  z-index: 11; /* Устанавливаем высокий z-index для контейнера */
}

.length-slider {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: 52px;
  margin-bottom: 3px;
  z-index: 12; /* Устанавливаем высокий z-index для видимости */
}

.width-slider {
  position: absolute;
  left: 14px;
  right: 0;
  margin-left: 14px;
  z-index: 12; /* Устанавливаем высокий z-index для видимости */
}

.height-slider {
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  margin-left: 25px;
  margin-top: 52px;
  margin-bottom: 3px;
  transform: rotate(45deg);
  z-index: 12; /* Устанавливаем высокий z-index для видимости */
}
</style>
