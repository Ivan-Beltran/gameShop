<script setup>
</script>

<template>
  <nav class="w-full">
    <ul class="flex flex-row justify-center items-center gap-5 sm:gap-2 md:gap-10 lg:gap-1 text-white">

      <!-- Item PlayStation -->
      <li>
        <router-link 
          to="/playstation" 
          class="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 hover:bg-blue-400  rounded transition-colors"
        >
          <div class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
            <img src="../../public/icon/playstation.svg" alt="PlayStation" class="w-full h-full object-contain">
          </div>
          <h4 class="sm:text-[10px] md:text-sm whitespace-nowrap hidden sm:block">
            PlayStation
          </h4>
        </router-link>
      </li>

      <!-- Item Xbox -->
       
      <li>
        <router-link 
          to="/xbox" 
          class="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 hover:bg-green-800 rounded transition-colors"
        >
        <div class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
          <img src="../../public/icon/icon-xbx.svg" alt="Xbox" class="w-full h-full object-contain">
        </div>
        <h4 class="text-[10px] sm:text-xs md:text-sm whitespace-nowrap hidden sm:block">
          Xbox
        </h4>
        </router-link>
      </li>

      <!-- Item Nintendo -->
      <li>
        <router-link 
          to="/nintendo" 
          class="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 hover:bg-red-500 rounded transition-colors"
        >
        <div class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0">
          <img src="../../public/icon/icon-swt.svg" alt="Nintendo" class="w-full h-full object-contain">
        </div>
        <h4 class="text-[10px] sm:text-xs md:text-sm whitespace-nowrap hidden sm:block">
          Nintendo
        </h4>
        </router-link>
      </li>

      <!-- Item PC -->
      <li>
        <router-link 
          to="/pcPage" 
          class="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 hover:bg-purple-600 rounded transition-colors"
        >
        <div class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
          <img src="../../public/icon/pc.svg" alt="PC" class="w-full h-full object-contain">
        </div>
        <h4 class="text-[10px] sm:text-xs md:text-sm whitespace-nowrap hidden sm:block">
          PC
        </h4>
         </router-link>
      </li>

    </ul>
  </nav>
</template>



<!-- Menú siempre visible -->
<!-- <ul
      class="hidden md:flex md:flex-row md:gap-10 gap-4
         bg-amber-200 md:bg-transparent p-4 md:p-0 
         rounded shadow md:shadow-none"
    >
      <li class="flex items-center gap-2">
        <img src="../../public/icon/icon-swt.svg" class="w-5" />
        <span>Play Station</span>
      </li>

      <li class="flex items-center gap-2">
        <img src="../../public/icon/icon-swt.svg" class="w-5" />
        <span>Xbox</span>
      </li>

      <li class="flex items-center gap-2">
        <img src="../../public/icon/icon-swt.svg" class="w-5" />
        <span>Nintendo</span>
      </li>

      <li class="flex items-center gap-2">
        <img src="../../public/icon/icon-swt.svg" class="w-5" />
        <span>PC Gaming</span>
      </li>
    </ul> -->