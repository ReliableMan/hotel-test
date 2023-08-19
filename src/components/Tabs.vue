<script setup>
import { onMounted, ref } from 'vue';
import { useMainStore } from '../store/index';

import CostCalculation from './Tabs_components/CostCalculation.vue';
import HallShemes from './Tabs_components/HallShemes.vue';
import Modal from './Modal.vue'
import Footer from './Footer.vue';

const mainStore = useMainStore();

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
      }
    })
  })
})
</script>

<template>
  <div class="tabs">
    <div class="tabs__nav">
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
              <h3>This is a modal header</h3>
              <p>this is a modal message</p>
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
  }

  &__item {
    display: none;
  }

  &__item.active {
    display: block
  }
}

.modal-content {
  width: 55vw;
  // width: 842px; 
  height: 328px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.10); 
}

</style>