<template>
<div>
        <h1 @click="goMenu" class="font-beckett  select-none text-outline text-6xl ml-16 mt-2 inline-block text-gtagray">Etkinlikler</h1> 
    </div> 
    <img class="absolute top-0 -z-10 h-full w-full opacity-80 brightness-200 bg-cover bg-center " style="filter:grayscale(70%) ;" src="/src/assets/bg-photos/cj-etkinlik.jpg" alt=""/>

    <ul class="mt-32">
        <li class="backdrop-blur-sm hover:bg-gtagray-passive/10 opacity-40 hover:opacity-100 transition-all ">
            <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> 2019- MMG 4. ARGE INOVASYON ZIRVESI - ISTANBUL</p>
        </li>
        <li class="backdrop-blur-sm hover:bg-gtagray-passive/10 opacity-40 hover:opacity-100 transition-all ">
            <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> 2019- HACKN BREAK ACIK INOVASYON KAMPI - IZMIR</p>
        </li>
        <li class="backdrop-blur-sm hover:bg-gtagray-passive/10 opacity-40 hover:opacity-100 transition-all ">
            <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> 2018- GENC BEYINLER YARATICI FIKIRLER YARISMA - IZMIR</p>
        </li>
        <li class="backdrop-blur-sm hover:bg-gtagray-passive/10 opacity-40 hover:opacity-100 transition-all ">
            <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> 2015- EU COMENIUS "SCENARIO OF HAPPINES" - ALMANYA</p>
        </li>
    </ul>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import sound from "/src/assets/sounds/gta-menu-select.wav"
    
    const router= useRouter()
    const goMenu=()=>{
        playSound()
        router.go(-1)
    }
    const playSound=()=>{
        var audio1 = new Audio(sound);
        audio1.play()
    }
    </script>
    