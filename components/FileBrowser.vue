<script setup lang="ts">
const route = useRoute()
let { data: files } = await useAsyncData('all',() => {
  return queryCollection('content').all()
})

files.value?.forEach((item) => {
    item.path = item.path.split('/').slice(1).join('/');
    item.id = item.id.split('/').slice(1).join('/');
  }
)



</script>

<template>
  <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-full" />
</template>

<style scoped>

</style>