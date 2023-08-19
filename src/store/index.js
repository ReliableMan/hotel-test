import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore("mainStore", () => {
  const modalActive = ref(false);

  const changeModalActive = function toggleModal () {
    modalActive.value = !modalActive.value
  }

  return {
    modalActive,
    changeModalActive
  }
})