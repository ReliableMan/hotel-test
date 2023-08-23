import { defineStore } from 'pinia';
import { ref } from 'vue';
import Swal from 'sweetalert2';

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

  function showAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Спасибо за обращение',
      text: 'Наш менеджер свяжется с вами в ближайшее время!',
      footer: 
      `<a 
      style="text-decoration-line: none;
      color: #C6AF66; font-family: 'Roboto', sans-serif; 
      font-size: 18px; line-height: 20px" 
      href="tel:+7123456789">
      Позвонить сейчас
      </a>`
    })
  }

  function showAlert2 () {
    Swal.fire(
      'Спасибо за ответы!',
      'Ваша заявка в обработке!',
      'success'
    )
  }
  
  return {
    showAlert,
    showAlert2,
    startQuiz,
    menuActive,
    numberValue,
    modalActive,
    changeStartQuiz,
    changeMenuActive,
    changeModalActive,
  }
})