<script setup>
import { useMainStore } from '../store/index';
const mainStore = useMainStore();

import Tabs from './Tabs.vue';
import Swal from 'sweetalert2';

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

            <div @click="showAlert" class="header__info-btn">
              <p class="header__info-btn__text">Позвонить</p>
            </div>

          </div>
          
          <Tabs/>
      </div>
</template>

<style lang="scss" scoped>
.container {
  width: auto;
  height: 142px;
  border-radius: 0px 0px 16px 16px;
  border: 1px solid var(--ver-20, #F7F7F8);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
  transition: all 0.5s;


  @media (max-width: 900px) {
    transition: all 0.5s;
    height: 120px; 
  }

  @media (max-width: 600px) {
    transition: all 0.5s;
    height: 80px; 
    border-radius: 0px;
  }
}

.text-style-1 {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.header {
  margin: 12px 166px 32px 167px;
  display: flex;
  
  @media (max-width: 900px) {
    margin: 12px 0px 40px 60px;
  }

  @media (max-width: 700px) {
    margin: 12px 0px 40px 20px;
  }


  &__logo {
    width: 50%
  }
  
  &__location {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 900px) {
      display: none
    }
  }

  &__location-img {
    width: 24px;
    height: 24px;
  }

  &__location-text {
    @extend .text-style-1;
    width: 200px;
  }

  &__icons-connect {
    margin: 0 48px 0 48px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 700px) {
      display: none
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 600px) {
      display: none
    }
  }

  &__info-btn {
    display: none;

    @media (max-width: 600px) {
      display: inline-flex;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 10px; 
      border-radius: 4px; 
      background:#C6AF66;
      cursor: pointer
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

  &__menu-btn {
    display: none;

    @media (max-width: 900px) { 
      margin-top: 5px;
      margin-right: 16px;
      display:block;
      width: 30px;
      height: 30px;
      position: relative;
      z-index:2;
      overflow: hidden;
      cursor: pointer;

    span {
      width: 24px;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #C6AF66;
      transition: all 0.5s;
    }
    span:nth-of-type(2) {
      top: calc(50% - 5px)
    }
    span:nth-of-type(3) {
      top: calc(50% + 5px)
    }
   }
  }
}

.logo-img {
  width: 109px;
  height: 56px;

  @media (max-width: 800px) {
    width: 78.887px;
    height: 40px; 
   }
}
.icons-img {
  width: 48px;
  height: 48px;
}
.number-size {
  @extend .text-style-1;
  width: 164px;
}
.number-href {
  margin-left: 37px;
  color:  #C6AF66;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
}
.number-href-sweetalert {
  color:  #C6AF66;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
}
</style>