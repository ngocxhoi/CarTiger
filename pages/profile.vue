<template>
  <MainLayout>
    <UTabs
      :items="items"
      :default-index="defaultIndex"
      v-model="selected"
      class="w-full"
    >
      <template #myListing="{ item }">
        <div id="myListing" class="px-0 py-10 sm:px-10 md:px-14 lg:px-20">
          <div class="flex items-center justify-between">
            <h2 class="font-bold text-4xl">My Listing</h2>
            <NuxtLink to="/add-listing">
              <UButton color="black" label="+ Add New Listing" />
            </NuxtLink>
          </div>

          <div v-if="status == 'success'">
            <div v-if="!carListings?.length">
              <h1 class="text-center text-3xl font-semibold">No Listing</h1>
            </div>
            <div
              v-else
              class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-7"
            >
              <div v-for="car in carListings" :key="car.id">
                <ListingItem :car="car" />
              </div>
            </div>
          </div>
          <div v-else>
            <div
              class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-7"
            >
              <div v-for="el in 10" :key="el">
                <USkeleton class="w-full aspect-[1/1.2]" />
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #inbox="{ item }">
        <div id="inbox" class="px-0 py-10 sm:px-10 md:px-14 lg:px-20">
          <ProfileChat :title="item.label" />
        </div>
      </template>

      <template #user="{ item }">
        <div id="user" class="px-0 py-10 sm:px-10 md:px-14 lg:px-20">
          <UCard>
            <template #header>
              <h3
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ item.label }}
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Change your password here. After saving, you'll be logged out.
              </p>
            </template>

            <UFormGroup
              label="Current Password"
              name="current"
              required
              class="mb-3"
            >
              <UInput type="password" required />
            </UFormGroup>
            <UFormGroup label="New Password" name="new" required>
              <UInput type="password" required />
            </UFormGroup>

            <template #footer>
              <UButton type="submit" color="black"> Save password </UButton>
            </template>
          </UCard>
        </div>
      </template>
    </UTabs>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";
useSeoMeta({
  title: "Profile",
});

const items = [
  {
    slot: "myListing",
    label: "My Listing",
  },
  {
    slot: "inbox",
    label: "Inbox",
  },
  {
    slot: "user",
    label: "User",
  },
];
const defaultIndex = ref(0);

const { data: carListings, status } = useLazyFetch("/api/db/car-listing", {
  method: "GET",
});

const route = useRoute();

const selected = computed({
  get() {
    const index = items.findIndex((item) => item.label === route.query.tab);
    if (index === -1) {
      return 0;
    }

    return index;
  },
  async set(value) {
    // router.replace({
    //   hash: `#${items[value].slot}`,
    // });
    await navigateTo(
      {
        path: "/profile",
        hash: `#${items[value].slot}`,
      },
      {
        replace: true,
      }
    );
  },
});

onBeforeMount(() => {
  const contact = route.query.contact;
  if (contact) {
    defaultIndex.value = 1;
  }
});
</script>
