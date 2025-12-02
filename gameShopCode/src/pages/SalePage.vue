<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, computed, watch, nextTick } from 'vue';
import { cart } from "../store/CartStore"

const total = computed(() =>
    cart.value.reduce((sum, item) => sum + parseFloat(item.price), 0)
);

const showModal = ref(false);
const showSuccess = ref(false);
const errorMessage = ref('');


const modalRef = ref(null);
const firstFocusableElement = ref(null);
const lastFocusableElement = ref(null);
const previousActiveElement = ref(null);

const cardData = ref({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
});


const announcement = ref('');

function announceToScreenReader(message) {
    announcement.value = message;
    setTimeout(() => {
        announcement.value = '';
    }, 1000);
}

function removeItem(index) {
    const productName = cart.value[index].name;
    cart.value.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart.value));
    
    
    announceToScreenReader(`${productName} ha sido eliminado del carrito. ${cart.value.length} productos restantes.`);
}

function trapFocus(e) {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement.value) {
                e.preventDefault();
                lastFocusableElement.value?.focus();
            }
        } else {
            if (document.activeElement === lastFocusableElement.value) {
                e.preventDefault();
                firstFocusableElement.value?.focus();
            }
        }
    }
    

    if (e.key === 'Escape') {
        closeModal();
    }
}

async function openPaymentModal() {
    if (cart.value.length === 0) {
        errorMessage.value = 'El carrito está vacío';
        announceToScreenReader('Error: El carrito está vacío');
        setTimeout(() => {
            errorMessage.value = '';
        }, 3000);
        return;
    }
    
    previousActiveElement.value = document.activeElement;
    showModal.value = true;
    
    await nextTick();
 
    const focusableElements = modalRef.value?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements && focusableElements.length > 0) {
        firstFocusableElement.value = focusableElements[0];
        lastFocusableElement.value = focusableElements[focusableElements.length - 1];
        firstFocusableElement.value?.focus();
    }
    
    document.addEventListener('keydown', trapFocus);
    announceToScreenReader('Modal de pago abierto');
}

function closeModal() {
    showModal.value = false;
    cardData.value = {
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    };
    errorMessage.value = '';
    
    document.removeEventListener('keydown', trapFocus);

    nextTick(() => {
        previousActiveElement.value?.focus();
    });
    
    announceToScreenReader('Modal cerrado');
}

function formatCardNumber(event) {
    let value = event.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    cardData.value.cardNumber = formattedValue;
}

function formatExpiryDate(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    cardData.value.expiryDate = value;
}

function processPayment() {
    if (!cardData.value.cardNumber || cardData.value.cardNumber.replace(/\s/g, '').length !== 16) {
        errorMessage.value = 'Número de tarjeta inválido (debe tener 16 dígitos)';
        announceToScreenReader(errorMessage.value);
        return;
    }
    if (!cardData.value.cardName) {
        errorMessage.value = 'Por favor ingresa el nombre del titular';
        announceToScreenReader(errorMessage.value);
        return;
    }
    if (!cardData.value.expiryDate || cardData.value.expiryDate.length !== 5) {
        errorMessage.value = 'Fecha de expiración inválida (MM/AA)';
        announceToScreenReader(errorMessage.value);
        return;
    }
    if (!cardData.value.cvv || cardData.value.cvv.length !== 3) {
        errorMessage.value = 'CVV inválido (debe tener 3 dígitos)';
        announceToScreenReader(errorMessage.value);
        return;
    }

    announceToScreenReader('Procesando pago...');

    setTimeout(() => {
        const itemCount = cart.value.length;
        cart.value = [];
        localStorage.setItem("cart", JSON.stringify(cart.value));
        
        showModal.value = false;
        showSuccess.value = true;
        
        announceToScreenReader(`Pago exitoso. ${itemCount} productos comprados.`);
        
        setTimeout(() => {
            showSuccess.value = false;
        }, 3000);
    }, 1000);
}
</script>

