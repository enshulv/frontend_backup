<template>
    <div class="menu">
        <div class="topBox">
            <CrossMenu />
            <LogoMenu />
        </div>
        <div class="bottomBox">
            <HrefList v-bind="details" />
            <HrefList v-bind="SNS" />
            <div class="language">
                <img  src="https://www.chunshuitang.com.tw/images/icon_global.png">
                <span class="_sp">繁體中文</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onUnmounted, ref } from "vue";
import CrossMenu from "../components/menu/CrossMenu.vue";
import LogoMenu from "./LogoMenu.vue";
import HrefList from "../components/menu/HrefList.vue";
import Instagram from "../assets/icons/instagram.svg";
import Youtube from "../assets/icons/youtube.svg";
import Facebook from "../assets/icons/facebook.svg";

const windowWidth = ref(window.innerWidth);
const mouse = ref(false);

const windowListener = () => {
    windowWidth.value = window.innerWidth;
}

onBeforeMount(() => {
    window.addEventListener("resize", windowListener)
})

onUnmounted(() => {
    window.removeEventListener("resize", windowListener)
})

const details = {
    ul_class: "details",
    a_obj: {
        ".\\news": "最新消息",
        ".\\menu": "查看點單"
    }
}

const SNS = {
    ul_class: "SNS",
    a_obj: {
        "https://www.instagram.com/chunshuitang/": ["Instagram",Instagram],
        "https://www.facebook.com/ChunShui1983/": ["Facebook",Facebook],
        "https://www.youtube.com/@chunshuitang1983": ["Youtube",Youtube],
    }
}
</script>

<style>
@keyframes menu_enter {
    0% {
        opacity: 0.2;
    }

    100% {
        opacity: 1;
    }
}

@keyframes on {
    0% {
        opacity: 0.2;
    }

    100% {
        opacity: 1;
    }
}

.menu {
    width: 120px;
    height: 94vh;
    padding: 3vh 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.5s;
    animation-name: menu_enter;
    animation-duration: 1s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

ul{
    width: 1.3rem;
}

.details li {
    padding: 10px 0px;
    font-size: 13px;
}

.details> :first-child {
    border-bottom: 1px solid #919190;
}

a {
    text-decoration: none;
    color: #353535;
    transition: color 1s;
}

.details a:hover {
    color: #8d0000;
}

.SNS li {
    width: 85%;
    margin-bottom: 60%;
}

.SNS a {
    color: #3a3a3a;
}

.SNS a:hover {
    color: #8d0000;
}

.bottomBox{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.language{
    cursor: pointer;
    width: 80%;
    padding-top: 10%;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #919190;
    transition: filter 1s;
    filter: grayscale(100%);
}

.language:hover{
    filter: grayscale(0%);
}

._sp{
    display: block;
    margin-top: 10px;
    color: #770101;
}


</style>