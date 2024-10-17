<template>
  <div v-if="data" class="w-full">
    <!-- Price -->
    <div
      class="p-5 py-10 rounded-xl shadow-md mt-6 bg-[#eef0fc] dark:bg-[#3d3f49]"
    >
      <h2>Our Price</h2>
      <h2 class="font-bold text-4xl">${{ data.sellingPrice }}</h2>

      <UButton
        block
        icon="lucide:badge-dollar-sign"
        label="Make an Offer Pricing"
        size="lg"
        class="mt-6"
      />
    </div>

    <!-- Specification -->
    <div
      class="p-5 py-10 rounded-xl shadow-md mt-6 bg-[#eef0fc] dark:bg-[#3d3f49]"
    >
      <h2 class="font-medium text-2xl mb-5">Specifications</h2>
      <div
        v-for="el in noDescription(listingDetails)"
        :key="el.name"
        class="mt-1 py-0.5 flex items-center justify-between rounded-xl hover:bg-[#a2add6]"
      >
        <div
          class="flex items-center justify-center bg-blue-100 rounded-full gap-2 p-1"
        >
          <Icon :name="`lucide:${el.icon}`" size="20" class="text-blue-500" />
        </div>
        <h2>{{ data[el.name as keyof CarListing] }}</h2>
      </div>
    </div>

    <!-- Owner Details -->
    <div
      class="p-5 py-10 rounded-xl shadow-md mt-6 bg-[#eef0fc] dark:bg-[#3d3f49]"
    >
      <h2 class="font-medium text-2xl mb-5">Owner Details</h2>
      <div class="flex items-center gap-2 w-full flex-wrap">
        <img
          :src="data.authorImage"
          alt="Avatar"
          class="size-16 rounded-full object-cover"
        />
        <div class="flex flex-col justify-center">
          <h2 class="mt-2 font-bold text-xl">{{ data.authorName }}</h2>
          <h2 class="mt-2 text-gray-500">{{ data.author }}</h2>
        </div>
      </div>
      <UButton
        :to="{
          path: '/profile',
          hash: '#inbox',
          query: { contact: data.author },
        }"
        label="Message Owner"
        block
        class="mt-6"
        size="lg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { listingDetails } from "~/assets/Data";
type ListingDetails = {
  label: string;
  name: string;
  fieldType: string;
  required?: boolean;
  column: number;
  icon: string;
  options?: string[];
};
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
  author: string;
  authorName: string;
  authorImage: string;
};
type CarImage = {
  id: string;
  imageUrl: string | null;
  carListingId: string;
};
defineProps<{
  data?: CarListing | null;
}>();

function noDescription(lists: ListingDetails[]): ListingDetails[] {
  return lists.slice(0, -1);
}
</script>
