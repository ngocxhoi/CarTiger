<template>
  <MainLayout>
    <HomeHero />

    <div class="mt-40">
      <HomeCategory />
    </div>

    <HomeMostSearchCar />

    <HomeInfoSection />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
useSeoMeta({
  title: "Home",
});
</script>

<style></style>
