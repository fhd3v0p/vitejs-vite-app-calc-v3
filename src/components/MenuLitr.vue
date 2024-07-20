<template>
  <div class="menu-litr">
    <svg
      width="129"
      height="234"
      viewBox="0 0 129 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="114" r="60" fill="white" />
      <circle
        cx="106.5"
        cy="22.5"
        r="22.5"
        :class="['plus-litr-button', { 'active': isPlusActive }]"
        @mousedown="isPlusActive = true"
        @mouseup="isPlusActive = false"
        @mouseleave="isPlusActive = false"
        @click="incrementVolume"
      />
      <path
        :class="['plus-litr-path', { 'active': isPlusActive }]"
        d="M108.359 22.4844H112.648V25.4609H108.359V30.2891H105.254V25.4609H100.953V22.4844H105.254V17.8672H108.359V22.4844Z"
      />
      <circle
        cx="106.5"
        cy="211.5"
        r="22.5"
        :class="['minus-litr-button', { 'active': isMinusActive }]"
        @mousedown="isMinusActive = true"
        @mouseup="isMinusActive = false"
        @mouseleave="isMinusActive = false"
        @click="decrementVolume"
      />
      <path
        :class="['minus-litr-path', { 'active': isMinusActive }]"
        d="M112.359 212.789H102.598V210.152H112.359V212.789Z"
      />
    </svg>
    <div class="volume-display">
      <div class="volume-number-unit">
        <div class="volume-number">{{ volume }}</div>
        <div class="volume-unit">
          <div>л</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuLitr',
  data() {
    return {
      volume: 0, // Начальное значение объема
      volumes: [0, 0.5, 1], // Возможные значения объема
      currentIndex: 0, // Текущий индекс в массиве volumes
      isPlusActive: false, // Состояние для кнопки плюс
      isMinusActive: false, // Состояние для кнопки минус
    };
  },
  methods: {
    incrementVolume() {
      if (this.currentIndex < this.volumes.length - 1) {
        this.currentIndex++;
      } else {
        this.volumes.push(this.volumes[this.volumes.length - 1] + 1);
        this.currentIndex++;
      }
      this.volume = this.volumes[this.currentIndex];
    },
    decrementVolume() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.volume = this.volumes[this.currentIndex];
      }
    },
  },
}
</script>

<style scoped>
.menu-litr {
  position: absolute;
  top: 52px; /* Отступ сверху */
  right: 21px; /* Отступ справа */
  z-index: 2;
}

.volume-display {
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

.volume-number-unit {
  display: flex;
  align-items: flex-end;
}

.volume-number {
  font-size: 42px;
  line-height: 1;
  letter-spacing: 0.1px;
}

.volume-unit {
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
.plus-litr-button,
.minus-litr-button {
  cursor: pointer;
  transition: fill 0.2s, stroke 0.2s;
}

.plus-litr-path,
.minus-litr-path {
  transition: fill 0.2s;
}

.plus-litr-button.active {
  fill: white;
}

.plus-litr-path.active {
  fill: #F5513C;
}

.minus-litr-button.active {
  fill: white;
}

.minus-litr-path.active {
  fill: #252525;
}

.plus-litr-button {
  fill: #F5513C;
  transition: fill 0.2s;
}

.plus-litr-path {
  fill: #252525;
  transition: fill 0.2s;
}

.minus-litr-button {
  fill: #252525;
  transition: fill 0.2s;
}

.minus-litr-path {
  fill: #F5513C;
  transition: fill 0.2s;
}
</style>
