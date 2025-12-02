<script setup>
import XboxSlider from '@/components/XboxSlider.vue';
import SecctionTitle from '@/components/SecctionTitle.vue';
 import ScrolGalery from '@/components/ScrolGalery.vue';
 import Footer from '@/components/Footer.vue';
 import { ref,computed } from 'vue';

const products = ref([
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg", price: "20.99", category: "accion" },
  { name: "cyberpunk", imagen: "../public/img/ciberpunk.png", price: "20.99", category: "accion" },
  { name: "BATTLEFIELD v", imagen: "../public/img/BATTLEFIELD V.jpg", price: "20.99", category: "accion" },
  { name: "expedition 33", imagen: "../public/img/Expedition33.png", price: "20.99", category: "aventura" },
  { name: "crash bandicoot", imagen: "../public/img/crash.png", price: "20.99", category: "aventura" },
  { name: "FNAF", imagen: "../public/img/FNAF3.jpg", price: "20.99", category: "aventura" },
  { name: "forza 5", imagen: "../public/img/FORZA.jpg", price: "20.99", category: "nuevo" },
  { name: "FC 26", imagen: "../public/img/fc26.png", price: "20.99", category: "nuevo" },
  { name: "gears of war", imagen: "../public/img/gears.jpg", price: "20.99", category: "accion" },
  { name: "halo infinite", imagen: "../public/img/HALO INFINETE.png", price: "20.99", category: "nuevo" },
  { name: "lies of p", imagen: "../public/img/liesofp.jpg", price: "20.99", category: "nuevo" },
  { name: "mincecraft", imagen: "../public/img/MINECRAFT.jpg", price: "20.99", category: "aventura" },
  { name: "arc riders", imagen: "../public/img/arc riders.png", price: "20.99", category: "aventura" },
  { name: "nija 4", imagen: "../public/img/NINJA GAIDEN 4.png", price: "20.99", category: "accion" },
  { name: "elden ring", imagen: "../public/img/Elden ring pc.jpg", price: "20.99", category: "nuevo" },
  { name: "detroit", imagen: "../public/img/detroid become human.png", price: "20.99", category: "nuevo" },
  { name: "no man's sky", imagen: "../public/img/NO MANS SKY.png", price: "20.99", category: "aventura" },
  { name: "call of duty", imagen: "../public/img/CODBO7.png", price: "20.99", category: "accion" },
  { name: "sonic", imagen: "../public/img/sonic.png", price: "20.99", category: "aventura" },
  
])

const newReleases = computed(() => 
  products.value.filter(p => p.category === "nuevo")
)

const actionGames = computed(() => 
  products.value.filter(p => p.category === "accion")
)



const adventureGames = computed(() => 
  products.value.filter(p => p.category === "aventura")
)

</script>

<template>
    <div class="bg-[#272727]">
        <xbox-slider></xbox-slider>

        <div>
            <SecctionTitle title="Nuevos Lanzamientos"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="newReleases"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="Juegos de Aventura"></SecctionTitle>
        </div>
        <div class="px-4">

            <ScrolGalery :products="adventureGames"></ScrolGalery>
        </div>

        <div>
            <SecctionTitle title="Jueogos de Accion"></SecctionTitle>
        </div>

        <div class="px-4">

            <ScrolGalery :products="actionGames"></ScrolGalery>
        </div>

        <Footer></Footer>
    </div>
</template>
<style scoped>

</style>