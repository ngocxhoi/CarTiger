<template>
  <div
    class="flex items-center justify-between rounded-xl shadow-md hover:shadow-lg transition-all duration-300 dark:shadow-[#3d3f49] py-4"
  >
    <NuxtLink class="text-3xl font-bold" to="/">CarTiger</NuxtLink>
    <ul class="hidden md:flex gap-16">
      <li
        v-for="list in listNav"
        class="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
      >
        <NuxtLink :to="list.link">{{ list.title }}</NuxtLink>
      </li>
    </ul>
    <ClientOnly>
      <div v-if="!isSignedIn" class="flex items-center gap-3">
        <ColorSwitch />
        <SignInButton mode="modal" force-redirect-url="/">
          <UButton color="black" label="SignIn" />
        </SignInButton>
      </div>
      <div v-else class="flex items-center gap-3">
        <ColorSwitch />
        <UserButton />
        <NuxtLink to="/profile">
          <UButton color="black" label="Profile" />
        </NuxtLink>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { isSignedIn } = useUser();

const listNav = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Search",
    link: "/search",
  },
  {
    title: "New",
    link: "/",
  },
  {
    title: "Preowned",
    link: "/",
  },
];
</script>

<style></style>
