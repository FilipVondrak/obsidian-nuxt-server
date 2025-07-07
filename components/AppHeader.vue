<script setup lang="ts">
  import '~/assets/css/styles.css'
  import '~/assets/css/main.css'
  const appConfig = useAppConfig()
  const loggedIn = useState<boolean>(() => false);
</script>

<template>
  <div class="bg-background sticky top-0 z-50 w-full">
    <header class=" max-w-screen-xl mx-auto flex justify-between items-center px-6 py-6">

      <!-- Left: Logo -->
      <h1 class="font-bold text-lg sm:text-xl xl:text-2xl">
        <NuxtLink to="/" class="text-primary">{{ appConfig.siteName }}</NuxtLink>
      </h1>

      <!-- Links -->
      <div v-if="loggedIn">

      </div>
      <!-- Auth Links -->
      <div v-else class="flex items-center gap-4">
        <NuxtLink to="/auth/signin" class="text-sm text-text hover:text-gray-200 transition">
          Sign in
        </NuxtLink>
        <NuxtLink to="/auth/signup" class="bg-primary text-background text-black text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-gray-200 transition">
          Sign up
        </NuxtLink>
      </div>

    </header>
    <hr>
  </div>

</template>

<style scoped>
h1{
  color: white;
}
h2{
  color: white;
  text-align: center;
}
</style>