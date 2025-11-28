<script setup>
    defineProps({
      title: {
        type: String,
        required: true
      }
    })
</script>
<template>
  <h2 class="text-2xl font-normal mb-4 ml-10 p-4 text-[#ff761b]">
    {{ title }}
  </h2>
</template>

