<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
useHead({
  titleTemplate: (titleChunk: string | undefined): any => {
    return titleChunk ? `${titleChunk} | ${appConfig.title}` : appConfig.title;
  },
});
</script>

<style>
body {
  @apply dark:dark:bg-[#1E1E2C];
}
</style>
