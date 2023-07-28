<template>
  <div class="header">
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
          <img 
            class="icons-img"
            src="@/assets/icons/telegram.png" 
            alt="icons-connect-img"
          >
          <img 
            class="icons-img"
            src="@/assets/icons/whatsapp.png" 
            alt="icons-connect-img"
          >
        </div>
          <div class="header__info">
            <p class="number-size"> +7 (123) 45-67-89</p>
            <a 
              class="number-href"
              href="tel:+7123456789">Перезвоните мне
            </a>
          </div>

  </div>

</template>

<style lang="scss" scoped>

.text-style-1 {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.header {
  margin: 12px 166px 40px 167px;
  display: flex;
  width: 100%;

  &__logo {
    width: 40%
  }
  
  &__location {
    display: flex;
    align-items: center;
    gap: 16px;
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
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.logo-img {
  width: 109px;
  height: 56px;
}
.icons-img {
  width: 48px;
  height: 48px;
}
.number-size {
  @extend .text-style-1;
}
.number-href {
  margin-left: 37px;
  color: var(--ver-20, #C6AF66);
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
}
</style>