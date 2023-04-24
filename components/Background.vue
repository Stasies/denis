<template>
  <div class="background">
    <div
      class="element yellow"
      v-for="(a, index) in arr"
      :style="{
        top: `${50 * index * 2 - 40}px`,
        left: `${100 * index * 2.33}px`,
      }"
    ></div>
    <div
      class="element yellow"
      v-for="(a, index) in arr"
      :style="{
        top: `${150 * index * 2 - 40}px`,
        left: `${100 * index * 2.33}px`,
      }"
    ></div>
    <div
      class="element red"
      v-for="(a, index) in arr"
      :style="{ top: `${100 * index - 60}px`, left: `${100 * index * 3.14}px` }"
    ></div>
    <div
      class="element green"
      v-for="(a, index) in arr"
      :style="{
        top: `${333 * index + 250 * index}px`,
        left: `${100 * index * 3.14}px`,
      }"
    ></div>
    <div
      class="element green"
      v-for="(a, index) in arr"
      :style="{
        top: `${33 * index + 250 * index * -1}px`,
        left: `${100 * index * 3.14}px`,
      }"
    ></div>
    <div class="element random red">#милашка</div>
    <div class="element random2 green">#вау</div>
    <div class="element random3 yellow">#OMG</div>
    <div class="element random4 green">#facts</div>
  </div>
</template>

<script setup>
const arr = new Array();
arr.length = 10;
</script>

<style lang="sass" scoped>
.background
    height: 100vh
    width: 100vw
    position: fixed
    background-color: #F3E99F
.element
    height: 100px
    width: 500px
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    color: white
    font-family: 'Neucha', cursive
    font-size: 40px
.random
    top: 200px
.random2
    top: 330px
    left: 30%
    z-index: 40
.random3
    top: 500px
.random4
    top: 50px
    left: 80%
</style>
