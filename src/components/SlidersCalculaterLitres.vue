<template>
  <div class="sliders-container">
    <div class="slider-wrapper length-slider">
      <svg
        width="140"
        height="28"
        viewBox="0 0 140 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M137 14L3 14"
          stroke="#FFBD9C"
          stroke-opacity="0.5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="10 10" />
        <path
          d="M46.3334 14C46.3334 6.6362 40.3638 0.666667 33 0.666667C25.6362 0.666667 19.6667 6.6362 19.6667 14C19.6667 21.3638 25.6362 27.3333 33 27.3333C40.3638 27.3333 46.3334 21.3638 46.3334 14ZM3.00003 11.5C1.61932 11.5 0.500031 12.6193 0.500031 14C0.500031 15.3807 1.61932 16.5 3.00003 16.5L3.00003 11.5ZM33 11.5L3.00003 11.5L3.00003 16.5L33 16.5V11.5Z"
          fill="#FF7B39" />
      </svg>
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
        style="transform: rotate(45deg); transform-origin: left bottom;"
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
  z-index: 11; /* Устанавливаем высокий z-index для контейнера */
}

.slider-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.length-slider {
  left: 14px; /* начальная точка */
  top: 39px; /* отступ сверху от верхнего края */
}

.width-slider {
  left: 14px; /* начальная точка */
  top: 52px; /* начальная точка */
}

.height-slider {
  left: 39px; /* начальная точка */
  top: 40px; /* начальная точка */
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
  transform: rotate(45deg);
  transform-origin: left bottom;
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
