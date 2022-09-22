<template >
    <div>
        <h1 @click="goMenu" class="font-beckett  select-none text-outline text-6xl ml-16 mt-2 inline-block text-gtagray">Yetenekler</h1> 
    </div> 



    <div class="  w-screen h-screen flex items-start justify-end   " >
        <div id="itemler" class=" -mr-8 overflow-y-auto overflow-x-hidden will-change-transform h-[450px] snap-mandatory snap-y ">
            <ul class="flex flex-col">
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]">
                    <div class="flex flex-row">
                        <img width="256" src="/src/assets/icons/gtafist.png" alt="">
                        <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> Yetenekler</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> fare tekerini kullanın sarı yıldızları baz alın</p>
                    <six-stars-comp ></six-stars-comp> 
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/vuegta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> VUEJS</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> COMPOSITIONAPI ROUTER VUEX FIREBASE ILE UGRASIYORUM</p>
                    <four-stars-comp ></four-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/tailwind1gta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> TAILWINDCSS</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> TERCIH ETTIGIM KULLANMAYI SEVDIGIM CSS FRAMEWORK</p>
                    <four-stars-comp ></four-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/ckaregta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> C#</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> NESNE TABANLI OYUN VE UYGULAMALAR ICIN KULLANDIM</p>
                    <two-stars-comp ></two-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/cssgta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> CSS</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> TASARIMLARIM ICIN AKTIF KULLANIYORUM</p>
                    <three-stars-comp ></three-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/htmlgta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> HTML</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> TASARIMLARIM ICIN AKTIF KULLANIYORUM</p>
                    <three-stars-comp ></three-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/jsgta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> JAVASCRIPT</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> VUEJS ILE BERABER KULLANIYORUM</p>
                    <three-stars-comp ></three-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/psgta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> PHOTOSHOP</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> AMATOR OLARAK ISLERIMI HALLEDEBILIYORUM</p>
                    <three-stars-comp ></three-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/langgta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> INGILIZCE</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-3xl text-outline w-11/12 px-2"> YABANCI KAYNAK OKUMA UYGULAMADA SORUNSUZ KONUSMA PRATIKSIZ</p>
                    <three-stars-comp ></three-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/telgta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> TELEFON</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-5xl text-outline w-11/12 px-2"> 05533460863</p>
                    <six-stars-comp ></six-stars-comp>
                </li>
                <li class="flex flex-col snap-center justify-between shrink-0 h-[450px] w-[500px]"> 
                    <div class="flex flex-row">
                    <img width="256" src="/src/assets/icons/mailgta.png" alt="">
                    <p class="font-futuraLBold text-white text-3xl text-outline mt-8 pr-2 "> MAIL</p>
                    </div>
                    <p class="font-futuraLBold text-green-800 text-2xl text-outline w-11/12 px-2"> batuhanboraniletisim@gmail.com</p>
                    <six-stars-comp ></six-stars-comp>
                </li>
                </ul>
        </div>
    </div>
    
    <img class="absolute top-0 -z-10 h-full w-full opacity-80 brightness-200 bg-cover bg-center " style="filter:grayscale(70%) ;" src="/src/assets/bg-photos/cj-yetenek.png" alt="">
</template>
<script setup>
    import oneStarsComp from '../../components/oneStarsComp.vue';
    import twoStarsComp from '../../components/twoStarsComp.vue';
    import threeStarsComp from '../../components/threeStarsComp.vue';
    import fourStarsComp from '../../components/fourStarsComp.vue';
    import fiveStarsComp from '../../components/fiveStarsComp.vue';
    import sixStarsComp from '../../components/sixStarsComp.vue';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import sound1 from "/src/assets/sounds/gta-menu-select.wav"
import sound2 from "/src/assets/sounds/gta-pickUp.mp3"

const router= useRouter()
const goMenu=()=>{
    playSound()
    router.go(-1)
}
const playSound=()=>{
    var audio1 = new Audio(sound1);
    audio1.play()
}
const playPickSound=()=>{
    var audio2 = new Audio(sound2);
    audio2.play()
}

onMounted(()=>{
    
    function changeWheelSpeed(container, speedY) {
        
	var scrollY = 0;

	var handleScrollReset = function() {
		scrollY = container.scrollTop;
	};
	var handleMouseWheel = function(e) {
		e.preventDefault();
		scrollY += speedY * e.deltaY
		if (scrollY < 0) {
			scrollY = 0;
		} else {
			var limitY = container.scrollHeight - container.clientHeight;
			if (scrollY > limitY) {
				scrollY = limitY;
                
			}
		}
		container.scrollTop = scrollY;
        playPickSound()

	};

	container.addEventListener('mouseup', handleScrollReset, false);
	container.addEventListener('mousedown', handleScrollReset, false);
	container.addEventListener('mousewheel', handleMouseWheel, false);

	var removed = false;

	return function() {
		if (removed) {
			return;
		}

		container.removeEventListener('mouseup', handleScrollReset, false);
		container.removeEventListener('mousedown', handleScrollReset, false);
		container.removeEventListener('mousewheel', handleMouseWheel, false);

		removed = true;
	};
}


// Usage example:

var element = document.querySelector('#itemler');

changeWheelSpeed(element, 4);  // 0.5 * default_scroll_speed  // 2 times slower
})
</script>
