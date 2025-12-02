<script setup>
import HeaderVue from './Header.vue';
</script>

<template>
    <div class="relative w-full">
        <div class="">
            <HeaderVue></HeaderVue>
        </div>
        <div class="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[60vh]">
            <img src="../../public/img/PlaySlider.png" alt="psslider" class="w-full h-full">

            <div
                class="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-transparent pointer-events-none">
            </div>

        </div> 

    </div>
</template>


<style scoped></style>