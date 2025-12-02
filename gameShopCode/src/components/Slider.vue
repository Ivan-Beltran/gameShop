<script setup>
import HeaderVue from './Header.vue';
</script>

<template>
  <div class="relative w-full">
    <div class="">
      <HeaderVue></HeaderVue>
    </div>

    <!-- Banner principal -->
    <section aria-label="Oferta destacada: Battlefield 6">
      <div class="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]">
        <img 
          src="../../public/img/batelfield6.jpeg" 
          alt="Battlefield 6 - Juego destacado" 
          class="w-full h-full object-cover"
          loading="eager"
        >

        <div
          class="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        ></div>
      </div>

      <!-- Card de descuento -->
      <aside 
        class="absolute top-[60%] left-[5%] -translate-y-1/2
          w-36 sm:w-44 md:w-72
          bg-black/40 backdrop-blur-sm
          p-3 sm:p-4 md:p-5 
          rounded-xl shadow-xl
          border border-white/10
          flex flex-col gap-3 sm:gap-4 text-white"
        aria-label="Información de oferta"
      >

        <h2 class="font-bold 
           text-sm sm:text-base md:text-xl 
           leading-tight">
          ¡Adquiérelo ahora a un precio increíble!
        </h2>

        <div class="flex items-center gap-2 sm:gap-4">

          <span class="bg-amber-500/90 text-black font-bold 
              px-2 py-0.5 sm:px-3 sm:py-1 
              rounded-md text-xs sm:text-sm"
              aria-label="Descuento del 20%">
            -20%
          </span>

          <p class="text-lg sm:text-xl md:text-2xl font-extrabold" aria-label="Precio de oferta: $30.99">
            $30.99
          </p>
        </div>

      </aside>
    </section>

  </div>
</template>


<style scoped></style>