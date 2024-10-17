<template>
  <div>
    <input
      type="text"
      v-model="model"
      @input="handle(model)"
      class="border-2"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  handle: (val: string) => void;
}>();

const model = ref("");
</script>
