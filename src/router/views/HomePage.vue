<template>
    <div @click="menuShow" class="flex justify-center items-center w-screen h-screen">

        <img class="w-64 h-64" src="/src/assets/icons/batustargtadolu.png" alt="">
    </div>
    

</template>



<script setup>
import { useRouter } from "vue-router";


const router=useRouter()

    const menuShow=()=>{
        router.push("menu")
    }
</script>