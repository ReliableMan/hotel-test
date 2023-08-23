import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore("mainStore", () => {
  const modalActive = ref(false);
  const numberValue = ref('');
  const menuActive = ref(false);
  const startQuiz = ref(false)

  const changeModalActive = function toggleModal () {
    modalActive.value = !modalActive.value;
    numberValue.value = ''
  }

  const changeMenuActive = function toggleMenu () {
    menuActive.value = !menuActive.value;
  }

  function changeStartQuiz () {
    startQuiz.value = !startQuiz.value;
    console.log('-=-=-=-', startQuiz.value)
  }


  return {
    startQuiz,
    menuActive,
    numberValue,
    modalActive,
    changeStartQuiz,
    changeMenuActive,
    changeModalActive,
  }
})