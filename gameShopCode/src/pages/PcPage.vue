<script setup>
 import PcSlider from '@/components/PcSlider.vue';
 import SecctionTitle from '@/components/SecctionTitle.vue';
 import ScrolGalery from '@/components/ScrolGalery.vue';
 import Footer from '@/components/Footer.vue';
 import { ref,computed } from 'vue';

const products = ref([
  { name: "Battlefield 6", imagen: "../public/img/batelfield6.jpeg", price: "20.99", category: "nuevo lanzamiento" },
  { name: "cyberpunk", imagen: "../public/img/ciberpunk.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "expedition 33", imagen: "../public/img/Expedition33.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "god of war 4", imagen: "../public/img/GOW.jpg", price: "20.99", category: "accion" },
  { name: "ghost Of Tesuchimna", imagen: "../public/img/ghost.jpg", price: "20.99", category: "aventura" },
  { name: "howards legacy", imagen: "../public/img/Hogwarts_legacyboxart.svg.png", price: "20.99", category: "aventura" },
  { name: "FC 26", imagen: "../public/img/fc26.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "minecraft", imagen: "../public/img/MINECRAFT.jpg", price: "20.99", category: "aventura" },
  { name: "red dead redeption 2", imagen: "../public/img/RDR2.png", price: "20.99", category: "accion" },
  { name: "silent hill 2", imagen: "../public/img/silenhill2ps5.jpg", price: "20.99", category: "mas jugado" },
  { name: "dragon ball", imagen: "../public/img/sparkinzero.png", price: "20.99", category: "accion" },
  { name: "spiderman 2", imagen: "../public/img/spiderman2.png", price: "20.99", category: "mas jugado" },
  { name: "arc riders", imagen: "../public/img/arc riders.png", price: "20.99", category: "aventura" },
  { name: "BATTLEFIELD v", imagen: "../public/img/BATTLEFIELD V.jpg", price: "20.99", category: "accion" },
  { name: "bomberman", imagen: "../public/img/bomberman.jpg", price: "20.99", category: "aventura" },
  { name: "elden ring", imagen: "../public/img/Elden ring pc.jpg", price: "20.99", category: "mas jugado" },
  { name: "detroit", imagen: "../public/img/detroid become human.png", price: "20.99", category: "nuevo lanzamiento" },
  { name: "gears of war", imagen: "../public/img/gears.jpg", price: "20.99", category: "accion" },
  { name: "halo infinite", imagen: "../public/img/HALO INFINETE.png", price: "20.99", category: "accion" },
  { name: "no man's sky", imagen: "../public/img/NO MANS SKY.png", price: "20.99", category: "mas jugado" },
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
        <PcSlider></PcSlider>
        <div>
            <SecctionTitle title="Juegos de Accion"></SecctionTitle>
        </div>
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

        <Footer></Footer>
        
    </div>
</template>