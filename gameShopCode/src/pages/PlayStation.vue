<script setup>
 import SliderPS from '@/components/SliderPS.vue';
 import SecctionTitle from '@/components/SecctionTitle.vue';
 import ScrolGalery from '@/components/ScrolGalery.vue';
 import Footer from '@/components/Footer.vue';
 import { ref,computed } from 'vue';

const products = ref([
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg", price: "20.99", category: "accion" },
  { name: "cyberpunk", imagen: "../public/img/ciberpunk.png", price: "20.99", category: "accion" },
  { name: "expedition 33", imagen: "../public/img/Expedition33.png", price: "20.99", category: "aventura" },
  { name: "god of war 4", imagen: "../public/img/GOW.jpg", price: "20.99", category: "accion" },
  { name: "ghost Of Tesuchimna", imagen: "../public/img/ghost.jpg", price: "20.99", category: "nuevo" },
  { name: "howards legacy", imagen: "../public/img/Hogwarts_legacyboxart.svg.png", price: "20.99", category: "aventura" },
  { name: "FC 26", imagen: "../public/img/fc26.png", price: "20.99", category: "nuevo" },
  { name: "red dead redeption 2", imagen: "../public/img/RDR2.png", price: "20.99", category: "accion" },
  { name: "silent hill 2", imagen: "../public/img/silenhill2ps5.jpg", price: "20.99", category: "nuevo" },
  { name: "astro bot", imagen: "../public/img/Astrobot.jpg", price: "20.99", category: "aventura" },
  { name: "spiderman 2", imagen: "../public/img/spiderman2.png", price: "20.99", category: "nuevo" },
  { name: "arc riders", imagen: "../public/img/arc riders.png", price: "20.99", category: "aventura" },
  { name: "BATTLEFIELD v", imagen: "../public/img/BATTLEFIELD V.jpg", price: "20.99", category: "accion" },
  { name: "bomberman", imagen: "../public/img/bomberman.jpg", price: "20.99", category: "aventura" },
  { name: "elden ring", imagen: "../public/img/Elden ring pc.jpg", price: "20.99", category: "nuevo" },
  { name: "detroit", imagen: "../public/img/detroid become human.png", price: "20.99", category: "nuevo" },
  { name: "beyond", imagen: "../public/img/BEYOND.png", price: "20.99", category: "accion" },
  { name: "call of duty", imagen: "../public/img/CODBO7.png", price: "20.99", category: "accion" },
  { name: "sackboy", imagen: "../public/img/Sackboy.jpg", price: "20.99", category: "aventura" },
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
        <SliderPS></SliderPS>
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