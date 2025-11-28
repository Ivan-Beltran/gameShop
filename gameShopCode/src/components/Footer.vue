<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: '#' },
  { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: '#' },
  { name: 'Instagram', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z', url: '#' },
  { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', url: '#' }
]

const footerLinks = {
  support: [
    { name: 'Centro de Ayuda', url: '#' },
    { name: 'Contacto', url: '#' },
    { name: 'Estado del Servicio', url: '#' },
    { name: 'FAQ', url: '#' }
  ],
  legal: [
    { name: 'Política de Privacidad', url: '#' },
    { name: 'Términos de Servicio', url: '#' },
    { name: 'Cookies', url: '#' },
    { name: 'Licencias', url: '#' }
  ]
}
</script>

<template>
  <footer class="bg-[#1a1a1a] text-gray-300 border-t border-[#3a3a3a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- Grid principal -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 ">
        
        <!-- Columna 1: Branding -->
        <div class="space-y-4 flex flex-col items-center">
          <h3 class="text-2xl font-bold text-white">GameStore</h3>
          <p class="text-sm text-gray-400 text-center">
            Tu tienda de videojuegos favorita. Los mejores títulos al mejor precio.
          </p>
          
          <!-- Redes Sociales -->
          <div class="flex gap-4 pt-2">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="w-10 h-10 bg-[#272727] rounded-full flex items-center justify-center
                     hover:bg-amber-400 transition-colors duration-300 group"
            >
              <svg 
                class="w-5 h-5 fill-gray-300 group-hover:fill-black transition-colors"
                viewBox="0 0 24 24"
              >
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        

        <!-- Columna 3: Soporte -->
        <div>
          <h4 class="text-white font-semibold mb-4">Soporte</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.support" :key="link.name">
              <a 
                :href="link.url"
                class="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 4: Legal -->
        <div>
          <h4 class="text-white font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.legal" :key="link.name">
              <a 
                :href="link.url"
                class="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Newsletter -->
      <div class="border-t border-[#3a3a3a] pt-8 pb-8">
        <div class="max-w-md mx-auto text-center">
          <h4 class="text-white font-semibold mb-2">Suscríbete a nuestro newsletter</h4>
          <p class="text-sm text-gray-400 mb-4">Recibe las últimas ofertas y novedades</p>
          <div class="flex gap-2">
            <input 
              type="email" 
              placeholder="tu@email.com"
              class="flex-1 px-4 py-2 bg-[#272727] border border-[#3a3a3a] rounded-lg
                     text-white placeholder-gray-500 focus:outline-none focus:border-amber-400
                     transition-colors"
            />
            <button 
              class="px-6 py-2 bg-amber-400 text-black font-semibold rounded-lg
                     hover:bg-amber-500 transition-colors duration-200"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-[#3a3a3a] pt-8 text-center">
        <p class="text-sm text-gray-400">
          © {{ currentYear }} GameStore. Todos los derechos reservados.
        </p>
      </div>

    </div>
  </footer>
</template>