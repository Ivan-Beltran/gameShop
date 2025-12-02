<script setup>
import Navbar from './Navbar.vue'
import { ref } from 'vue';
import { cart } from "../store/CartStore"
</script>

<template>
  <header class="w-full bg-gradient-to-r from-[#0a0f2d] to-[#020617] backdrop-blur-sm p-3 sm:p-4" role="banner">
    <div class="max-w-6xl mx-auto flex justify-between items-center gap-2 sm:gap-4 lg:gap-6 pt-2">

      <!-- Logo con mejor semántica -->
      <div class="flex items-center gap-2 shrink-0 
      transition-transform duration-300 hover:scale-105 hover:brightness-110">
        <router-link 
          to="/"
          aria-label="GameCenter - Ir a página principal"
          class="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#020617] rounded"
        >
          <img src="../../public/img/logGame.png" class="w-8 sm:w-10 md:w-12" alt="" aria-hidden="true" />
          <span class="font-medium text-sm md:text-lg lg:text-xl leading-tight text-white">
            <span class="block sm:inline">Game</span>
            <span class="block sm:inline">Center</span>
          </span>
        </router-link>
      </div>

      <!-- Navegación principal -->
      <div class="flex-grow flex justify-center items-center">
        <Navbar></Navbar>
      </div>

      <!-- Acciones del usuario -->
      <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0 relative h-15" role="navigation" aria-label="Acciones de usuario">
        
        <!-- Carrito con ARIA -->
        <router-link 
          to="/SalePage"
          :aria-label="`Carrito de compras${cart.length > 0 ? `, ${cart.length} artículos` : ', vacío'}`"
          class="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#020617] rounded"
        >
          <img src="../../icon/icon-cart.svg" alt="" class="w-full h-full object-contain" aria-hidden="true">
          
          <span 
            v-if="cart.length > 0" 
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold
                   w-5 h-5 flex items-center justify-center rounded-full shadow-lg"
            aria-hidden="true"
          >
            {{ cart.length }}
          </span>
        </router-link>

        <!-- Perfil -->
        <router-link 
          to="/profile"
          aria-label="Mi perfil"
          class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#020617] rounded"
        >
          <img src="../../public/icon/icon-user.svg" alt="" class="w-full h-full object-contain" aria-hidden="true">
        </router-link>

        <!-- Iniciar sesión -->
        <a 
          href="/login.html"
          aria-label="Iniciar sesión"
          class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#020617] rounded"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5"
            stroke="white" 
            class="w-full h-full"
            aria-hidden="true"
            focusable="false"
          >
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
