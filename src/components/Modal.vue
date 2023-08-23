<script setup>
import { useMainStore } from '../store/index';

const mainStore = useMainStore();

</script>

<template>
  <transition name="modal-animation">
    <div v-show="mainStore.modalActive"  class="modal">
      <transition name="modal-animation-inner">
        <div v-show="mainStore.modalActive" class="modal-inner">
          <!-- Modal content -->
          <slot/>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
 .modal {
  height: 160vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #18191bf3;
  position: absolute;
  z-index: 2;
  display: flex;

  @media (max-width: 1200px) {
    height: 245vh
  }
  @media (max-width: 600px) {
    height: 200vh
  }
  @media (max-width: 500px) {
    height: 165vh
  }
 }
 .modal-inner {
  margin: auto;
  min-height: 50px;
  min-width: 300px;
  display: flex;

 }
</style>