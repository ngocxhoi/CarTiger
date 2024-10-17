<template>
  <div
    v-if="car"
    class="relative shadow-md w-full dark:bg-gray-800 black hover:shadow-lg cursor-pointer"
  >
    <h2 class="absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white">
      New
    </h2>
    <div class="w-full h-[200px] overflow-hidden rounded-t-xl">
      <img
        :src="car.carImage[0]?.imageUrl ?? '/images/car-sideview.png'"
        class="w-full hover:scale-105 transition-transform"
        :alt="car.listingTitle"
      />
    </div>

    <div class="p-4">
      <h2 class="font-bold text-black dark:text-white text-lg mb-2">
        {{ car.listingTitle }}
      </h2>

      <UDivider :ui="ui" />

      <div class="grid grid-cols-3 mt-5">
        <div class="flex flex-col gap-2 items-center">
          <Icon name="lucide:fuel" size="24" />
          <h2>{{ car.mileage }} Miles</h2>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <Icon name="lucide:gauge" size="24" />
          <h2>{{ car.fuelType }}</h2>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <Icon name="lucide:git-compare" size="24" />
          <h2>{{ car.transmission }}</h2>
        </div>
      </div>

      <UDivider class="my-2" :ui="ui" />

      <div class="flex items-center justify-between">
        <h2 class="font-bold text-xl">$ {{ car.sellingPrice }}</h2>
        <h2
          @click="navigateTo(`/listing-details/${car.id}`)"
          class="text-blue-400 flex items-center justify-center"
        >
          <span>View Details</span>
          <Icon name="lucide:external-link" size="24" />
        </h2>
      </div>
    </div>
  </div>

  <div class="py-2 flex justify-between gap-2">
    <NuxtLink
      :to="{ path: `/add-listing/${car.id}`, query: { mode: 'edit' } }"
      class="w-full text-center py-1 rounded-xl bg-black/70 hover:opacity-90 dark:bg-white text-white dark:text-black shadow-lg font-semibold text-lg transition-all"
    >
      Edit
    </NuxtLink>
    <UButton color="red" icon="i-heroicons-trash" />
  </div>
</template>

<script lang="ts" setup>
type CarListing = {
  id: string;
  listingTitle: string;
  tagline: string | null;
  originalPrice: number | null;
  sellingPrice: number;
  categories: string;
  condition: string;
  type: string;
  make: string;
  model: string;
  year: number;
  driveType: string;
  transmission: string;
  fuelType: string;
  mileage: number;
  engineSize: number | null;
  cylinder: number | null;
  color: string;
  doorType: string;
  vin: string | null;
  offerType: string | null;
  listingDescription: string;
  features: any;
  carImage: CarImage[];
};
type CarImage = {
  id: string;
  imageUrl: string | null;
  carListingId: string;
};
defineProps<{
  car: CarListing;
}>();

const ui = {
  border: {
    base: "flex border-gray-400 dark:border-gray-600",
  },
};
</script>
