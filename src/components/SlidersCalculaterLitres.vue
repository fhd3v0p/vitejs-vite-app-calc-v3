<template>
  <div class="sliders-container">
    <div class="slider-wrapper length-slider">
      <input
        type="range"
        v-model="length"
        min="0"
        max="50"
        class="slider"
        @input="updateSlider('length', $event)"
      />
      <div class="slider-label">{{ length }}</div>
    </div>
    <div class="slider-wrapper width-slider">
      <input
        type="range"
        v-model="width"
        min="0"
        max="50"
        class="slider"
        @input="updateSlider('width', $event)"
      />
      <div class="slider-label">{{ width }}</div>
    </div>
    <div class="slider-wrapper height-slider">
      <input
        type="range"
        v-model="height"
        min="0"
        max="50"
        class="slider"
        @input="updateSlider('height', $event)"
        style="transform: rotate(45deg);"
      />
      <div class="slider-label">{{ height }}</div>
    </div>
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

    const updateSlider = (type, event) => {
      switch (type) {
        case 'length':
          length.value = event.target.value;
          break;
        case 'width':
          width.value = event.target.value;
          break;
        case 'height':
          height.value = event.target.value;
          break;
      }
    };

    return {
      length,
      width,
      height,
      updateSlider
    };
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

.slider-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.length-slider .slider {
  width: 8px;
  height: 100px;
  background: rgba(234, 60, 83, 0.5);
  -webkit-appearance: none;
  appearance: none;
}

.width-slider .slider {
  width: 100px;
  height: 8px;
  background: rgba(255, 189, 156, 0.5);
  -webkit-appearance: none;
  appearance: none;
}

.height-slider .slider {
  width: 8px;
  height: 100px;
  background: rgba(245, 82, 61, 0.5);
  -webkit-appearance: none;
  appearance: none;
}

.slider::-webkit-slider-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #EA3C53; /* Change color for each slider using CSS classes */
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.width-slider .slider::-webkit-slider-thumb {
  background: #FFBD9C;
}

.height-slider .slider::-webkit-slider-thumb {
  background: #F5523D;
}

.slider-label {
  margin-top: 8px;
  font-size: 14px;
  color: #252525;
}
</style>
