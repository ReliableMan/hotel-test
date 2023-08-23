<script setup>
import { onMounted, onUpdated, reactive } from 'vue';
import { useMainStore } from '../store/index';

import { vMaska } from "maska"

import CostCalculation from './Tabs_components/CostCalculation.vue';
import HallShemes from './Tabs_components/HallShemes.vue';
import Modal from './Modal.vue'
import Footer from './Footer.vue';

const mainStore = useMainStore();

const options = reactive({
  mask: "+7 (###) ###-##-##",
  eager: true
})

onMounted(() => {
  const tabsHref = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");
  
  tabsHref.forEach(function(item) {
    item.addEventListener("click", () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if ( !currentBtn.classList.contains('active')) {
        tabsHref.forEach(function(item) {
          item.classList.remove('active')
        });
        tabsItems.forEach(function(item) {
          item.classList.remove('active')
        })
        
        currentBtn.classList.add('active');
        currentTab.classList.add('active');

        mainStore.menuActive = false 
      }
    })
  })
})

</script>

<template>
  <div class="tabs">
    <div class="tabs__nav" :class="{forMobile: mainStore.menuActive}">
      <a href="#cost-calculation" class="tabs__nav-btn active" data-tab="#tab_1">Расчёт стоимости</a>
      <a href="#about" class="tabs__nav-btn" data-tab="#tab_2">О нас</a>
      <a href="#outside-registration" class="tabs__nav-btn" data-tab="#tab_3">Выездная регистрация</a>
      <a href="#hall-schemes" class="tabs__nav-btn" data-tab="#tab_4">Схемы залов</a>
      <a href="#menu" class="tabs__nav-btn" data-tab="#tab_5">Меню</a>
      <a href="#gallery" class="tabs__nav-btn" data-tab="#tab_6">Галерея</a>
      <a href="#reviews" class="tabs__nav-btn" data-tab="#tab_7">Отзывы</a>
      <a href="#contacts" class="tabs__nav-btn" data-tab="#tab_8">Контакты</a>
    </div>
    <div class="tabs__content ">
      <!-- 1 -->
      <div class="tabs__item active" id="tab_1">
        <CostCalculation/>
        <HallShemes/>
          <Modal v-show="mainStore.modalActive">
            <div class="modal-content">
              <div @click.stop="mainStore.changeModalActive" class="modal-content__close-svg"></div>
              <div class="modal-content__container">
                <div class="modal-content__container__block-1">
                  <h3 class="modal-content__container__block-1__title">
                    Оставьте заявку
                  </h3>
                  <p class="modal-content__container__block-1__subtitle">
                    Скоро с вами свяжется администратор
                  </p>
                  <p class="modal-content__container__block-1__politics">
                    Нажимая на кнопку "Забронировать", Вы соглашаетесь <br/>c
                    <a
                      class="modal-content__container__block-1__politics-href" 
                      href="#">Политикой конфиденциальности</a>
                  </p>
                </div>
                <div class="modal-content__container__block-2">
                  <!-- input for name -->
                  <p class="modal-content__container__block-2__inp-text">
                    Ваше имя
                  </p>
                  <input 
                    class="modal-content__container__block-2__inp" 
                    type="text" 
                    placeholder="Иван"/>
                  <!-- input for mobile phone -->
                  <p class="modal-content__container__block-2__inp-text">
                    Ваш номер телефона
                  </p>
                  <input 
                    class="modal-content__container__block-2__inp"
                    name="phone"
                    id="phone"
                    type="text" 
                    v-maska:[options]
                    placeholder="+7 (900) 000-00-00"
                    v-model="mainStore.numberValue" 
                    />

                    <!-- for screen size from 700px -->
                    <p class="modal-content__container__block-2__politics">
                    Нажимая на кнопку "Забронировать", Вы <br/> соглашаетесь c
                      <a class="modal-content__container__block-2__politics-href" 
                         href="#">Политикой конфиденциальности</a>
                    </p>

                    <button @click="mainStore.changeModalActive" 
                    class="modal-content__container__block-2__btn-1">
                      <p class="modal-content__container__block-2__btn-1__text">
                        Забронировать
                      </p>
                    </button>
                </div>
              </div>
            </div>
          </Modal>
        <Footer/>
      </div>
      <!-- 2 -->
      <div class="tabs__item" id="tab_2">
        <h3>О нас</h3>
        <!-- <Footer/> -->
      </div>
      <!-- 3 -->
      <div class="tabs__item" id="tab_3">
        <h3>Выездная регистрация</h3>
        <!-- <Footer/> -->
      </div>
      <!-- 4 -->
      <div class="tabs__item" id="tab_4">
        <h3>Схемы залов</h3>
        <!-- <Footer/> -->
      </div>
      <!-- 5 -->
      <div class="tabs__item" id="tab_5">
        <h3>Меню</h3>
      </div>
      <!-- 6 -->
      <div class="tabs__item" id="tab_6">
        <h3>Галерея</h3>
        <!-- <Footer/> -->
      </div>
      <!-- 7 -->
      <div class="tabs__item" id="tab_7">
        <h3>Отзывы</h3>
      </div>
      <!-- 8 -->
      <div class="tabs__item" id="tab_8">
        <h3>Контакты</h3>
        <!-- <Footer/> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.text-style-1 {
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; 
}

