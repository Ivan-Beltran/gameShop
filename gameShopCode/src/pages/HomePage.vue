<script setup>
import Slider from '../components/Slider.vue';
import SecctionTitle from '@/components/SecctionTitle.vue';
import ScrolGalery from '@/components/ScrolGalery.vue';
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

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

        <Slider></Slider>
        <div>
            <SecctionTitle title="nuevos lanzamientos"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="nuevos lanzamientos"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="nuevos lanzamientos"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="nuevos lanzamientos"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="products"></ScrolGalery>
        </div>
        
    </div>
    <Footer></Footer>
</template>