<template>
  <div>
    <h2 class="font-bold text-xl text-center mb-6">Browse By Types</h2>

    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6"
    >
      <div
        v-for="category in categories"
        :key="category.title"
        class="bg-[#eef0fc] dark:bg-gray-900 rounded-md p-3 hover:shadow-md cursor-pointer border-b-2 border-red-500/0"
        :class="{
          'shadow-md border-red-500/100':
            category.title == route.query.category,
        }"
      >
        <NuxtLink
          :to="{
            path: `/search`,
            query: {
              ...route.query,
              category:
                category.title != route.query.category
                  ? category.title
                  : undefined,
            },
            force: true,
            replace: true,
          }"
          class="size-full flex flex-col justify-center items-center"
        >
          <Icon :name="category.icon" size="35" />
          <h2 class="text-center mt-2">{{ category.title }}</h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { categories } from "~/assets/Data";

const route = useRoute();
const { searchFilterFunc } = useStateData();
</script>
