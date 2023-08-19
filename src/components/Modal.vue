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
  height: 80vh;
  width: 100vw;
  top: 80%;
  bottom: 0;
  right: 0;
  left: 0;
  background: #18191bf3;
  position: absolute;
  transform: translate(0%, 50%);
  z-index: 2;
  display: flex;
 }
 .modal-inner {
  margin: auto;
  min-height: 50px;
  min-width: 300px;
  display: flex;

 }
</style>