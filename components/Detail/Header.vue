<template>
  <div v-if="data">
    <h2 class="font-bold text-3xl">{{ data.listingTitle }}</h2>
    <p class="text-sm">{{ data.tagline }}</p>

    <div class="flex gap-2 mt-3">
      <div class="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
        <Icon name="lucide:calendar" size="28" class="text-blue-400" />
        <h2 class="text-blue-400 text-sm">{{ data.year }}</h2>
      </div>
      <div class="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
        <Icon name="lucide:gauge" size="28" class="text-blue-400" />
        <h2 class="text-blue-400 text-sm">{{ data.fuelType }}</h2>
      </div>
      <div class="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
        <Icon name="lucide:git-compare" size="28" class="text-blue-400" />
        <h2 class="text-blue-400 text-sm">{{ data.transmission }}</h2>
      </div>
    </div>
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
  data: CarListing | null;
}>();
</script>
