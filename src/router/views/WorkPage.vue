<template>
    <div>
        <h1 @click="goMenu" class="font-beckett  select-none text-outline text-6xl ml-16 mt-2 inline-block text-gtagray">Calisma Deneyimi</h1> 
    </div> 
    <img class="absolute top-0 -z-10 h-full w-full opacity-80 brightness-200 bg-cover bg-center " style="filter:grayscale(70%) ;" src="/src/assets/bg-photos/cj-work.jpg" alt=""/>

    <ul>
        <li class="backdrop-blur-sm hover:bg-gtagray-passive/10 opacity-40 hover:opacity-100 transition-all ">
            <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> STAJ - UNIVERSITE</p>
            <p class=" pl-72 font-futuraLBold text-white text-2xl text-outline mt-8 pr-2 "> Arventek Bilisim Teknolojileri San. ve Tic. A.S. - ISTANBUL</p>
            <p class=" pl-64  font-futuraLBold text-white text-xl text-outline mt-8 pr-2 "> Nisan 2021 - Temmuz 2021</p>
        </li>
        <li class="backdrop-blur-sm hover:bg-gtagray-passive/10 opacity-40 hover:opacity-100 transition-all ">
            <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> STAJ - LISE</p>
            <p class=" pl-72 font-futuraLBold text-white text-2xl text-outline mt-8 pr-2 "> BIMEL - ANKARA</p>
            <p class=" pl-64  font-futuraLBold text-white text-xl text-outline mt-8 pr-2 "> Haziran 2016 - Agustos 2016</p>
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
