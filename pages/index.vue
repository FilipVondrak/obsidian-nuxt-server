<script setup lang="ts">
  //import '~/assets/css/styles.css'
  import '~/assets/css/main.css'
</script>

<template>
  <div class="w-full h-full flex items-center justify-center ">
    <div class="flex items-center justify-center ">
      <div class="h-full flex flex-col space-y-4">
        <UButton to="/notes" color="accent" variant="outline" class="px-12 py-4">
          <h2 >Go to my notes!</h2>
        </UButton>
        <UButton to="/notes/loremipsum" color="accent" variant="outline" class="px-12 py-4">
          <h2 >Go to my testing note!</h2>
        </UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>