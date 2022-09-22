<template>
    <div>
            <h1 @click="goMenu" class="font-beckett  select-none text-outline text-6xl ml-16 mt-2 inline-block text-gtagray">Kisisel Bilgiler</h1> 
        </div> 
        <img class="absolute top-0 -z-10 h-full w-full opacity-80 brightness-200 bg-cover bg-center " style="filter:grayscale(70%) ;" src="/src/assets/bg-photos/cj-kisisel.jpg" alt=""/>
    
        <ul class="mt-16">
            <li class="backdrop-blur-sm hover:bg-gtagray-passive/10 opacity-40 hover:opacity-100 transition-all ">
                <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 ">Ben, BATUHAN BORAN</p>
                <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 ">MCBU/2022 mezunu Yazılım Mühendisiyim</p>
                <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 ">Dogum tarihi: Haziran 1998</p>
                <p class=" pl-64 font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 ">Ehliyetim var</p>
                <div class="flex">
                <a class=" pl-64 font-futuraLBold text-green-900 hover:text-green-700 transition-colors text-3xl text-outline mt-8 pr-2 " href="/src/assets/BATUHAN_BORAN_CV.pdf" download="BATUHAN_BORAN_CV">Cv indir</a>
                <a class=" pl-64 font-futuraLBold text-zinc-900 hover:text-zinc-700 transition-colors text-3xl text-outline mt-8 pr-2 " href="https://github.com/6atuhan" target="_blank" >Github</a>
                <a class=" pl-64 font-futuraLBold text-blue-900 hover:text-blue-700 transition-colors text-3xl text-outline mt-8 pr-2 " href="https://www.linkedin.com/in/6atuhan/" target="_blank">LinkedIn</a>

                </div>
            </li>

        </ul>
 
        <div class="flex items-center fixed bottom-1 left-1 w-52 h-48 overflow-hidden hover:w-[500px] transition all">
            <img class="w-48 h-48 animate-pulse hover:animate-none transition-all" src="/src/assets/icons/mapgta.png" alt="">
            <div>
                <div class=" pl-8 flex flex-row ">
                    <img class="w-8" src="/src/assets/icons/pointgta.png" alt=""> <p class="font-futuraLBold text-outline text-xl text-white">Sincan/Ankara</p>
                </div>
                <div class=" pl-8 flex flex-row ">
                     <img class="w-8" src="/src/assets/icons/pointgta.png" alt=""> <p class="font-futuraLBold text-outline text-xl text-white">Pendik/Istanbul</p>
                </div>
            </div>
        </div>
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
        