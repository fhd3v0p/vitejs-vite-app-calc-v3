<!-- src/components/MainFon.vue -->
<template>
  <div class="main-fon">
    <svg
      width="398"
      height="591"
      viewBox="0 0 398 591"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect class="background-rect" />
      <path
        d="M0 60C0 26.8629 26.8629 0 60 0H338C371.137 0 398 26.8629 398 60V531C398 564.137 371.137 591 338 591H60C26.8629 591 0 564.137 0 531V60Z"
        fill="#2B2B2B"
        fill-opacity="0.97" />
    </svg>
  </div>
</template>

<style scoped>
.main-fon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.background-rect {
  width: 398px;
  height: 591px;
  fill: #1B1B1B; /* Темный фон */
}
</style>
