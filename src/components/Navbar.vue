<script setup>
import { useMainStore } from '../store/index';
const mainStore = useMainStore();

import Tabs from './Tabs.vue';

</script>

<template>
  <div class="container">
    <div class="header">

      <div @click="mainStore.changeMenuActive" class="header__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="header__logo">
        <img
          class="logo-img" 
          src="@/assets/icons/header-logo.png"
          alt="img-logo"
        >
      </div>
        <div class="header__location">
          <img 
            class="header__location-img"
            src="@/assets/icons/Map_Pin.png"
            alt="img-map-pin"
          >
          <p class="header__location-text">
            г. Ставрополь,<br/>ул. Пушкина 272
          </p>
        </div>
          <div class="header__icons-connect">
            <a target="_blank" href="https://t.me/relax_tonight">
              <img 
                class="icons-img"
                src="@/assets/icons/telegram.png" 
                alt="icons-connect-img"
              >
            </a>
            <a target="_blank" href="https://wa.me/8123465789">
              <img 
                class="icons-img"
                src="@/assets/icons/whatsapp.png" 
                alt="icons-connect-img"
              >
            </a>
          </div>
            <div class="header__info">
              <p class="number-size"> +7 (123) 45-67-89</p>
              <a 
                class="number-href"
                href="tel:+7123456789">Перезвоните мне
              </a>
            </div>

            <div @click="mainStore.showAlert" class="header__info-btn">
              <p class="header__info-btn__text">Позвонить</p>
            </div>

          </div>
          
          <Tabs/>
      </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/navbar.styles.scss';
</style>