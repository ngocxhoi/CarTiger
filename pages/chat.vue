<template>
  <MainLayout>
    <div class="flex space-x-3">
      <div>{{ isModalVisible }}</div>
      <UButton @click="toggle('open')">open</UButton>
      <UButton @click="toggle('close')">close</UButton>
      <div class="flex space-x-3">
        <UButton @click="toggleBubbleVisibility('hide')">hide</UButton>
        <UButton @click="toggleBubbleVisibility('show')">show</UButton>
        <UButton @click="popoutChatWindow()">open popup</UButton>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
useSeoMeta({
  title: "Chat",
});

const { isModalVisible, toggle, toggleBubbleVisibility, popoutChatWindow } =
  useChatWoot();
</script>
