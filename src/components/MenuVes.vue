<template>
  <div class="menu-ves">
    <svg
      width="129"
      height="234"
      viewBox="0 0 129 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="69" cy="114" r="60" fill="white" />
      <circle
        cx="22.5"
        cy="22.5"
        r="22.5"
        :class="['plus-kg-button', { 'active': isPlusActive }]"
        @mousedown="isPlusActive = true"
        @mouseup="isPlusActive = false"
        @mouseleave="isPlusActive = false"
        @click="incrementWeight"
      />
      <path
        :class="['plus-kg-path', { 'active': isPlusActive }]"
        d="M24.3594 22.4844H28.6484V25.4609H24.3594V30.2891H21.2539V25.4609H16.9531V22.4844H21.2539V17.8672H24.3594V22.4844Z"
      />
      <circle
        cx="22.5"
        cy="211.5"
        r="22.5"
        :class="['minus-kg-button', { 'active': isMinusActive }]"
        @mousedown="isMinusActive = true"
        @mouseup="isMinusActive = false"
        @mouseleave="isMinusActive = false"
        @click="decrementWeight"
      />
      <path
        :class="['minus-kg-path', { 'active': isMinusActive }]"
        d="M28.3594 212.789H18.5977V210.152H28.3594V212.789Z"
      />
    </svg>
    <div class="weight-display">
      <div class="weight-number-unit">
        <div class="weight-number">{{ weight }}</div>
        <div class="weight-unit">
          <div>к</div>
          <div>г</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuVes',
  data() {
    return {
      weight: 0, // Начальное значение веса
      weights: [0, 0.3, 0.5, 0.8, 1], // Возможные значения веса
      currentIndex: 0, // Текущий индекс в массиве weights
      isPlusActive: false, // Состояние для кнопки плюс
      isMinusActive: false, // Состояние для кнопки минус
    };
  },
  methods: {
    incrementWeight() {
      if (this.currentIndex < this.weights.length - 1) {
        this.currentIndex++;
      } else {
        this.weights.push(this.weights[this.weights.length - 1] + 1);
        this.currentIndex++;
      }
      this.weight = this.weights[this.currentIndex];
    },
    decrementWeight() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.weight = this.weights[this.currentIndex];
      }
    },
  },
}
</script>

<style scoped>
.menu-ves {
  position: absolute;
  width: 129px;
  height: 234px;
  left: 21px; /* Отступ слева от главного фона */
  top: 50px; /* Отступ сверху от главного фона */
  z-index: 2;
}

.weight-display {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'DM Mono', monospace;
  font-weight: medium;
  color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
}

.weight-number-unit {
  display: flex;
  align-items: flex-end;
}

.weight-number {
  font-size: 42px;
  line-height: 1;
  letter-spacing: 0.1px;
}

.weight-unit {
  font-size: 24px; /* Размер для лучшей читаемости */
  line-height: 1;
  letter-spacing: 0.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 8px; /* Отступ от числа */
  font-weight: bold; /* Сделаем текст более жирным */
}

/* Стили для кнопок и эффект нажатия */
.plus-kg-button,
.minus-kg-button {
  cursor: pointer;
  transition: fill 0.2s, stroke 0.2s;
}

.plus-kg-path,
.minus-kg-path {
  transition: fill 0.2s;
}

.plus-kg-button.active {
  fill: white;
}

.plus-kg-path.active {
  fill: #F5513C;
}

.minus-kg-button.active {
  fill: white;
}

.minus-kg-path.active {
  fill: #252525;
}

.plus-kg-button {
  fill: #F5513C;
  transition: fill 0.2s;
}

.plus-kg-path {
  fill: #252525;
  transition: fill 0.2s;
}

.minus-kg-button {
  fill: #252525;
  transition: fill 0.2s;
}

.minus-kg-path {
  fill: #F5513C;
  transition: fill 0.2s;
}
</style>
