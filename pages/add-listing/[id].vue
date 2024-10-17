<template>
  <MainLayout>
    <div class="px-0 py-10 sm:px-10 md:px-14 lg:px-20 my-10">
      <h2 class="font-bold text-4xl">Edit Listing</h2>
      <UForm
        :state="state"
        :schema="formListingSchema"
        @submit="handleSubmit"
        class="p-10 border dark:border-gray-600 rounded-xl mt-4"
      >
        <div>
          <h2 class="font-medium text-xl mb-6 mt-10">Car Details</h2>
          <div class="grid md:grid-cols-2 gap-5">
            <div v-for="(list, index) in listingDetails" :key="index">
              <ListingInputField
                v-model="state[list.name as keyof FormListingSchema]"
                :list="list"
              />
            </div>
          </div>
        </div>

        <UDivider :ui="ui" class="my-6" />

        <div>
          <h2 class="font-medium text-xl mb-6 mt-10">Features</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div v-for="feature in features" :key="feature.name">
              <ListingFeature
                v-model="featuresCheck[feature.name]"
                :feature="feature"
              />
            </div>
          </div>
        </div>

        <UDivider :ui="ui" class="my-6" />

        <ListingAddImage ref="refImage" :carImage="data?.carImage" />

        <UDivider :ui="ui" class="my-6" />

        <UButton
          :loading="isLoading"
          color="black"
          label="Save"
          type="submit"
        />
      </UForm>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { listingDetails, features } from "~/assets/Data";
import type { FormSubmitEvent } from "#ui/types";
import { formListingSchema, type FormListingSchema } from "~/schemas/zod";
useSeoMeta({
  title: "Add New Listing",
});

const route = useRoute();
const ui = {
  border: {
    base: "flex border-gray-400 dark:border-gray-600",
  },
};
const refImage = ref();
const isLoading = ref(false);

const { data } = await useFetch("/api/db/car-listing/id", {
  method: "GET",
  query: {
    id: route.params.id,
  },
  watch: false,
});

const state = ref({
  ...data.value,
  id: undefined,
  features: undefined,
  carImage: undefined,
});
const featuresCheck = computed(() =>
  JSON.parse(data.value!.features as string)
);

async function handleSubmit(event: FormSubmitEvent<FormListingSchema>) {
  try {
    isLoading.value = true;
    const { data: id } = await useFetch("/api/db/car-listing", {
      method: "PUT",
      // signal: signal,
      body: {
        id: data.value?.id,
        data: event.data,
        features: featuresCheck,
      },
      watch: false,
    });

    if (refImage.value) {
      refImage.value.updateImage(id.value);
    }
  } catch (error: any) {
    throw showError(error);
  } finally {
    isLoading.value = false;
  }
}
</script>
