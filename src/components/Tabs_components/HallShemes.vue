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
@import '@/assets/styles/hallShemes.styles.scss';
</style>