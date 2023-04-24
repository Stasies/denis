<template>
  <div class="container">
    <Background></Background>
    <div class="elements">
      <div class="element" v-for="(item, index) in items">
        <div
          :id="`yellow${item}`"
          :style="{ zIndex: item * index }"
          :class="['moving_block', 'yellow', 'top', index % 3 == 0 && 'rotate']"
        >
          Денис - милашка
        </div>
      </div>
      <div class="element" v-for="(item, index) in items">
        <div
          :id="`green${item}`"
          :style="{ zIndex: item * index }"
          :class="[
            'moving_block',
            'green',
            'center',
            index % 4 == 0 ? 'rotate' : index % 2 == 0 ? 'updown' : 'linear',
          ]"
        >
          Денис - милашка
        </div>
        <div :id="`green${item + 10}`" class="moving_block center green">
          Денис - милашка
        </div>
      </div>
      <div class="element" v-for="(item, index) in items">
        <div
          :id="`red${item}`"
          :style="{ zIndex: item * index }"
          :class="[
            'moving_block',
            'red',
            'bottom',
            index % 5 == 0 ? 'rotate' : index % 3 == 0 ? 'updown' : 'linear',
          ]"
        >
          Денис - милашка
        </div>
        <div
          :id="`red${item + 4}`"
          :style="{ zIndex: item * index * 0.5 }"
          class="moving_block bottom red"
        >
          Денис - милашка
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const handleBlocks = () => {
  console.log(document);
  for (let i = 0; i < items.length; i++) {
    const randomNumber = Math.random();
    document.querySelector(`#red${i + 1}`).style.top =
      randomNumber * i + 200 * i + "px";
    document.querySelector(`#red${i + 1}`).style.animationDelay =
      i * randomNumber * 500 + "ms";
    document.querySelector(`#red${i + 1}`).style.animationDuration =
      4 * i + "s";
    document.querySelector(`#red${i + 1}`).style.left =
      100 * (i * randomNumber) + 200 + "px";
    document.querySelector(`#yellow${i + 1}`).style.top = 2 * i * i + "%";
    document.querySelector(`#yellow${i + 1}`).style.left = 11 * (i - 2) + "%";
    document.querySelector(`#yellow${i + 1}`).style.animationDuration =
      5 * i + "s";
    document.querySelector(`#green${i + 1}`).style.top =
      randomNumber * i + 115 * i + "px";
    document.querySelector(`#green${i + 1}`).style.left =
      200 * i * randomNumber + 150 + "px";
    document.querySelector(`#green${i + 1}`).style.animationDuration =
      6 * i + "s";
  }
};
onMounted(() => {
  handleBlocks();
});
</script>

<style lang="sass">
body
  overflow: hidden
  margin: 0
.container
  height: 100vh
  width: 100%
  display: flex
  align-items: center
  overflow: hidden
.elements
  height: 100%
  width: 100%
.moving_block
  position: absolute
  font-size: 54px
  color: white
  padding: 20px 60px
  transform: skew(-10deg)
  width: fit-content
  min-width: fit-content
  translate: -200% 0
  font-family: 'Neucha', cursive
  animation-name: moveIn
  white-space: nowrap
  // animation-duration
  animation-iteration-count: infinite
  // animation-timing-function
  // animation-fill-mode
  // animation: moveIn 1s linear forwards
.top
  top: 20%
.center
  top: 50%
.bottom
  top: 70%
.yellow
  background-color: #F7D060
.green
  background-color: #98D8AA
.red
  background-color: #FF6D60

.rotate
  rotate: 90deg
  animation: rotate 250ms infinite

.updown
  animation: updown 600ms infinite

@keyframes moveIn
  0%
    translate: -200% 0
  100%
    translate: 400% 0
@keyframes updown
  0%
    translate: -200% 0
  20%
    translate: 0% 200%
  40%
    translate: 20% 10%
  60%
    translate: 40% 160%
  80%
    translate: 90% 10%
  100%
    translate: 120% 0

@keyframes rotate
  0%
    -webkit-transform: rotate(0deg)
    -o-transform: rotate(0deg)
    transform: rotate(0deg)
    translate: -200% 0

  100%
    -webkit-transform: rotate(360deg)
    -o-transform: rotate(360deg)
    transform: rotate(360deg)
    translate: 200% 0
</style>
