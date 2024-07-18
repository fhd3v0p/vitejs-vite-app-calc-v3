<!-- src/components/MainMenuButton.vue -->
<template>
    <div class="main-menu-button">
      <svg
          width="90"
          height="131"
          viewBox="0 0 90 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <path
            d="M0 45C0 20.1472 20.1472 0 45 0V0C69.8528 0 90 20.1472 90 45V86C90 110.853 69.8528 131 45 131V131C20.1472 131 0 110.853 0 86V45Z"
            fill="white" />
          <rect x="6" y="23" width="78" height="57" fill="url(#pattern0_1_40)" />
          <circle cx="30" cy="101" r="5" fill="#FF7B39" />
          <circle cx="60" cy="101" r="5" fill="#EA3C53" />
          <circle cx="45" cy="101" r="5" fill="#F5523D" />
          <defs>
            <pattern
              id="pattern0_1_40"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1">
              <use
                xlink:href="#image0_1_40"
                transform="matrix(0.000646698 0 0 0.000884956 0.0709156 0)" />
            </pattern>
          </defs>
        </svg>
    </div>
  </template>
  
  <style scoped>
  .main-menu-button {
    position: absolute;
    top: 17px; /* Отступ сверху */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  </style>
