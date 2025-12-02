<script setup>
 import SliderPS from '@/components/SliderPS.vue';
 import SecctionTitle from '@/components/SecctionTitle.vue';
 import ScrolGalery from '@/components/ScrolGalery.vue';
 import Footer from '@/components/Footer.vue';
 import { ref,computed } from 'vue';

const products = ref([
  { name: "Battlefield 6", imagen: "/img/batelfield6.jpeg", price: "20.99", category: "accion" },
  { name: "cyberpunk", imagen: "/img/ciberpunk.png", price: "20.99", category: "accion" },
  { name: "expedition 33", imagen: "/img/Expedition33.png", price: "20.99", category: "aventura" },
  { name: "god of war 4", imagen: "/img/GOW.jpg", price: "20.99", category: "accion" },
  { name: "ghost Of Tesuchimna", imagen: "/img/ghost.jpg", price: "20.99", category: "nuevo" },
  { name: "howards legacy", imagen: "/img/Hogwarts_legacyboxart.svg.png", price: "20.99", category: "aventura" },
  { name: "FC 26", imagen: "/img/fc26.png", price: "20.99", category: "nuevo" },
  { name: "red dead redeption 2", imagen: "/img/RDR2.png", price: "20.99", category: "accion" },
  { name: "silent hill 2", imagen: "/img/silenhill2ps5.jpg", price: "20.99", category: "nuevo" },
  { name: "astro bot", imagen: "/img/Astrobot.jpg", price: "20.99", category: "aventura" },
  { name: "spiderman 2", imagen: "/img/spiderman2.png", price: "20.99", category: "nuevo" },
  { name: "arc riders", imagen: "/img/arc riders.png", price: "20.99", category: "aventura" },
  { name: "BATTLEFIELD v", imagen: "/img/BATTLEFIELD V.jpg", price: "20.99", category: "accion" },
  { name: "bomberman", imagen: "/img/bomberman.jpg", price: "20.99", category: "aventura" },
  { name: "elden ring", imagen: "/img/Elden ring pc.jpg", price: "20.99", category: "nuevo" },
  { name: "detroit", imagen: "/img/detroid become human.png", price: "20.99", category: "nuevo" },
  { name: "beyond", imagen: "/img/BEYOND.png", price: "20.99", category: "accion" },
  { name: "call of duty", imagen: "/img/CODBO7.png", price: "20.99", category: "accion" },
  { name: "sackboy", imagen: "/img/Sackboy.jpg", price: "20.99", category: "aventura" },
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