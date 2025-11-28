<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, computed } from 'vue';
const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);

const total = computed(() =>
    cart.value.reduce((sum, item) => sum + parseFloat(item.price), 0)
);

function removeItem(index){
    cart.value.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(cart.value)); 
}

</script>

<template>

    <div class="bg-[#272727] min-h-[100vh]">
        <Header></Header>
        <div v-if="cart.length>0">
            <h1 class="text-md md:text-xl lg:text-3xl text-white px-10 py-5">productos en el carrito</h1>
        </div>
        <div v-else>
            <h1 class="text-md md:text-xl lg:text-3xl text-white px-10 py-5">no hay productos en el carrito</h1>
        </div>
        

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center w-full px-5">
            <div class="w-full  flex flex-col items-center p-2 gap-4">

                <div v-for="(product, index) in cart" :key="index" class="bg-[#393e50]
                    w-[90%] sm:w-[80%] md:w-[95%] 
                   flex flex-row gap-5 items-center p-4 rounded-lg shadow">
                    <div class="w-[55%]">
                        <img :src="product.imagen" alt="" class="w-full rounded-md">
                    </div>

                    <div class="flex flex-row gap-10 ">
                        <div class="flex flex-col flex-1">
                            <h2 class="font-semibold text-lg sm:text-xl text-white">
                                {{ product.name }}
                            </h2>

                            <h3 class=" text-base sm:text-lg font-medium text-[#ff761b]">
                                ${{ product.price }}
                            </h3>

                        </div>
                        <!-- Botón eliminar -->
                        <button @click="removeItem(index)" class="mt-3 bg-red-500 hover:bg-red-600 
                         text-white px-3 py-1 rounded-lg
                         text-sm font-semibold w-fit
                         active:scale-95 transition">
                            Eliminar
                        </button>
                    </div>

                </div>
            </div>

            <div class="w-full flex justify-center mb-2">
                <div class="bg-[#1f1f1f] text-white w-full max-w-[450px]
                       p-6 rounded-xl shadow-xl sticky top-20">
                    <h2 class="text-xl font-bold mb-6 text-center">Resumen de compra</h2>

                    <div class="flex justify-between text-lg mb-4">
                        <span class="text-gray-300">Productos:</span>
                        <span class="font-semibold">{{ cart.length }}</span>
                    </div>

                    <div class="flex justify-between text-lg mb-6">
                        <span class="text-gray-300">Total:</span>
                        <span class="font-bold text-[#ff9d3c]">${{ total.toFixed(2) }}</span>
                    </div>

                    <button class="w-full bg-[#ff7a1b] hover:bg-[#ff8f3d] text-black font-bold py-3 
                           rounded-lg transition active:scale-95 shadow-lg">
                        Confirmar compra
                    </button>
                </div>
            </div>
    </div>

    <Footer></Footer>

    </div>




</template>