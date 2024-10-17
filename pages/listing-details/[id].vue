<template>
  <MainLayout>
    <template v-if="status == 'success'">
      <div class="px-0 py-10 sm:px-10 md:px-14 lg:px-20">
        <DetailHeader :data="data" />

        <div class="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          <DetailLeft :data="data" />
          <DetailRight :data="data" />
        </div>
      </div>
    </template>

    <template v-else-if="status == 'pending'">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-7">
        <div v-for="car in 10" :key="car">
          <USkeleton class="w-full aspect-[1/1.2]" />
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";
useSeoMeta({
  title: "Details",
});
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

const route = useRoute();

const { data, status } = await useLazyFetch<CarListing>(
  "/api/db/car-listing/id",
  {
    method: "GET",
    query: {
      id: route.params.id,
    },
  }
);
</script>
