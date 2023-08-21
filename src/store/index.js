import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore("mainStore", () => {
  const modalActive = ref(false);
  const numberValue = ref('')

  const changeModalActive = function toggleModal () {
    modalActive.value = !modalActive.value;
    numberValue.value = ''
  }

  return {
    numberValue,
    modalActive,
    changeModalActive
  }
})