<template>
    <div class="bg-[#272727] min-h-[100vh] relative">
        <Header></Header>
        
        <!-- MEJORA: Región live para anuncios -->
        <div 
            role="status" 
            aria-live="polite" 
            aria-atomic="true" 
            class="sr-only"
        >
            {{ announcement }}
        </div>


        <div 
            v-if="errorMessage" 
            role="alert"
            class="fixed top-20 left-1/2 -translate-x-1/2 z-50 
                   bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg
                   animate-bounce"
        >
            {{ errorMessage }}
        </div>
        

        <header class="px-10 py-5">
            <h1 class="text-md md:text-xl lg:text-3xl text-white">
                <span v-if="cart.length > 0">
                    Productos en el carrito
                    <span class="sr-only">({{ cart.length }} productos)</span>
                </span>
                <span v-else>No hay productos en el carrito</span>
            </h1>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center w-full px-5 pb-10">
            
            <section 
                class="w-full flex flex-col items-center p-2 gap-4"
                aria-label="Lista de productos en el carrito"
            >
                <ul class="w-full flex flex-col items-center gap-4">
                    <li 
                        v-for="(product, index) in cart" 
                        :key="index" 
                        class="bg-[#393e50] w-[90%] sm:w-[80%] md:w-[95%] 
                               flex flex-row gap-5 items-center p-4 rounded-lg shadow"
                    >
                        <!-- Contenedor de imagen -->
                        <div class="w-[35%] sm:w-[30%] md:w-[25%] aspect-square flex-shrink-0">
                            <img 
                                :src="product.imagen" 
                                :alt="`Imagen de ${product.name}`" 
                                class="w-full h-full object-cover rounded-lg"
                            >
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 sm:gap-10 flex-1 items-start sm:items-center justify-between">
                            <div class="flex flex-col">
                                <h2 class="font-semibold text-lg sm:text-xl text-white">
                                    {{ product.name }}
                                </h2>
                                <p class="text-base sm:text-lg font-medium text-[#ff761b]">
                                    <span class="sr-only">Precio:</span>
                                    ${{ product.price }}
                                </p>
                            </div>

                            <button 
                                @click="removeItem(index)" 
                                :aria-label="`Eliminar ${product.name} del carrito`"
                                class="bg-red-500 hover:bg-red-600 
                                       text-white px-4 py-2 rounded-lg
                                       text-sm font-semibold w-fit h-fit
                                       active:scale-95 transition-all
                                       shadow-md hover:shadow-lg
                                       focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#393e50]"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                </ul>
            </section>

            <aside 
                class="w-full flex justify-center mb-2"
                aria-label="Resumen de compra"
            >
                <div class="bg-[#1f1f1f] text-white w-full max-w-[450px]
                            p-6 rounded-xl shadow-xl sticky top-20">
                    <h2 class="text-xl font-bold mb-6 text-center">Resumen de compra</h2>

                    <dl class="space-y-4">
                        <div class="flex justify-between text-lg">
                            <dt class="text-gray-300">Productos:</dt>
                            <dd class="font-semibold">{{ cart.length }}</dd>
                        </div>

                        <div class="flex justify-between text-lg">
                            <dt class="text-gray-300">Total:</dt>
                            <dd class="font-bold text-[#ff9d3c]">${{ total.toFixed(2) }}</dd>
                        </div>
                    </dl>

                    <button 
                        @click="openPaymentModal"
                        :disabled="cart.length === 0"
                        :aria-label="`Confirmar compra de ${cart.length} productos por ${total.toFixed(2)}`"
                        class="w-full bg-[#ff7a1b] hover:bg-[#ff8f3d] text-black font-bold py-3 
                               rounded-lg transition active:scale-95 shadow-lg mt-6
                               disabled:opacity-50 disabled:cursor-not-allowed
                               focus:outline-none focus:ring-2 focus:ring-[#ff7a1b] focus:ring-offset-2 focus:ring-offset-[#1f1f1f]"
                    >
                        Confirmar compra
                    </button>
                </div>
            </aside>
        </div>

        <div 
            v-if="showModal" 
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
            aria-describedby="payment-modal-description"
            class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            @click.self="closeModal"
        >
            <div 
                ref="modalRef"
                class="bg-[#1f1f1f] rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn"
            >

                <button 
                    @click="closeModal"
                    aria-label="Cerrar modal de pago"
                    class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl
                           focus:outline-none focus:ring-2 focus:ring-[#ff7a1b] rounded"
                >
                    ×
                </button>

       
                <div class="text-center mb-8">
                    <div class="w-16 h-16 bg-[#ff7a1b] rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                        <span class="text-3xl">💳</span>
                    </div>
                    <h2 id="payment-modal-title" class="text-2xl font-bold text-white mb-2">
                        Información de Pago
                    </h2>
                    <p id="payment-modal-description" class="text-gray-400">
                        Total a pagar: <span class="text-[#ff7a1b] font-bold">${{ total.toFixed(2) }}</span>
                    </p>
                </div>

        
                <div 
                    v-if="errorMessage" 
                    role="alert"
                    class="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm"
                >
                    {{ errorMessage }}
                </div>

         
                <form @submit.prevent="processPayment" class="space-y-5" novalidate>
                    <!-- Número de tarjeta -->
                    <div>
                        <label for="card-number" class="block text-white font-medium mb-2">
                            Número de Tarjeta
                        </label>
                        <input 
                            id="card-number"
                            type="text"
                            v-model="cardData.cardNumber"
                            @input="formatCardNumber"
                            placeholder="1234 5678 9012 3456"
                            maxlength="19"
                            aria-required="true"
                            aria-describedby="card-number-help"
                            class="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg 
                                   border-2 border-[#3a3a3a] focus:border-[#ff7a1b] 
                                   outline-none transition-all"
                            required>
                        <span id="card-number-help" class="sr-only">
                            Ingrese los 16 dígitos de su tarjeta
                        </span>
                    </div>

                    <!-- Nombre del titular -->
                    <div>
                        <label for="card-name" class="block text-white font-medium mb-2">
                            Nombre del Titular
                        </label>
                        <input 
                            id="card-name"
                            type="text"
                            v-model="cardData.cardName"
                            placeholder="JUAN PÉREZ"
                            aria-required="true"
                            class="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg 
                                   border-2 border-[#3a3a3a] focus:border-[#ff7a1b] 
                                   outline-none transition-all uppercase"
                            required>
                    </div>

                    <!-- Fecha y CVV -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="expiry-date" class="block text-white font-medium mb-2">
                                Vencimiento
                            </label>
                            <input 
                                id="expiry-date"
                                type="text"
                                v-model="cardData.expiryDate"
                                @input="formatExpiryDate"
                                placeholder="MM/AA"
                                maxlength="5"
                                aria-required="true"
                                aria-describedby="expiry-help"
                                class="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg 
                                       border-2 border-[#3a3a3a] focus:border-[#ff7a1b] 
                                       outline-none transition-all"
                                required>
                            <span id="expiry-help" class="sr-only">
                                Formato: mes y año, por ejemplo 12/25
                            </span>
                        </div>
                        <div>
                            <label for="cvv" class="block text-white font-medium mb-2">
                                CVV
                            </label>
                            <input 
                                id="cvv"
                                type="password"
                                v-model="cardData.cvv"
                                placeholder="123"
                                maxlength="3"
                                aria-required="true"
                                aria-describedby="cvv-help"
                                class="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg 
                                       border-2 border-[#3a3a3a] focus:border-[#ff7a1b] 
                                       outline-none transition-all"
                                required>
                            <span id="cvv-help" class="sr-only">
                                Código de 3 dígitos al reverso de la tarjeta
                            </span>
                        </div>
                    </div>

                    <div class="flex gap-4 pt-4">
                        <button 
                            type="button"
                            @click="closeModal"
                            class="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 
                                   rounded-lg transition-all active:scale-95
                                   focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#1f1f1f]"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit"
                            class="flex-1 bg-[#ff7a1b] hover:bg-[#ff8f3d] text-black font-bold py-3 
                                   rounded-lg transition-all active:scale-95 shadow-lg
                                   focus:outline-none focus:ring-2 focus:ring-[#ff7a1b] focus:ring-offset-2 focus:ring-offset-[#1f1f1f]"
                        >
                            Pagar ${{ total.toFixed(2) }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- MODAL DE ÉXITO -->
        <div 
            v-if="showSuccess"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
            <div class="bg-[#1f1f1f] rounded-2xl shadow-2xl p-8 text-center max-w-md">
                <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <span class="text-5xl">✓</span>
                </div>
                <h2 id="success-title" class="text-2xl font-bold text-white mb-2">
                    ¡Pago Exitoso!
                </h2>
                <p class="text-gray-300 mb-4">
                    Tu compra ha sido procesada correctamente
                </p>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<style scoped>
/* Clase para ocultar visualmente pero mantener accesible */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
}
</style>