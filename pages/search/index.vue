<template>
  <SearchLayout>
    <template #default="{ data, status }">
      <div class="px-0 py-10 sm:px-10 md:px-14 lg:px-20 my-10">
        <h2 class="font-bold text-4xl">
          {{ route.query.category ?? "Search" }}
        </h2>
        <template v-if="data && status == 'success'">
          <div
            v-if="data?.length"
            class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-7"
          >
            <div v-for="car in data" :key="car.id">
              <HomeMostSearchCarItem :car="car" />
            </div>
          </div>
          <p
            v-else-if="route.query.category"
            class="text-center text-2xl text-red-400 font-semibold py-10"
          >
            Category {{ route.query.category }} is empty!
          </p>
        </template>
        <template v-else-if="status == 'pending'">
          <div
            class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-7"
          >
            <div v-for="car in 10" :key="car">
              <USkeleton class="w-full aspect-[1/1.2]" />
            </div>
          </div>
        </template>
      </div>
    </template>
  </SearchLayout>
</template>

<script lang="ts" setup>
import SearchLayout from "~/layouts/SearchLayout.vue";
useSeoMeta({
  title: "Search",
});

const route = useRoute();
</script>
