<script setup>
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const userName = ref('Usuario');

onMounted(() => {
  const storedName = localStorage.getItem('userName');
  if (storedName) {
    userName.value = storedName;
  }
});
</script>

<template>
  <div class="bg-[#272727] min-h-screen flex flex-col">
    <Header />
    
    <main class="flex-grow flex items-center justify-center p-4">
      <div class="w-full max-w-md p-8 rounded-lg shadow-xl bg-[#1f1f1f] border border-gray-800 text-center">
        <div class="w-24 h-24 mx-auto bg-[#2d2d2d] rounded-full flex items-center justify-center mb-6 border-2 border-[#ff761b]">
          <img src="../../public/icon/icon-user.svg" alt="User" class="w-12 h-12 opacity-80">
        </div>
        
        <h2 class="text-3xl font-normal text-[#ff761b] mb-2">Perfil de Usuario</h2>
        <p class="text-gray-400 mb-8">Bienvenido de nuevo</p>
        
        <div class="bg-[#2d2d2d] p-4 rounded-md border border-gray-700 mb-6">
          <p class="text-sm text-gray-500 mb-1">Nombre</p>
          <p class="text-xl text-white font-medium">{{ userName }}</p>
        </div>
        
        <button @click="$router.push('/')" class="text-[#ff761b] hover:text-[#e06516] font-medium transition-colors">
          ← Volver a la tienda
        </button>
      </div>
    </main>

    <Footer />
  </div>
</template>
