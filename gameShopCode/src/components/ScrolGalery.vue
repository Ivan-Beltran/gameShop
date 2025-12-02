<script setup>
import { defineProps, onMounted, onBeforeUnmount, ref } from 'vue'
import { cart, addToCart } from "../store/CartStore"

const props = defineProps({
    products: {
        type: Array,
        required: true
    },
    autoScrollInterval: {
        type: Number,
        default: 3000
    }
})


function isInCart(product) {
    return cart.value.some(p => p.name === product.name)
}

function addToCArt(product) {
    if (!isInCart(product)) {
        addToCart(product)
    }
}

const container = ref(null)
let interval = null

function startAutoScroll() {
    if (interval) return
    interval = setInterval(scrollOneCard, props.autoScrollInterval)
}

function stopAutoScroll() {
    if (interval) {
        clearInterval(interval)
        interval = null
    }
}

const scrollOneCard = () => {
    const el = container.value
    if (!el) return

    const firstCard = el.querySelector('.card-item')
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const gap = 16 

    el.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
    })

    setTimeout(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
            el.scrollTo({ left: 0, behavior: 'smooth' })
        }
    }, 600)
}

const scrollLeft = () => {
    const el = container.value
    if (!el) return

    const firstCard = el.querySelector('.card-item')
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const gap = 16

    el.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
    })
}

const scrollRight = () => {
    const el = container.value
    if (!el) return

    const firstCard = el.querySelector('.card-item')
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const gap = 16

    el.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
    })
}

onMounted(() => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoScroll()
        }
    })
})

onBeforeUnmount(() => {
    stopAutoScroll()
})
</script>

<template>
  <section aria-label="Galería de productos">
    <div class="relative w-full">
      
      <!-- Botón izquierdo -->
      <button 
        class="absolute left-2 top-1/2 -translate-y-1/2
               bg-amber-500 p-2 rounded-full shadow-md 
               z-10 hover:scale-110 hover:bg-amber-600 transition
               focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        @click="scrollLeft"
        aria-label="Desplazar productos hacia la izquierda"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 rotate-180" aria-hidden="true" focusable="false">
          <path fill="white"
            d="M12,25a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L18.59,16l-7.3-7.29a1,1,0,1,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42l-8,8A1,1,0,0,1,12,25Z" />
        </svg>
      </button>

      <div 
        ref="container" 
        class="w-full overflow-x-auto scrollbar-hide px-2 py-4" 
        @mouseenter="startAutoScroll"
        @mouseleave="stopAutoScroll" 
        @touchstart.passive="startAutoScroll" 
        @touchend.passive="stopAutoScroll"
        @focusin="startAutoScroll" 
        @focusout="stopAutoScroll"
        role="list"
        aria-label="Lista de productos en oferta"
      >

        <div class="flex gap-4">
          <article 
            v-for="(item, index) in products" 
            :key="item?.name || `product-${index}`" 
            class="card-item flex-shrink-0 bg-[#1a1a1a] text-white p-3 rounded-xl shadow-md
                   hover:scale-105 hover:shadow-lg transition-all duration-300 border border-[#3a3a3a]
                   w-[85vw] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            role="listitem"
          >

            <img 
              :src="item.imagen" 
              :alt="`Imagen de ${item.name}`" 
              class="w-full h-40 sm:h-48 object-cover rounded-lg" 
            />

            <div class="flex justify-between items-center mt-3">
              <h2 class="text-sm sm:text-base md:text-lg font-semibold truncate">
                {{ item.name }}
              </h2>
              
              <button 
                @click="addToCArt(item)" 
                :class="[
                  'cursor-pointer font-bold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 active:scale-95',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2',
                  isInCart(item)
                    ? 'bg-white text-black shadow-white/40 focus:ring-white'
                    : 'bg-amber-500 hover:bg-amber-600 text-black hover:shadow-amber-400/40 animate-pulse focus:ring-amber-400'
                ]"
                :aria-label="isInCart(item) ? `${item.name} ya está en el carrito` : `Agregar ${item.name} al carrito por $${item.price}`"
                :disabled="isInCart(item)"
              >
                {{ isInCart(item) ? 'En carrito' : 'Comprar' }}
              </button>

              <p class="text-sm sm:text-base md:text-lg font-bold text-amber-400 ml-2" aria-label="precio">
                ${{ item.price }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- Botón derecho -->
      <button 
        class="absolute right-2 top-1/2 -translate-y-1/2
               bg-amber-500 p-2 rounded-full shadow-md 
               z-10 hover:scale-110 hover:bg-amber-600 transition
               focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        @click="scrollRight"
        aria-label="Desplazar productos hacia la derecha"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true" focusable="false">
          <path fill="white"
            d="M12,25a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L18.59,16l-7.3-7.29a1,1,0,1,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42l-8,8A1,1,0,0,1,12,25Z" />
        </svg>
      </button>

    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>