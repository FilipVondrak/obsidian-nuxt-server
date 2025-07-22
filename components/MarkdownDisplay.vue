<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

// get the file name
const showExtension = false;

let title = page.value?.id.split('/').pop();

if(!title)
  title = "No title";
else if(!showExtension)
  title = title.split('.').slice(0,-1)[0]

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div>
    <h1 class="text-4xl text-center text-accent font-bold">{{ title }}</h1>
    <USeparator class="mb-5"/>
    <div class="prose prose-blue dark:prose-invert">
      <ContentRenderer v-if="page" :value="page" />
      <div v-else>Page not found</div>
    </div>
  </div>
</template>