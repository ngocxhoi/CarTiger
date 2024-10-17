<template>
  <div
    class="p-2 md:p-3 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-full md:w-max"
  >
    <USelect
      v-model="carSelected"
      :options="cars"
      variant="none"
      color="white"
      class="w-full md:w-[140px] lg:w-[180px] [&>*]:text-base [&>*]:font-semibold text-black"
    />
    <div class="hidden md:block h-full border-l border-gray-300" />
    <USelect
      v-model="carMakeSelected"
      :options="carMakes"
      variant="none"
      color="white"
      class="w-full my-4 md:my-0 md:w-[140px] lg:w-[180px] [&>*]:text-base [&>*]:font-semibold text-black"
    />
    <div class="hidden md:block h-full border-l border-gray-300" />
    <USelect
      v-model="pricingSelected"
      :options="pricing"
      variant="none"
      color="white"
      class="w-full md:w-[140px] lg:w-[180px] [&>*]:text-base [&>*]:font-semibold text-black"
    />
    <div class="hidden md:block h-full border-l border-gray-300" />
    <div
      @click="handleSearch()"
      class="size-10 mt-4 md:mt-0 w-full md:w-auto md:h-full md:aspect-[1/1] md:bg-blue-500 flex items-center justify-center md:rounded-full p-2 cursor-pointer hover:scale-105 transition-transform"
    >
      <Icon
        name="heroicons:magnifying-glass"
        size="28"
        class="hidden md:block"
      />
      <UButton
        label="Search"
        block
        color="black"
        class="md:hidden border border-gray-500 shadow-lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cars, carMakes, pricing, themes } from "~/assets/Data";

const emit = defineEmits<{
  handle: [
    data: {
      condition: string;
      make: string;
      sellingPrice: string;
    }
  ];
}>();

defineExpose({
  handleSearch,
});

const carSelected = ref(cars[0]);
const themeSelected = ref(themes[0]);
const carMakeSelected = ref(carMakes[0]);
const pricingSelected = ref(pricing[0]);

function handleSearch() {
  emit("handle", {
    condition: carSelected.value,
    make: carMakeSelected.value,
    sellingPrice: pricingSelected.value,
  });
}
</script>

<style></style>
