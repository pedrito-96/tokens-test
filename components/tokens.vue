<script setup lang="ts"></script>
<template>
  <div>
    <h1 class="text-2xl text-amber-400">
      Design tokens are key-value pairs that represent the specs of a design
      system.
    </h1>
    <p class="text-avocado-300">
      AVOCADO 🥑 --color-avocado-300: oklch(0.94 0.11 115.03);
    </p>

    <p
      class="border-2 border-status-success rounded-80 text-status-warning bg-status-danger w-fit p-3 text-body-md ciao"
    >
      TEST
    </p>
    <div class="p-10 w-10 rounded-20 blur-xs bg-status-info"></div>
    <div class="bg-breakpoint">
      <p class="sm:block md:hidden">--breakpoint-sm: 300px;</p>
      <p class="md:block lg:hidden">--breakpoint-md: 400px;</p>
      <p class="lg:block">--breakpoint-lg: 600px;</p>
    </div>
  </div>
</template>
