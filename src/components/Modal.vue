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
@import '@/assets/styles/modal.styles.scss';
</style>