<script setup lang="ts">
  import '~/assets/css/main.css'
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <div class="min-h-screen flex flex-col bg-background">
      <AppHeader/>
      <NuxtPage class="flex-1"/>
    </div>
  </UApp>
</template>

<style scoped>

</style>