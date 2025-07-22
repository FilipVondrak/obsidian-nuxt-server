<script setup lang="ts">
const navItems = await useNavItems();
</script>

<template>
  <UNavigationMenu
      orientation="vertical"
      :items="navItems"
      highlight
      color="accent"
      highlight-color="accent"
      class=""

  />
</template>

<style scoped>

</style>