<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function registerUser() {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return
  }

  // Guardar datos en localStorage
  localStorage.setItem('userName', name.value)
  localStorage.setItem('userEmail', email.value)
  localStorage.setItem('userPassword', password.value)

  router.push('/')
}
</script>

<template>
  <div class="bg-[#272727] font-['Inter'] flex items-center justify-center min-h-screen text-white">
    <div class="w-full max-w-md p-8 rounded-lg shadow-xl bg-[#1f1f1f] border border-gray-800">

      <!-- LOGO -->
      <div class="text-center mb-8">
        <img src="/img/logGame.png" alt="GameCenter Logo" class="h-16 mx-auto mb-4 object-contain">
        <h2 class="text-3xl font-normal text-[#ff761b]">Crear Cuenta</h2>
        <p class="mt-2 text-sm text-gray-400">Únete a la comunidad de GameCenter</p>
      </div>

      <!-- FORMULARIO -->
      <form @submit.prevent="registerUser" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-300">Nombre Completo</label>
          <input
            v-model="name"
            type="text"
            required
            placeholder="Tu Nombre"
            class="block w-full px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md text-white 
                   placeholder-gray-500 focus:outline-none focus:border-[#ff761b] focus:ring-1 
                   focus:ring-[#ff761b] sm:text-sm transition-colors"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300">Correo Electrónico</label>
          <input
            v-model="email"
            type="email"
            required
            placeholder="ejemplo@correo.com"
            class="block w-full px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md text-white 
                   placeholder-gray-500 focus:outline-none focus:border-[#ff761b] focus:ring-1 
                   focus:ring-[#ff761b] sm:text-sm transition-colors"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300">Contraseña</label>
          <input
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            class="block w-full px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md text-white 
                   placeholder-gray-500 focus:outline-none focus:border-[#ff761b] focus:ring-1 
                   focus:ring-[#ff761b] sm:text-sm transition-colors"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300">Confirmar Contraseña</label>
          <input
            v-model="confirmPassword"
            type="password"
            required
            placeholder="••••••••"
            class="block w-full px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md text-white 
                   placeholder-gray-500 focus:outline-none focus:border-[#ff761b] focus:ring-1 
                   focus:ring-[#ff761b] sm:text-sm transition-colors"
          >
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium 
                 text-white bg-[#ff761b] hover:bg-[#e06516] focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-[#ff761b] transition-colors"
        >
          Registrarse
        </button>
      </form>

      <!-- FOOTER -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-400">
          ¿Ya tienes una cuenta?
          <router-link to="/login" class="font-medium text-[#ff761b] hover:text-[#e06516]">
            Inicia Sesión
          </router-link>
        </p>

        <div class="mt-4">
          <router-link to="/" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            ← Volver al inicio
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
