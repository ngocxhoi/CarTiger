<template>
  <MainLayout>
    <div class="px-0 py-10 sm:px-10 md:px-14 lg:px-20 my-10">
      <h2 class="font-bold text-4xl">Add New Listing</h2>
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
                v-model="featuresCheck[feature.name as keyof typeof featuresCheck]"
                :feature="feature"
              />
            </div>
          </div>
        </div>

        <UDivider :ui="ui" class="my-6" />

        <ListingAddImage ref="refImage" />

        <UDivider :ui="ui" class="my-6" />

        <UButton
          :loading="isLoading"
          color="black"
          label="Submit"
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
const { user } = useUser();

const ui = {
  border: {
    base: "flex border-gray-400 dark:border-gray-600",
  },
};
const refImage = ref();
const isLoading = ref(false);
// const controller = new AbortController();
// const signal = controller.signal;
const state = reactive<any>({
  listingTitle: "Larry Fisher",
  tagline: "Josephine Sutton",
  originalPrice: 39,
  sellingPrice: 65,
  categories: "Sedan",
  condition: "New",
  type: "Hybrid",
  make: "Chevrolet",
  model: "nice",
  year: 2000,
  driveType: "AWD",
  transmission: "Automatic",
  fuelType: "Electric",
  mileage: 975,
  engineSize: 205,
  cylinder: 826,
  color: "White",
  doorType: "2 Doors",
  vin: "frighten",
  offerType: "offer",
  listingDescription:
    "burn give court social ocean log probably on queen somewhere depend meat dug pipe paid send beneath active silver flame program smooth ever mass",
});
const featuresCheck = reactive({
  airConditioner: false,
  leatherSeats: false,
  touchscreenDisplay: false,
  childSafetyLocks: false,
  stabilityControl: false,
  rainSensingWiper: false,
  comfortAndConvenience: false,
  bluetooth: false,
  vanityMirror: false,
  digitalOdometer: false,
  panoramicMoonroof: false,
  antiLockBraking: false,
  driverAirBag: false,
  tractionControl: false,
  rearSpoiler: false,
  androidAuto: false,
  homeLink: false,
  heater: false,
  tachometer: false,
  brakeAssist: false,
  powerDoorLocks: false,
  fogLightsFront: false,
  windowsElectric: false,
  appleCarplay: false,
  powerSteering: false,
});

async function handleSubmit(event: FormSubmitEvent<FormListingSchema>) {
  try {
    isLoading.value = true;
    const { data } = await useFetch("/api/db/car-listing", {
      method: "POST",
      // signal: signal,
      body: {
        data: event.data,
        features: featuresCheck,
        author: user.value?.emailAddresses[0].emailAddress,
        authorName: user.value?.fullName,
        authorImage: user.value?.imageUrl,
      },
      watch: false,
    });

    if (refImage.value) {
      await refImage.value.uploadImage(data.value);
    }
  } catch (error: any) {
    throw showError(error);
  } finally {
    resetState();
    isLoading.value = false;
  }
}

function resetState() {
  state.listingTitle = "Larry Fisher";
  state.tagline = "Josephine Sutton";
  state.originalPrice = 39;
  state.sellingPrice = 65;
  state.categories = "Sedan";
  state.condition = "New";
  state.type = "Hybrid";
  state.make = "Chevrolet";
  state.model = "nice";
  state.year = 2000;
  state.driveType = "AWD";
  state.transmission = "Automatic";
  state.fuelType = "Electric";
  state.mileage = 975;
  state.engineSize = 205;
  state.cylinder = 826;
  state.color = "White";
  state.doorType = "2 Doors";
  state.vin = "frighten";
  state.offerType = "offer";
  state.listingDescription =
    "burn give court social ocean log probably on queen somewhere depend meat dug pipe paid send beneath active silver flame program smooth ever mass";

  featuresCheck.airConditioner = false;
  featuresCheck.leatherSeats = false;
  featuresCheck.touchscreenDisplay = false;
  featuresCheck.childSafetyLocks = false;
  featuresCheck.stabilityControl = false;
  featuresCheck.rainSensingWiper = false;
  featuresCheck.comfortAndConvenience = false;
  featuresCheck.bluetooth = false;
  featuresCheck.vanityMirror = false;
  featuresCheck.digitalOdometer = false;
  featuresCheck.panoramicMoonroof = false;
  featuresCheck.antiLockBraking = false;
  featuresCheck.driverAirBag = false;
  featuresCheck.tractionControl = false;
  featuresCheck.rearSpoiler = false;
  featuresCheck.androidAuto = false;
  featuresCheck.homeLink = false;
  featuresCheck.heater = false;
  featuresCheck.tachometer = false;
  featuresCheck.brakeAssist = false;
  featuresCheck.powerDoorLocks = false;
  featuresCheck.fogLightsFront = false;
  featuresCheck.windowsElectric = false;
  featuresCheck.appleCarplay = false;
  featuresCheck.powerSteering = false;
}

// function abortFetching() {
//   controller.abort();
//   console.log("Cancel fetching");
// }
</script>
