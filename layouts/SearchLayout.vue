<template>
  <UContainer :ui="ui">
    <LayoutHeaderNav />
    <div class="py-20 w-full bg-[#eef0fc] dark:bg-[#3d3f49] rounded-lg">
      <HomeHeroSearch class="mx-auto" @handle="handleSearch($event)" />
    </div>
    <div class="mt-10">
      <HomeCategory />
    </div>

    <div>
      <slot :data="propData" :status="statusRef" />
    </div>

    <LayoutFooter />
  </UContainer>
</template>

<script setup lang="ts">
type SearchEvent = {
  category?: string;
  condition: string;
  make: string;
  sellingPrice: string;
};

const { searchData } = useStateData();

const propData = ref();
const statusRef = ref("");
const ui = {
  base: "mx-auto min-h-screen",
  padding: "px-0 sm:px-4 lg:px-6 xl:px-8 2xl:px-10",
  constrained: "max-w-[1680px] min-w-[450px]",
};
const route = useRoute();

async function handleSearch(
  e: Pick<SearchEvent, "condition" | "make" | "sellingPrice">
) {
  const query = {
    ...e,
  };

  try {
    await navigateTo(
      {
        path: "/search",
        query: query,
      },
      {
        replace: true,
      }
    );
    const { data, status } = await useLazyFetch("/api/db/car-listing/filter", {
      method: "GET",
      query: query,
      watch: false,
    });
    statusRef.value = status.value;
    searchData.value = data.value;
    propData.value = data.value;
  } catch (error: any) {
    throw showError(error);
  }
}

watch(
  () => route.query.category,
  (val) => {
    if (!val) propData.value = searchData.value;
    else
      propData.value = searchData.value.filter((item: any) => item.type == val);
  }
);
</script>

<style></style>
