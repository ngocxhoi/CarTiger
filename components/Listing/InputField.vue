<template>
  <UFormGroup :name="list.name">
    <template #label>
      <div class="flex items-center gap-1 pb-1">
        <div
          class="rounded-full flex items-center justify-center size-7 bg-blue-300 dark:bg-blue-600"
        >
          <Icon :name="`lucide:${list.icon}`" size="18" />
        </div>
        <span class="text-base">{{ list.label }}</span>
        <span v-if="list.required" class="text-red-500 text-lg">*</span>
      </div>
    </template>

    <template v-if="list.fieldType == 'text'">
      <UInput
        v-model="model"
        :placeholder="`Enter your ${list.label}`"
        :name="list.name"
        color="white"
        size="md"
      />
    </template>

    <template v-if="list.fieldType == 'number'">
      <UInput
        v-model="model"
        type="number"
        :placeholder="`Enter your ${list.label}`"
        :name="list.name"
        color="white"
        size="md"
      />
    </template>

    <template v-if="list.fieldType == 'select'">
      <USelect
        v-model="model"
        color="white"
        :options="list.options"
        size="md"
      />
    </template>

    <template v-if="list.fieldType == 'textarea'">
      <UTextarea autoresize v-model="model" size="md" />
    </template>
  </UFormGroup>
</template>

<script lang="ts" setup>
type Prop = {
  label: string;
  name: string;
  fieldType: string;
  required?: boolean;
  column: number;
  icon: string;
  options?: string[];
};
const prop = defineProps<{
  list: Prop;
}>();

const { list } = toRefs(prop);

const model = defineModel<any>();
</script>
