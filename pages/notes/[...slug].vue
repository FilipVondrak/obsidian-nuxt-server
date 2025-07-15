<script setup lang="ts">

import MarkdownDisplay from "~/components/MarkdownDisplay.vue";
</script>

<template>
  <main class="flex justify-center flex-col-reverse md:flex-row gap-4 p-5 md:p-0 md:gap-0 ">
    <aside class="flex-1 bg-primary  md:border-r border rounded-2xl md:rounded-none
                  md:border-0 border-border p-5 md:p-0 ">
      <div class="md:sticky md:top-21 w-full  overflow-auto h-full " >
        <FileBrowser/>
      </div>
    </aside>
    <div class="flex-2 bg-background p-5 ">
      <article>
        <div class="flex justify-center flex-wrap">
          <MarkdownDisplay/>
        </div>
      </article>
    </div>
    <aside class="flex-1 bg-primary  md:border-l border rounded-2xl md:rounded-none
                  md:border-0 border-border p-5 md:p-0 md:pl-5 md:pr-5">
      <div class="md:sticky md:top-21 w-full h-auto">
        Hello there!
      </div>
    </aside>
  </main>
</template>

<style scoped>

</style>