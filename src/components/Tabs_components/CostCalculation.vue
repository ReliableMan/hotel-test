<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import { useMainStore } from '../../store';

import Swal from 'sweetalert2';
import questions from '../questions.js'

const mainStore = useMainStore();

onMounted(() => {
  choiceOpt();
})

onUpdated(() => {
  choiceOpt();
})

function choiceOpt () {
  const radioBtns = document.querySelectorAll('input[name="answer"]');
  const parentElems = document.querySelectorAll('.form_radio');
  const labelText = document.querySelectorAll('.inp_answer_text')
  
  radioBtns.forEach(function(elem) {
    elem.addEventListener('change', (elem) => {
      const el = elem.target.closest('.form_radio');
      const elText = elem.target.nextSibling;

      parentElems.forEach(function(elem) {
        elem.classList.remove('active');
      })
      labelText.forEach(function(elem) {
        elem.classList.remove('active');
      })
      // styles 
      el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active');
      elText.classList.contains('active') ? elText.classList.remove('active') : elText.classList.add('active');
    })
  })
}

const nextBtn = ref(false);
const count = ref(0)

function visibleNextBtn() {
  nextBtn.value = true;
  count.value <= 3 ? count.value ++ : ''; 
}

function prevStepBtn() {
  count.value !== 0 ? count.value -- : '' ; 
  count.value == 0 ? nextBtn.value = false : '' ;
} 
// загатовочка, если не нажали вариант ответа
function showAlert() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}

</script>

<template>
  <div class="cost-calc">
    <h3 class="cost-calc__main-sb-text">Рассчитайте стоимость вашего<br/> банкета</h3>
    <p class="cost-calc__main-sb-text-mob">
       Ответьте на 5 вопросов и получите горку<br/>
       из шампанского в подарок 
    </p>

      <div class="cost-calc__container">
        <!-- 1 карточка -->
        <div 
        v-for="item in questions" 
        :key="item.id" 
        class="cost-calc__container__block1"
        :class="{hiddenForMobile: !mainStore.startQuiz}">
          <div class="cost-calc__container__block1__content">
            <p  class="cost-calc__container__block1__content__question">
              Вопрос {{ item[count].id }} из 5
            </p>
            <div class="cost-calc__container__block1__content__progress-bar">
              <div 
                class="cost-calc__container__block1__content__progress-bar-line" :style="{'width': item[count].width + '%'}"></div>
            </div>
            <p class="cost-calc__container__block1__content__title">
              {{ item[count].question }}
            </p>
            <div class="cost-calc__container__block1__content__opt">
              <div 
                v-for="answer in questions.questions[count].options" 
                :key="answer.id" 
                class="form_radio">
                  <input class="inp_answer" id="radio-1" type="radio" name="answer" value="">
                  <label class="inp_answer_text" for="radio-1"> {{ answer }}</label>
              </div>
              
            </div>
              <div class="cost-calc__container__block1__content__line"></div>
              <!-- rewrite style to class -->
              <div style="display:flex; gap: 10px">
                <button 
                  v-if="item[count].id !== 5"
                  type="button" 
                  @click="visibleNextBtn"
                  class="btn-img-right cost-calc__container__block1__content__btn1 ">
                  <p class="cost-calc__container__block1__content__btn1__text">
                    Следующий вопрос
                  </p>
                </button>
                <!-- button for send results on server -->
                <button 
                  v-if="item[count].id === 5"
                  type="button" 
                  @click="mainStore.showAlert2"
                  :class="{activeEl: nextBtn}"
                  class=" cost-calc__container__block1__content__send ">
                  <p class="cost-calc__container__block1__content__send__text">
                    Отправить заявку
                  </p>
                </button>
                <!-- Кнопка назад -->
                <transition name="custom">
                    <button 
                      type="button" 
                      @click="prevStepBtn"
                      v-if="nextBtn" 
                      class="btn-img-left cost-calc__container__block1__content__btn2 ">
                        <p class="cost-calc__container__block1__content__btn2__text">
                          Назад
                        </p>
                    </button>
                  </transition>
              </div>
          </div>
        </div>
        <!-- 2 карточка -->
        <div :class="{hiddenForMobile: mainStore.startQuiz}" class="cost-calc__container__block2">
          <img
            class="cost-calc__container__block2__bg-img" 
            src="../../assets/img/background2card.png" 
            alt="background-2-card"
          >
          <img
            class="cost-calc__container__block2__bottle-img" 
            src="../../assets/img/bottle.png" 
            alt=""
          >
          <p class="cost-calc__container__block2__text">
            Ответьте на 5 вопросов и получите горку
            из шампанского в подарок
          </p>

          <button @click="mainStore.changeStartQuiz" class=" btn-img-right cost-calc__container__block2__btn-start">
            <p class="cost-calc__container__block2__btn-start__text-mob">Начать</p>
          </button>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/costCalculation.styles.scss';
</style>