<template>
  <div>
    <h2 class="font-bold text-3xl text-center my-16 mb-7">Most Search Car</h2>

    <ClientOnly>
      <Carousel snapAlign="start" :breakpoints="breakpoints" :wrapAround="true">
        <template v-if="status == 'success'">
          <Slide v-for="car in carList" :key="car.id">
            <HomeMostSearchCarItem :car="car" />
          </Slide>
        </template>
        <template v-else>
          <Slide v-for="car in 10" :key="car">
            <USkeleton class="w-full aspect-[1/1.2]" />
          </Slide>
        </template>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
// import carList from "~/assets/FakeData";

const breakpoints = {
  300: {
    itemsToShow: 1,
  },
  640: {
    itemsToShow: 2,
  },
  // 1024 and up
  768: {
    itemsToShow: 3,
  },
  1280: {
    itemsToShow: 4,
  },
};

const { data: carList, status } = await useLazyFetch("/api/db/car-listing", {
  method: "GET",
  query: {
    take: 10,
  },
});
</script>

<style>
.carousel__slide {
  @apply px-2 lg:px-3;
}
</style>
