<template>
  <div>
    <UCheckbox
      v-model="selected"
      :label="feature.label"
      color="blue"
      class="[&_*]:cursor-pointer"
    />
  </div>
</template>

<script lang="ts" setup>
type Prop = {
  label: string;
  name: string;
  fieldType: string;
};
defineProps<{
  feature: Prop;
}>();

const selected = defineModel<boolean>({
  default: false,
});
</script>
