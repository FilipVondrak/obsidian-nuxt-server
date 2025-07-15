<script setup lang="ts">
const navItems = await useNavItems();
</script>

<template>
  <UNavigationMenu orientation="vertical"
                   :items="navItems"
                   highlight
                   color="accent"
                   highlight-color="accent"
                   class="data-[orientation=vertical]:w-full scroll-auto" />
</template>

<style scoped>

</style>