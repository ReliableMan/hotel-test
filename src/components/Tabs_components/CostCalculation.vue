<script setup>

</script>

<template>
  <div class="cost-calc">
    <h3 class="cost-calc__main-sb-text">Рассчитайте стоимость вашего банкета</h3>

      <div class="cost-calc__container">
        <!-- 1 карточка -->
        <div class="cost-calc__container__block1">

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
        font-family: 'Lato', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px
      }
    }
  }
}
</style>