<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
    <header class="w-full bg-gradient-to-r from-[#0a0f2d] to-[#020617] backdrop-blur-sm p-3 sm:p-4">
        <div class="max-w-6xl mx-auto flex justify-between items-center gap-2 sm:gap-4 lg:gap-6 pt-2">

            <!-- Logo -->
            <div class="flex items-center gap-2 shrink-0">
                <img src="../../public/icon/loogo.png" class="w-8 sm:w-10 md:w-12" alt="Logo" />
                <h1 class="font-medium text-sm md:text-lg lg:text-xl leading-tight text-white">
                    <span class="block sm:inline">Game</span>
                    <span class="block sm:inline">Center</span>
                </h1>
            </div>

            <!-- Navbar - Ahora visible en todas las pantallas -->
            <div class="flex-grow flex justify-center items-center">
                <Navbar></Navbar>
            </div>

            <!-- Iconos de carrito y usuario -->
            <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <button
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                    <router-link to="/SalePage">
                        <img src="../../icon/icon-cart.svg" alt="Carrito" class="w-full h-full object-contain">
                    </router-link>
                </button>

                <button
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                    <img src="../../icon/icon-user.svg" alt="Usuario" class="w-full h-full object-contain">
                </button>
            </div>
        </div>
    </header>
</template>
