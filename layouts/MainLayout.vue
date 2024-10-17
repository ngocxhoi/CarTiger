<template>
  <UContainer :ui="ui">
    <LayoutHeaderNav />

    <div>
      <slot />
    </div>

    <LayoutFooter />
  </UContainer>
</template>

<script setup lang="ts">
const ui = {
  base: "mx-auto min-h-screen",
  padding: "px-0 sm:px-4 lg:px-6 xl:px-8 2xl:px-10",
  constrained: "max-w-[1680px] min-w-[450px]",
};
</script>

<style></style>
