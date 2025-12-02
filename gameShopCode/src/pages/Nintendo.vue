<script setup>
import NintendoSlider from '@/components/NintendoSlider.vue';
import SecctionTitle from '@/components/SecctionTitle.vue';
 import ScrolGalery from '@/components/ScrolGalery.vue';
 import Footer from '@/components/Footer.vue';
 import { ref , computed} from 'vue';

const products = ref([
  { name: "mario all star", imagen: "../public/img/3DALLSTAR.png", price: "20.99", category: "mario" },
  { name: "pokemon", imagen: "../public/img/POKEN.jpg", price: "20.99", category: "nuevo" },
  { name: "expedition 33", imagen: "../public/img/Expedition33.png", price: "20.99", category: "nuevo" },
  { name: "zelda BOTW", imagen: "../public/img/BOTW.png", price: "20.99", category: "aventura" },
  { name: "mincecraft", imagen: "../public/img/MINECRAFT.jpg", price: "20.99", category: "aventura" },
  { name: "mario maker", imagen: "../public/img/mariomaker.png", price: "20.99", category: "mario" },
  { name: "FC 26", imagen: "../public/img/fc26.png", price: "20.99", category: "nuevo" },
  { name: "zelda links awakening", imagen: "../public/img/ZLA.jpg", price: "20.99", category: "aventura" },
  { name: "smash ultimate", imagen: "../public/img/SMASH ULTIMATE.png", price: "20.99", category: "mario" },
  { name: "sparkin zero", imagen: "../public/img/sparkinzero.png", price: "20.99", category: "nuevo" },
  { name: "mario odyssey", imagen: "../public/img/SMO.jpg", price: "20.99", category: "mario" },
])

const newReleases = computed(() => 
  products.value.filter(p => p.category === "nuevo")
)

const marioGames = computed(() => 
  products.value.filter(p => p.category === "mario")
)



const adventureGames = computed(() => 
  products.value.filter(p => p.category === "aventura")
)

</script>

<template>
    <div class="bg-[#272727]">
        <NintendoSlider></NintendoSlider>

        <div>
            <SecctionTitle title="Saga Mario Bros"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="marioGames"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="Aventura"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="adventureGames"></ScrolGalery>
        </div>

         <div>
            <SecctionTitle title="Nuevos Lanzamientos"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="newReleases"></ScrolGalery>
        </div>

        <Footer></Footer>
    </div>
</template>
<style scoped>

</style>