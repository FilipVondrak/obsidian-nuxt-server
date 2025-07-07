<script setup lang="ts">

import MarkdownDisplay from "~/components/MarkdownDisplay.vue";
</script>

<template>
  <main class="flex justify-center flex-col-reverse md:flex-row gap-4 p-5">
    <aside class="flex-1 md:left-0 md:top-64 md:sticky md:max-h-4 border-2 rounded-md min-h-32">
      <FileBrowser/>
    </aside>
    <div class="flex-2 border-border p-5 ">
      <article>
        <h1 class="text-4xl">Heading</h1>
        <br><br>
        <MarkdownDisplay>
        </MarkdownDisplay>

      </article>
    </div>
    <aside class="flex-1 md:right-0 md:top-64 md:sticky md:max-h-4 border-2 rounded-md min-h-32">

    </aside>
  </main>
</template>

<style scoped>

</style>