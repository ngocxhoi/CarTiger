<template>
  <div
    class="flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc] dark:bg-[#3d3f49] rounded-lg"
  >
    <h2 class="text-center text-lg">
      Find cars for sale and for rent near you
    </h2>
    <h1 class="text-center text-6xl font-bold">Find Your Dream Car</h1>
    <HomeHeroSearch @handle="handleSearch($event)" />
    <img src="/images/car-sideview.png" width="800" alt="Car Demo" />
  </div>
</template>

<script setup lang="ts">
type DataObject = {
  condition: string;
  make: string;
  sellingPrice: string;
};
async function handleSearch(data: DataObject) {
  await navigateTo({
    path: "/search",
    query: data,
  });
}
</script>
