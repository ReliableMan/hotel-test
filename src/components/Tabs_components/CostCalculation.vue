<script setup>
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';

import questions from '../questions.js'


onMounted(() => {
  const radioBtns = document.querySelectorAll('input[name="answer"]');
  const parentElems = document.querySelectorAll('.form_radio');
  
  radioBtns.forEach(function(elem) {
    elem.addEventListener('change', (elem) => {
      const el = elem.target.closest('.form_radio');

      parentElems.forEach(function(elem) {
        elem.classList.remove('active');
      })

      el.classList.contains('active') ? 
      el.classList.remove('active') : 
      el.classList.add('active');
    })
  })
})

const nextBtn = ref(false);
const count = ref(0)

function visibleNextBtn () {
  nextBtn.value = true;
  console.log(nextBtn.value)
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
    <h3 class="cost-calc__main-sb-text">Рассчитайте стоимость вашего банкета</h3>

      <div class="cost-calc__container">
        <!-- 1 карточка -->
        <div v-for="item in questions" :key="item.id" class="cost-calc__container__block1">
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
                  <input id="radio-1" type="radio" name="answer" value="">
                  <label for="radio-1"> {{ answer }}</label>
              </div>
              
            </div>
              <div class="cost-calc__container__block1__content__line"></div>
              <!-- rewrite style to class -->
              <div style="display:flex; gap: 10px">
                <div 
                  @click="visibleNextBtn"
                  :class="{activeEl: nextBtn}"
                  class="cost-calc__container__block1__content__btn1 btn-img-right">
                  <p class="cost-calc__container__block1__content__btn1__text">
                    Следующий вопрос
                  </p>
                </div>

                <!-- Кнопка назад -->
                <transition name="custom">
                    <div 
                      v-if="nextBtn" 
                      class="btn-img-left cost-calc__container__block1__content__btn2 ">
                        <p class="cost-calc__container__block1__content__btn2__text">
                          Назад
                        </p>
                    </div>

                  </transition>

              </div>
          </div>
        </div>
        <!-- 2 карточка -->
        <div class="cost-calc__container__block2">
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
            Ответьте на 5 вопросов и получите горку<br/>
            из шампанского в подарок
          </p>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.text-style-1 {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
}
.cost-calc {

  &__main-sb-text {
    font-family: P052;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 13px;
  }

  &__container {
    width: 100%;
    display: flex;
    gap: 20px;

    &__block1 {
      width: 55%;
      height: 369px;
      border-radius: 16px;
      background: #F7F7F8;

      &__content {
        padding: 32px 0 0 40px;
        
        &__question {
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          margin-bottom: 8px;
        }

        &__progress-bar {
          width: 95%;
          height: 4px;
          background-color: #FFF;
        }

        &__progress-bar-line {
          height: 4px;
          background-color: #C6AF66;
          transition: all .3s ease-in-out;
        }

        &__title {
          @extend .text-style-1;
          margin-top: 32px;
          margin-bottom: 24px;
        }

        &__opt {
          display: flex;
          gap: 16px;
          margin-bottom: 41px;
        }

        &__line {
          margin-left: -41px;
          width: 120%;
          height: 1px;
          background-color: #FFF;
        }

        &__btn1 {
          display: inline-flex;
          align-items: center;
          width: 40%;
          height: 52px;
          margin-top: 31px;
          padding: 14px 24px 14px 32px;
          background-color: #C6AF66;
          transition: all 1s;

          &__text {
            font-family: Roboto;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            color: #FFF
          }

          &:hover {
            cursor: pointer;
            background-color: #ccb054;
            transition: all 1s
          }
        }

        &__btn2 {
          display: inline-flex;
          align-items: center;
          order: -1;
          width: 40%;
          height: 52px;
          margin-top: 31px;
          padding: 14px 24px 14px 32px;
          background-color: #c6af66b9;
          transition: all 1s;

          &__text {
            font-family: Roboto;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            color: #FFF;
            padding-left: 100px;
          }

          &:hover {
            cursor: pointer;
            background-color: #ccb054;
            transition: all 1s
          }
        }
      }
    }

    &__block2 {
      width: 45%;
      height: 369px;
      border-radius: 16px;
      background: #F7F7F8;
      position: relative;

      &__bg-img {
        width: 100%;
        height: 100%;
      }

      &__bottle-img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 392px;
        top: -23px;
      }

      &__text {
        position: absolute;
        top: 73%;
        left: 6%;
        @extend .text-style-1;
      }
    }
  }
}

.btn-img-right {
  background-image: url('/src/assets/icons/right-arrow.png');
  background-repeat: no-repeat;
  background-position: right 2.3em bottom 14px;
}
.btn-img-left {
  background-image: url('/src/assets/icons/left-arrow.png');
  background-repeat: no-repeat;
  background-position: left 2.3em bottom 14px;
}

input[type='radio'],
label {
  cursor: pointer;
}

input[type='radio'] {
  position: relative;
  height: 22px;
  width: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

input[type='radio']::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid #C6AF66;
}

input[type='radio']:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #C6AF66;
  transform: translate(-50%, -50%);
  visibility: visible;
}

.form_radio {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.10);
}
.form_radio:hover {
  cursor: pointer;
  box-shadow: 0px 0px 0px 0.1em #c6af66b4
}
.form_radio.active {
  box-shadow: 0px 0px 0px 0.1em #C6AF66
}

.activeEl {
  transform: translateX(20px);
  transition: all 3s;
}

.custom-enter-active,
.custom-leave-active {
  transition: opacity 3s ease;
}
.custom-enter-from,
.custom-leave-to {
  opacity: 0;
}


</style>