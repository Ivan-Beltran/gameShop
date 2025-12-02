 <script setup>
        import { ref } from "vue";
        import { useRouter } from "vue-router";

        const router = useRouter();

        const email = ref("");
        const password = ref("");

        function handleLogin() {
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email.value === storedEmail && password.value === storedPassword) {
                router.push("/");
            } else {
                alert("El correo o la contraseña no coinciden");
            }
        }
</script>


<template>
    <div class="bg-[#272727] font-['Inter'] flex items-center justify-center min-h-screen text-white">
        <div class="w-full max-w-md p-8 rounded-lg shadow-xl bg-[#1f1f1f] border border-gray-800">
            <!-- Logo y título -->
            <div class="text-center mb-8">
                <img src="/img/logGame.png" alt="GameCenter Logo" class="h-16 mx-auto mb-4 object-contain" />

                <h2 class="text-3xl font-normal text-[#ff761b]">Iniciar Sesión</h2>
                <p class="mt-2 text-sm text-gray-400">Bienvenido de nuevo a GameCenter</p>
            </div>

            <!-- FORMULARIO -->
            <form @submit.prevent="handleLogin" class="space-y-6">
                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300">
                        Correo Electrónico
                    </label>

                    <input v-model="email" type="email" id="email" required class="mt-1 block w-full px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md
                   text-white placeholder-gray-500 focus:outline-none focus:border-[#ff761b]
                   focus:ring-1 focus:ring-[#ff761b] sm:text-sm transition-colors" placeholder="ejemplo@correo.com" />
                </div>

                <!-- Password -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-300">
                        Contraseña
                    </label>

                    <input v-model="password" type="password" id="password" required class="mt-1 block w-full px-3 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md
                   text-white placeholder-gray-500 focus:outline-none focus:border-[#ff761b]
                   focus:ring-1 focus:ring-[#ff761b] sm:text-sm transition-colors" placeholder="••••••••" />
                </div>

                <!-- Botón -->
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md
                 shadow-sm text-sm font-medium text-white bg-[#ff761b] hover:bg-[#e06516]
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff761b]
                 transition-colors">
                    Ingresar
                </button>
            </form>

            <!-- Footer -->
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-400">
                    ¿No tienes una cuenta?
                    <RouterLink to="/register" class="font-medium text-[#ff761b] hover:text-[#e06516]">
                        Regístrate
                    </RouterLink>
                </p>

                <div class="mt-4">
                    <RouterLink to="/" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                        ← Volver al inicio
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

