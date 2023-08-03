<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const radioBtns = document.querySelectorAll('input[name="answer"]');
  
  radioBtns.forEach(function(elem) {
    elem.addEventListener('change', (elem) => {
      const el = elem.target.closest('.form_radio');
// think about logic add and remove class on elements
        !el.classList.contains('active') ? el.classList.add('active') : el.classList.remove('active');
    })
  })
})

</script>

<template>
  <div class="cost-calc">
    <h3 class="cost-calc__main-sb-text">Рассчитайте стоимость вашего банкета</h3>

      <div class="cost-calc__container">
        <!-- 1 карточка -->
        <div class="cost-calc__container__block1">
          <div class="cost-calc__container__block1__content">
            <p class="cost-calc__container__block1__content__question">
              Вопрос 1 из 5
            </p>
            <div class="cost-calc__container__block1__content__progress-bar">
              <div class="cost-calc__container__block1__content__progress-bar-line" :style="{'width': 20 + '%'}"></div>
            </div>
            <p class="cost-calc__container__block1__content__title">
              Количество гостей
            </p>
            <div class="cost-calc__container__block1__content__opt">
              <!-- ! for loop -->
              <div class="form_radio">
                <input id="radio-1" type="radio" name="answer" value="">
                <label for="radio-1"> 15-30</label>
              </div>
              <div class="form_radio">
                <input id="radio-2" type="radio" name="answer" value="">
                <label for="radio-2"> 30-60</label>
              </div>
              <div class="form_radio">
                <input id="radio-3" type="radio" name="answer" value="">
                <label for="radio-3"> 60-80</label>
              </div>
              <div class="form_radio">
                <input id="radio-4" type="radio" name="answer" value="">
                <label for="radio-4"> 80-100</label>
              </div>
              <div class="form_radio">
                <input id="radio-5" type="radio" name="answer" value="">
                <label for="radio-5"> 100-120</label>
              </div>  
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
          // width: 20%;
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
  border: 1px solid var(--ver-20, #C6AF66);
}
.form_radio.active {
  border: 1px solid var(--ver-20, #C6AF66);
}


</style>