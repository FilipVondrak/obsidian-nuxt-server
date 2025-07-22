<script setup lang="ts">

// import MarkdownDisplay from "~/components/MarkdownDisplay.vue";
</script>

<template>
  <main class="flex flex-row-reverse md:flex-row flex-nowrap items-start">
    <aside class="flex-1 bg-primary  sticky left-0 top-[81px] min-w-0"
           style="height: calc(100vh - 81px); direction: rtl">
      <div class="p-2">
        <div class="h-10 border-1 rounded-2xl">

        </div>
      </div>
      <div class="overflow-y-auto overflow-x-auto min-w-0 max-h-full max-w-full">
        <FileBrowser />
      </div>
    </aside>

    <article class="flex-2 p-5 flex justify-center flex-wrap" >
      <MarkdownDisplay/>
    </article>

    <aside class="flex-1 bg-primary overflow-auto sticky left-0 top-[81px]" style="height: calc(100vh - 81px);">

    </aside>
  </main>
</template>

<style scoped>

</style>