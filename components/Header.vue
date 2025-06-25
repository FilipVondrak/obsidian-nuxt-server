<script setup lang="ts">
  import '~/assets/css/styles.css'
</script>

<template>
  <div class="sticky top-0 z-50 background w-full">
    <header class="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">

      <!-- Left: Logo -->
      <h1 class="text-white font-bold text-lg sm:text-xl">
        <NuxtLink to="/">Feeda Digital Garden</NuxtLink>
      </h1>

      <!-- Right: Auth Links -->
      <div class="flex items-center gap-4">
        <NuxtLink to="/signin" class="text-sm text-gray-400 hover:text-gray-200 transition">Sign in</NuxtLink>
        <NuxtLink to="/signup" class="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-gray-200 transition">Sign up</NuxtLink>
      </div>

    </header>
  </div>
</template>

<style scoped>
h1{
  color: white;
}
h2{
  color: white;
  text-align: center;
}
</style>