<template>

    <div >
        <h1 class="font-beckett select-none  text-6xl ml-16 mt-2 inline-block text-gtagray">Ana Menu</h1> 
        <img class="float-right h-64" src="/src/assets/bg-photos/kisisel-bg-batu.png" alt="">
       
        <ul class=" mt-32 list-[url('/src/assets/icons/menuicongta.png')]">

            <li>        
             <h1   @mouseenter="menuMove" @click=" goPersonal" class="menu-item">KİŞİSEL BİLGİLER</h1>

            </li>
            <li>        
             <h1   @mouseenter="menuMove" @click=" goSkills" class="menu-item">YETENEKLER</h1>

            </li>
            <li>        
                <h1  @mouseenter="menuMove" @click="goWork" class="menu-item">ÇALIŞMA DENEYİMİ</h1>
                
            </li>
            <li>        
                <h1  @mouseenter="menuMove" @click="goEducation" class="menu-item">EĞİTİM GEÇMİŞİ</h1>
                
            </li>
            <li>        
                <h1  @mouseenter="menuMove" @click="goEvents" class="menu-item">ETKİNLİKLER</h1>
                
            </li>

        </ul>
    
    </div>

</template>



<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import sound1 from "/src/assets/sounds/gta-menu-move.wav"
import sound2 from  "/src/assets/sounds/gta-menu-select.wav"

const router=useRouter()

    const goPersonal =()=>{
        menuSelect()
        router.push("personal")
    }
    const goSkills =()=>{
        menuSelect()
        router.push("skills")
    }
    const goWork =()=>{
        menuSelect()
        router.push("work")
    }
    const goEducation =()=>{
        menuSelect()
        router.push("education")
    }
    const goEvents =()=>{
        menuSelect()
        router.push("events")
    }

    const menuMove = () =>{
        var audio1 = new Audio(sound1);
        audio1.play()
    }
    const menuSelect = () =>{
        var audio2 = new Audio(sound2);
        audio2.play()
    }
    const menuShow=()=>{
        enterMenu.value= !enterMenu.value
    }
</script>