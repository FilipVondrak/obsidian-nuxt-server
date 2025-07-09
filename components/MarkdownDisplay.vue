<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
const title = page.value?.title ?? "No title";

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div>
    <h1 class="text-4xl text-center text-accent">{{ title }}</h1>
    <USeparator/>
    <div class="prose prose-blue dark:prose-invert">
      <ContentRenderer v-if="page" :value="page" />
      <div v-else>Page not found</div>
    </div>
  </div>
</template>