<template>
  <div class="md:col-span-2">
    <!-- Image -->
    <div class="w-full mt-6">
      <img
        v-if="data?.carImage[0].imageUrl"
        :src="data.carImage[0].imageUrl"
        class="w-full h-[500px] object-cover rounded-xl border border-[#eef0fc]"
        alt=""
      />

      <!-- Description -->
      <div class="p-5 mt-6 rounded-xl bg-[#eef0fc] dark:bg-[#3d3f49] shadow-md">
        <h2 class="my-2 font-medium text-2xl">Description</h2>
        <p>{{ data?.listingDescription }}</p>
      </div>
    </div>

    <!-- Feature -->
    <div
      class="w-full mt-6 bg-[#eef0fc] dark:bg-[#3d3f49] shadow-md rounded-xl"
    >
      <div class="p-5">
        <h2 class="my-2 font-medium text-2xl">Features</h2>
        <div
          v-if="data?.features"
          class="grid gap-7 mt-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="(feature, index) in formatFeatures(data.features)"
            :key="index"
            class="flex items-center gap-2"
          >
            <div
              class="rounded-full p-1 bg-blue-100 flex items-center justify-center"
            >
              <Icon name="lucide:check" size="20" class="text-blue-500" />
            </div>
            <span class="text-sm">{{ formatText(String(index)) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Financial Calculator -->
    <div
      class="w-full mt-6 bg-[#eef0fc] dark:bg-[#3d3f49] shadow-md rounded-xl"
    >
      <div class="p-5">
        <h2 class="my-2 font-medium text-2xl">Features</h2>
        <div class="grid gap-5 mt-5 md:grid-cols-2">
          <UFormGroup label="Price $">
            <UInput
              v-model="dataRef.carPrice"
              type="number"
              color="white"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Interest Rate">
            <UInput
              v-model="dataRef.interestRate"
              type="number"
              color="white"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Loan Term (Months)">
            <UInput
              v-model="dataRef.loanTerm"
              type="number"
              color="white"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Down Payment">
            <UInput
              v-model="dataRef.downPayment"
              type="number"
              color="white"
              size="md"
            />
          </UFormGroup>
        </div>
        <h2
          v-if="Boolean(dataRef.monthPayment)"
          class="font-semibold text-base mt-5"
        >
          Your monthly payment:
          <span class="text-red-400 text-xl underline ml-2"
            >${{ dataRef.monthPayment }}</span
          >
        </h2>
        <div class="mt-5 flex items-center justify-end">
          <UButton
            @click="handleCalculate()"
            size="md"
            icon="i-heroicons-calculator"
            label="Calculate"
          />
        </div>
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
type Feature = {
  [key: string]: boolean;
};
defineProps<{
  data?: CarListing | null;
}>();

const dataRef = ref({
  carPrice: 4000,
  interestRate: 5,
  loanTerm: 36,
  downPayment: 5000,
  monthPayment: "",
});

function formatFeatures(features: string): Feature[] {
  return JSON.parse(features);
}

function formatText(str: string): string {
  return (
    str
      // Tách chuỗi dựa trên các ký tự viết hoa
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // Viết hoa chữ cái đầu tiên của mỗi từ
      .replace(/^./, str[0].toUpperCase())
  );
}

function handleCalculate() {
  const principal = dataRef.value.carPrice - dataRef.value.downPayment;
  const monthlyInterestRate = dataRef.value.interestRate / 1200;
  const monthlyPayment =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, dataRef.value.loanTerm)) /
    (Math.pow(1 + monthlyInterestRate, dataRef.value.loanTerm) - 1);
  dataRef.value.monthPayment = monthlyPayment.toFixed(2);
}
</script>
