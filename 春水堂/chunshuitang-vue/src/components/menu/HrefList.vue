<template>
  <ul :class="props.ul_class">
    <li v-for="(v, k) in props.a_obj" :key="k">
      <a :href="k" :title="isComponent(v)?v[0]:v">
        <component v-if="isComponent(v)" :is="v[1]"></component>
        <span v-else v-text="v"></span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["ul_class", "a_obj"])

const isComponent = (c) => {
  return typeof c !== "string"
}
</script>

<style>
ul {
    list-style: none;
    padding: 0px;
    text-align: center;
}
</style>