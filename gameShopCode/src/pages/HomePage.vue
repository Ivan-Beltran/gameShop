<script setup>
import Slider from '../components/Slider.vue';
import SecctionTitle from '@/components/SecctionTitle.vue';
import ScrolGalery from '@/components/ScrolGalery.vue';
import { ref, computed } from 'vue';
import Footer from '@/components/Footer.vue';

const products = ref([
  { name: "Battlefield 6", imagen: "/img/batelfield6.jpeg", price: "20.99", category: "nuevo lanzamiento" },
  { name: "cyberpunk", imagen: "/img/ciberpunk.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "expedition 33", imagen: "/img/Expedition33.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "god of war 4", imagen: "/img/GOW.jpg", price: "20.99", category: "accion" },
  { name: "ghost Of Tesuchimna", imagen: "/img/ghost.jpg", price: "20.99", category: "aventura" },
  { name: "howards legacy", imagen: "/img/Hogwarts_legacyboxart.svg.png", price: "20.99", category: "aventura" },
  { name: "FC 26", imagen: "/img/fc26.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "minecraft", imagen: "/img/MINECRAFT.jpg", price: "20.99", category: "aventura" },
  { name: "red dead redeption 2", imagen: "/img/RDR2.png", price: "20.99", category: "accion" },
  { name: "silent hill 2", imagen: "/img/silenhill2ps5.jpg", price: "20.99", category: "mas jugado" },
  { name: "dragon ball", imagen: "/img/sparkinzero.png", price: "20.99", category: "accion" },
  { name: "spiderman 2", imagen: "/img/spiderman2.png", price: "20.99", category: "mas jugado" },
  { name: "arc riders", imagen: "/img/arc riders.png", price: "20.99", category: "aventura" },
  { name: "BATTLEFIELD v", imagen: "/img/BATTLEFIELD V.jpg", price: "20.99", category: "accion" },
  { name: "elden ring", imagen: "/img/Elden ring pc.jpg", price: "20.99", category: "mas jugado" },
  { name: "detroit", imagen: "/img/detroid become human.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "gears of war", imagen: "/img/gears.jpg", price: "20.99", category: "accion" },
  { name: "halo infinite", imagen: "/img/HALO INFINETE.png", price: "20.99", category: "accion" },
  { name: "no man's sky", imagen: "/img/NO MANS SKY.png", price: "20.99", category: "mas jugado" },
])

const newReleases = computed(() => 
  products.value.filter(p => p.category === "nuevo lanzamiento")
)

const actionGames = computed(() => 
  products.value.filter(p => p.category === "accion")
)

const mostPlayed = computed(() => 
  products.value.filter(p => p.category === "mas jugado")
)

const adventureGames = computed(() => 
  products.value.filter(p => p.category === "aventura")
)
</script>

<template>
  <div class="bg-[#272727]">

    <Slider />

    <!-- NUEVOS LANZAMIENTOS -->
    <SecctionTitle title="Nuevos Lanzamientos" />
    <div class="px-4">
      <ScrolGalery :products="newReleases" />
    </div>

    <!-- ACCIÓN -->
    <SecctionTitle title="Acción" />
    <div class="px-4">
      <ScrolGalery :products="actionGames" />
    </div>

    <!-- MÁS JUGADOS -->
    <SecctionTitle title="Los Más Jugados" />
    <div class="px-4">
      <ScrolGalery :products="mostPlayed" />
    </div>

    <!-- AVENTURA -->
    <SecctionTitle title="Aventura" />
    <div class="px-4">
      <ScrolGalery :products="adventureGames" />
    </div>

  </div>

  <Footer />
</template>plate>
