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
@import '../assets/styles/tabs.styles.scss';
</style>