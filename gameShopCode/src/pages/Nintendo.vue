<script setup>
import NintendoSlider from '@/components/NintendoSlider.vue';
import SecctionTitle from '@/components/SecctionTitle.vue';
 import ScrolGalery from '@/components/ScrolGalery.vue';
 import Footer from '@/components/Footer.vue';
 import { ref } from 'vue';

 const products = ref([
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg",price:"20.99" },
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg",price:"20.99" },
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg",price:"20.99" },
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg",price:"20.99" },
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg",price:"20.99" },
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg",price:"20.99" },
])

</script>

<template>
    <div class="bg-[#272727]">
        <NintendoSlider></NintendoSlider>

        <div>
            <SecctionTitle title="Saga Mario Bros"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="Saga de Zelda"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>

        <Footer></Footer>
    </div>
</template>
<style scoped>

</style>