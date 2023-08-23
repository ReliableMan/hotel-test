import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore("mainStore", () => {
  const modalActive = ref(false);
  const numberValue = ref('');
  const menuActive = ref(false)

  const changeModalActive = function toggleModal () {
    modalActive.value = !modalActive.value;
    numberValue.value = ''
  }

  const changeMenuActive = function toggleMenu () {
    menuActive.value = !menuActive.value;
  }

  return {
    menuActive,
    numberValue,
    modalActive,
    changeMenuActive,
    changeModalActive
  }
})