.custom-underline {
  background-image: linear-gradient(currentColor, #C6AF66);
  background-position: 0% 100%;
  background-repeat: no-repeat;
}

.tabs {

  &__nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    transition: all 1s;

    @media (max-width: 900px) {
      display: none;
      transition: all 1s;
    }
  }

  &__nav-btn {
    text-decoration: none;
    @extend .custom-underline;
    background-size: 0% 2px;
    transition: background-size .7s, color .7s;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    color: black;
    padding-bottom: 10px;

    &:hover {
      background-size: 100% 2px;
      color:#c6af66b7;
      transition: all 1s;
    }
    &.active {
      color: #C6AF66;
      @extend .custom-underline;
      background-size: 100% 2px;
    }
  }

  &__content {
    margin: 24px 166px 0 166px;
    transition: all 1s;

    @media (max-width: 1400px) {
      margin: 24px 106px 0 156px;
      transition: all 1s;
    }
    @media (max-width: 1300px) {
      margin: 24px 76px 0 156px;
      transition: all 1s;
    }
    @media (max-width: 1200px) {
      margin: 24px 56px 0 116px;
      transition: all 1s;
    }
    @media (max-width: 1100px) {
      margin: 24px 46px 0 86px;
      transition: all 1s;
    }
    @media (max-width: 1000px) {
      margin: 24px 26px 0 56px;
      transition: all 1s;
    }
    @media (max-width: 600px) {
      margin: 0;
      transition: all 1s;
    }
  }

  &__item {
    display: none;
  }

  &__item.active {
    display: block
  }
}

.modal-content {
  width: 47rem;
  // width: 842px; 
  height: 328px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.10); 
  position: relative;

  @media (max-width: 800px) {
    width: 40rem;
  }
  @media (max-width: 700px) {
    width: 25rem;
    height: 428px;
  }
  @media (max-width: 500px) {
    width: 22rem;
    height: 428px;
  }
  
  &__close-svg {
    position: absolute;
    background-image: url('../assets/svg/close_24px.svg');
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    top: 21px;
    right: 20px;
    cursor: pointer;
    transition: transform 2s;
    transform: rotate(-180deg);

    &:hover {
      transition: transform 2s;
      transform: rotate(180deg)
    }
  }

  &__container {
    margin-top: 40px;
    width: 100%;
    display: flex;
    gap: 100px;

    @media (max-width: 800px) {
      gap: 20px;
    }

    @media (max-width: 700px) {
      flex-direction: column;
    }

    &__block-1 {
      margin-left: 40px;

      &__title { 
        color: #C6AF66;
        font-family: P052;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
      }

      &__subtitle {
        margin-top: 8px;
        color: #ACADA5;
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 1px;
      }

      &__politics {
        margin-top: 119px;
        color: #ACADA5;
        @extend .text-style-1; 

        @media (max-width: 700px) {
          display: none
        }
      }

      &__politics-href {
        color: #ACADA5;
      }
    }

    &__block-2 {
      
      @media (max-width: 700px) {
        margin-left: 40px;
      }

      &__inp-text {
        color: #ACADA5;
        @extend .text-style-1;
        margin-bottom: 5px;
      }

      &__inp {
        width: 15rem;
        height: 52px;
        border-radius: 4px;
        background: #E9EAEC;
        margin-bottom: 16px;
        border: none;
        padding: 16px;

        &:focus {
          outline: none;
          box-shadow: 0px 0px 0px 0.1em #c6af66b4;
        }
      }

      &__politics {
        color: #ACADA5;
        @extend .text-style-1; 
        margin-bottom: 15px;
      }

      &__politics-href {
        color: #ACADA5;
      }

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

        &:hover > &__text {
          color: #C6AF66;
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
    }
  }
}

.forMobile {
  // display: block;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  gap: 10px;
  width: 50%;
  padding-left: 20px;
  transition: all 1s;
}

</style>