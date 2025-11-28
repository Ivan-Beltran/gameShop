<script setup>
import { defineProps, onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
    products: {
        type: Array,
        required: true
    },
    autoScrollInterval: {
        type: Number,
        default: 4000 // tiempo entre desplazamientos (ms)
    }
})

const cart = ref(JSON.parse(localStorage.getItem("cart")) || [])

function addToCArt(product){
    cart.value.push(product)
    localStorage.setItem("cart", JSON.stringify(cart.value))
}

const container = ref(null)
let interval = null

// Función para desplazar una card
const scrollOneCard = () => {
    const el = container.value
    if (!el) return

    // Obtener el ancho de una card + gap
    const firstCard = el.querySelector('.card-item')
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const gap = 16 // gap-4 = 16px

    // Scroll suave de una card
    el.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
    })

    // Reiniciar al llegar al final
    setTimeout(() => {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
            el.scrollTo({ left: 0, behavior: 'smooth' })
        }
    }, 500)
}

onMounted(() => {
    interval = setInterval(scrollOneCard, props.autoScrollInterval)
})

onBeforeUnmount(() => {
    if (interval) clearInterval(interval)
})
</script>

<template>
    <!-- Contenedor scroll -->
    <div ref="container" class="w-full overflow-x-auto scrollbar-hide px-2 py-4">
        <!-- Grid responsivo -->
        <div class="flex gap-4">
            <div v-for="(item, index) in products" :key="item._id || index" class="card-item flex-shrink-0 bg-[#1a1a1a] text-white p-3 rounded-xl shadow-md
               hover:scale-105 hover:shadow-lg transition-all duration-300 border border-[#3a3a3a]
               w-[85vw] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
                <!-- Imagen -->
                <img :src="item.imagen" :alt="item.name" class="w-full h-40 sm:h-48 object-cover rounded-lg" />

                <!-- Info -->
                <div class="flex justify-between items-center mt-3">
                    <h2 class="text-sm sm:text-base md:text-lg font-semibold truncate">
                        {{ item.name }}
                    </h2>
                    <button
                    @click="addToCArt(item)"
                     class="bg-amber-500 hover:bg-amber-600 
                                   text-black font-bold px-4 py-2 rounded-lg 
                                   shadow-lg hover:shadow-amber-400/40 
                                   transition-all duration-300 active:scale-95
                                   animate-pulse">
                        Comprar
                    </button>
                    <h2 class="text-sm sm:text-base md:text-lg font-bold text-amber-400 ml-2">
                        ${{ item.price }}
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ocultar scrollbar */
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>