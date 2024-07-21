<template>
  <div class="container">
    <div class="box">
      <!-- Горизонтальный слайдер -->
      <div class="slider-wrapper horizontal">
        <input
          type="range"
          v-model="length"
          min="0"
          max="50"
          step="1"
          class="slider slider-red"
        />
        <label>{{ length }}</label>
      </div>
      <!-- Вертикальный слайдер -->
      <div class="slider-wrapper vertical">
        <input
          type="range"
          v-model="width"
          min="0"
          max="50"
          step="1"
          class="slider slider-green vertical-slider"
        />
        <label>{{ width }}</label>
      </div>
      <!-- Диагональный слайдер -->
      <div class="slider-wrapper diagonal">
        <input
          type="range"
          v-model="height"
          min="0"
          max="50"
          step="1"
          class="slider slider-yellow"
          style="transform: rotate(45deg);"
        />
        <label>{{ height }}</label>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
  setup() {
    const length = ref(0);
    const width = ref(0);
    const height = ref(0);
  
    return {
      length,
      width,
      height
    };
  }
  };
  </script>
  
  <style scoped>
  
  
  /* Бокс, содержащий все слайдеры */
  .box {
    width: 150px; /* Ширина бокса */
    height: 150px; /* Высота бокса */
    position: relative; /* Для позиционирования дочерних элементов */
    display: flex;
    justify-content: center; /* Центрирование содержимого по горизонтали */
    align-items: center; /* Центрирование содержимого по вертикали */
    border: 1px solid #ccc; /* Граница бокса */
  }
  
  /* Общие стили для оберток слайдеров */
  .slider-wrapper {
    position: absolute; /* Абсолютное позиционирование внутри бокса */
  }
  
  /* Стили для горизонтального слайдера */
  .horizontal {
    width: 140px; /* Ширина слайдера */
    top: 10px; /* Отступ сверху */
  }
  
  /* Стили для вертикального слайдера */
  .vertical {
    height: 140px; /* Высота слайдера */
    left: 10px; /* Отступ слева */
    bottom: 100px; /* Отступ снизу */
    top: 20px; /* Отступ сверху */
  }
  
  /* Стили для вертикального слайдера с использованием вертикального режима */
  .vertical-slider {
    transform: rotate(135deg);
    writing-mode: bt-lr; /* Вертикальное письмо */
    -webkit-appearance: slider-vertical; /* Внешний вид вертикального слайдера */
    height: 140px; /* Высота слайдера */
    top: 0px; /* Отступ сверху */
    left: 0px; /* Отступ слева */
  }
  
  /* Стили для диагонального слайдера */
  .diagonal {
    transform: rotate(45deg); /* Поворот на 45 градусов */
    width: 140px; /* Ширина слайдера */
    height: 140px; /* Высота слайдера */
    top: 0px; /* Отступ сверху */
    left: -50px; /* Отступ слева */
    transform-origin: 0 0; /* Точка вращения */
  }
  
  /* Общие стили для всех слайдеров */
  .slider {
    width: 100%; /* Ширина слайдера */
  }
  
  /* Цвет для красного слайдера */
  .slider-red {
    accent-color: #EA3C53; /* Цвет акцента */
  }
  
  /* Цвет для зеленого слайдера */
  .slider-green {
    accent-color: #FFBD9C; /* Цвет акцента */
  }
  
  /* Цвет для желтого слайдера */
  .slider-yellow {
    accent-color: #F5523D; /* Цвет акцента */
  }
  
  /* Стили для меток */
  label {
    position: absolute; /* Абсолютное позиционирование */
    top: -20px; /* Отступ сверху */
    left: 50%; /* Отступ слева */
    transform: translateX(-50%); /* Смещение метки на 50% от своей ширины для центрирования */
    font-size: 14px; /* Размер шрифта */
    color: #000; /* Цвет шрифта */
  }
  </style>
  