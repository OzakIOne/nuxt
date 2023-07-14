<template>
  <NuxtLink class="underline font-medium" :href="path">
    Go to first lesson
  </NuxtLink>
</template>

<script setup lang="ts">
const firstLesson = await useFirstLesson();
const path = `/course/chapter/1-chapter-1/lesson/${firstLesson.slug}`;
</script>
