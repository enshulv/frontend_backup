<template>
    <div class="MENU" @click="menuChange">
        <div :class="line.line_1"></div>
        <div :class="line.line_2"></div>
        <div :class="line.line_3"></div>
        <div class="menu-text" @animationend="animate = false">
            <span :class="{ 'menu-item-animation': animate }" v-text="menu_text ? 'MENU' : 'CLOSE'"></span>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const line = reactive({
    line_1: 'line',
    line_2: 'line',
    line_3: 'line',
});
const menu_text = ref(true);
const animate = ref(false);

const menuChange = () => {
    const keys = ['line_1', 'line_2', 'line_3'];
    keys.forEach(key => {
        line[key] = line[key] === 'line' ? `${key}` : 'line';
    });
    menu_text.value = !menu_text.value
    animate.value = true
}
</script>

<style scoped>
@keyframes menuitem {
    0% {
        position: relative;
        left: -5px;
        opacity: 0;
    }

    100% {
        position: relative;
        left: 0;
        opacity: 1;
    }
}

.MENU {
    width: 45px;
    cursor: pointer;
    margin: auto;
    margin-bottom: 25px;
}

.MENU div:nth-of-type(-n+3) {
    height: 1px;
    width: 100%;
    margin-bottom: 10px;
    background-color: #70706e;
    transition: all 1s ease 0.5s;
}

.menu-text {
    text-align: center;
    margin-top: -5px;
    font-size: 15px;
    color: #414141;
}

.menu-item-animation {
    animation-name: menuitem;
    animation-duration: 0.3s;
}

.line {
    transform-origin: top left;
    transition: all 0.8s ease !important;
}

.line_1 {
    transform-origin: top left;
    transform: rotate(30deg);

}

.line_2 {
    width: 0px !important;
    transition: width 0.5s !important;
}

.line_3 {
    transform-origin: bottom left;
    transform: rotate(-30deg);
}
</style>