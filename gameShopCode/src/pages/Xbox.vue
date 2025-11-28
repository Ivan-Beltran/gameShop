<script setup>
import XboxSlider from '@/components/XboxSlider.vue';
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
        <xbox-slider></xbox-slider>

        <div>
            <SecctionTitle title="Juegos de Accion"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="Juegos de Estrategia"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>

        <Footer></Footer>
    </div>
</template>
<style scoped>

</style>