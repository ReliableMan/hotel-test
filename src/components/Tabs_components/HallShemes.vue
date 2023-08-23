<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '../../store/index';

const mainStore = useMainStore();


onMounted(() => {
  const hallsHref = document.querySelectorAll(".hall_schemes__nav-btn");
  const hallsItems = document.querySelectorAll(".hall_schemes__item");

  hallsHref.forEach(function(item) {
    item.addEventListener("click", () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if ( !currentBtn.classList.contains('active')) {
        hallsHref.forEach(function(item) {
          item.classList.remove('active')
        });
        hallsItems.forEach(function(item) {
          item.classList.remove('active')
        })
        
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    })
  })

  const elem_btn = document.querySelector('.hall_schemes__item__container__sm-window__groupBtns__btn-1');
  const elem_text = document.querySelector('.hall_schemes__item__container__sm-window__groupBtns__btn-1__text');

  elem_btn.onmouseover = function() {
    elem_text.style.color = '#C6AF66'
  };
  elem_btn.onmouseout = function() {
    elem_text.style.color = ''
  };

  const elem_btn2 = document.querySelector('.hall_schemes__item__container__sm-window__groupBtns__btn-2');
  const elem_text2 = document.querySelector('.hall_schemes__item__container__sm-window__groupBtns__btn-2__text');

  elem_btn2.onmouseover = function() {
    elem_text2.style.color = '#FFF'
  };
  elem_btn2.onmouseout = function() {
    elem_text2.style.color = ''
  };

})

</script>

<template>
  <div class="hall_schemes">

    <p class="hall_schemes__title">
      Схемы залов
    </p>

    <div class="hall_schemes__nav">
      <a href="#hall-1" class="hall_schemes__nav-btn active" data-tab="#hall_1">Зал первый</a>
      <a href="#hall-2" class="hall_schemes__nav-btn" data-tab="#hall_2">Зал второй</a>
    </div>

    <div class="hall_schemes__content">
      <!-- 1 -->
      <div class="hall_schemes__item active" id="hall_1">
        <div class="hall_schemes__item__container">
          <img
            class="hall_schemes__item__container__img-sitting" 
            src="/src/assets/svg/plan_sitting_people.svg" 
            alt="image-plan-sitting-people"
          >
          <div class="hall_schemes__item__container__sm-window">
            <p class="hall_schemes__item__container__sm-window__text">
              Просторный зал с панорамным видом на город
            </p>
            <!-- 1 площадь -->
            <div class="hall_schemes__item__container__sm-window__info-1">
              <p class="hall_schemes__item__container__sm-window__info-1__text-1">
                площадь
              </p>
              <p class="hall_schemes__item__container__sm-window__info-1__text-2">
                160 кв. метров
              </p>
            </div>
            <div class="hall_schemes__item__container__sm-window__line"></div>
            <!-- 2 вместимость -->
            <div class="hall_schemes__item__container__sm-window__info-1">
              <p class="hall_schemes__item__container__sm-window__info-1__text-1">
                вместимость
              </p>
              <p class="hall_schemes__item__container__sm-window__info-1__text-2">
                до 100 человек
              </p>
            </div>
            <div class="hall_schemes__item__container__sm-window__line"></div>
            <!-- 3 фуршет -->
            <div class="hall_schemes__item__container__sm-window__info-1">
              <p class="hall_schemes__item__container__sm-window__info-1__text-1">
                фуршет
              </p>
              <p class="hall_schemes__item__container__sm-window__info-1__text-2">
                до 200 человек
              </p>
            </div>


            <div class="hall_schemes__item__container__sm-window__groupBtns">
              <button @click="mainStore.changeModalActive" class="hall_schemes__item__container__sm-window__groupBtns__btn-1">
                <p class="hall_schemes__item__container__sm-window__groupBtns__btn-1__text">
                  Забронировать
                </p>
              </button>
              <button class="hall_schemes__item__container__sm-window__groupBtns__btn-2">
                <p class="hall_schemes__item__container__sm-window__groupBtns__btn-2__text">
                  Посмотреть галерею
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="hall_schemes__item" id="hall_2">
        <div class="hall_schemes__item__container">
          <p>content for hall 2</p>
        </div>
      </div>
    </div>


  </div>

</template>

<style lang="scss" scoped>

.text-style-1 {
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}

.hall_schemes {

  @media (max-width: 1200px) {
    height: 1101px
  }

  &__title {
    margin-top: 32px;
    margin-bottom: 16px;
    font-family: P052;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
  }

  &__nav {
    display: inline-flex;
    gap: 2px;
  }

  &__nav-btn {
    display: inline-flex;
    height: 52px;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
    border-radius: 16px 16px 0px 0px;
    background-color: #E9EAEC;
    text-decoration: none;
    color: #63636F;
    
    &:hover {
      color: #18191B
    }
    &.active {
      color: #18191B;
      background-color: #F7F7F8;
    }
  }

  &__content {

  }

  &__item {
    display: none;

    &__container {
      width: 100%;
      height: 492px;
      border-radius: 0px 16px 16px 16px;
      background-color: #F7F7F8;
      display: flex;
      justify-content: space-between;

      @media (max-width: 1200px) {
        height: 1001px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__img-sitting {
        width: 267px;
        height: 469px;
        margin: 12px 0 11px 15%;

        @media (max-width: 1200px) {
          margin: 12px 0 11px 0%;
        }
      }

      &__sm-window {
        margin: 56px 56px 56px 0;
        width: 536px;
        height: 380px;
        border-radius: 16px;
        background: #FFF;
        box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.10);
        padding: 40px 40px 32px 40px;

        @media (max-width: 1200px) {
          margin: 0px 0px 56px 0;
        }

        &__text {
          font-family: P052;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px;
          margin-bottom: 24px;
        }

        &__info-1 {
          display: flex;
          gap: 40px;

          &__text-1 {
            width: 10rem;
            @extend .text-style-1;
            color: #ACADA5;
          }
          &__text-2 {
            @extend .text-style-1;
            color: #18191B;
          }
        }

        &__line {
          margin-top: 8px;
          margin-bottom: 8px;
          max-width: 456px;
          height: 2px;
          background: #E9EAEC;
        }

        &__groupBtns {
          margin-top: 32px;
          display: flex;
          gap: 16px;

          &__btn-1 {
            padding: 14px 32px; 
            height: 52px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 4px;
            background-color: #C6AF66;
            transition: all 1s;

            &:hover {
              cursor: pointer;
              box-shadow: 0px 0px 0px 2px #C6AF66;
              background-color: #FFF;
              transition: all 1s;
            }

            &__text {
              color:#FFF;
              font-family: Roboto;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            }
          }

          &__btn-2 {
            padding: 14px 32px;
            height: 52px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #C6AF66;
            border-radius: 4px;
            background-color: #FFF;
            transition: all 1s;

            &:hover {
              cursor: pointer;
              background-color: #C6AF66;
              transition: all 1s;
              color: #fff;
            }

            &__text {
              color:#C6AF66;
              font-family: Roboto;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            }
          }
        }
      }
    }

    &.active {
      display: block
    }
  }
}
</style>