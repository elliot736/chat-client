<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-row justify-around mt-11 text-lg">
    <nav>
      <RouterLink class="animation mr-[1rem]" to="/">Home</RouterLink>
      <RouterLink class="animation" to="/about">About</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style>
.animation {
  display: inline-block;
  position: relative;
  color: #000000;
}

.animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: borgb(0, 0, 0) ght;
  transition: transform 0.25s ease-out;
}

.animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
