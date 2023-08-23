<script setup>
</script>

<template>

  <div class="footer">
    <div class="footer__content">
      <img
        class="footer__content__img-logo" 
        src="../assets/icons/footer-logo.png" 
        alt="img-footer-logo"
      >
        <div class="footer__content__social">
          <p class="footer__content__social-text">
            Мы в соц. сетях
          </p>
          <div class="footer__content__social-links">
            <!-- 1-link -->
            <a class="footer__content__social-links__link" href="#faceebok">
              <img 
                src="../assets/svg/faceebok.svg" 
                alt="social-link-img"
              >
            </a>
            <!-- 2-link -->
            <a class="footer__content__social-links__link" href="#viber">
              <img 
                src="../assets/svg/viber.svg" 
                alt="social-link-img"
              >
            </a>
            <!-- 3-link -->
            <a class="footer__content__social-links__link" href="#vk">
              <img 
                src="../assets/svg/vk.svg" 
                alt="social-link-img"
              >
            </a>
          </div>
        </div>
      </div>
      <p class="footer__copyright">© Hotel Stavropol, 2020</p>

  </div>

  
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 32px;
  right: 0;
  position: absolute;
  width: 100%;
  height: 213px;
  border-radius: 20px 20px 0px 0px;
  background: #424343; 

  @media (max-width: 500px) {
    height: 328px; 
  }

  &__content {
    display: flex;
    justify-content: space-between;
    padding: 64px 166px 80px 166px;

    @media (max-width: 1200px) {
      display: flex;
      justify-content: space-around;
      padding: 64px 0px 80px 0px;
      align-items: center;
    }
    @media (max-width: 500px) {
      flex-direction: column;
      padding-top: 40px;
      padding-left: 36px;
      align-items: unset;

    }

    &__img-logo {
      width: 109px;
      height: 56px;

      @media (max-width: 500px) {
        margin-bottom: 40px;
      }
    }

    &__social {
      display: flex;
      flex-direction: column;
      margin-right: 90px;
    }

    &__social-text {
      font-family: Lato;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      color: #fff;
    }

    &__social-links {
      margin-top: 16px;
      display: flex;
      gap: 20px;
      
      &__link {
        width: 52px;
        height: 52px;
        border-radius: 16px;
        background-color: #ACADA5;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
    }
  }

  &__copyright {
    position: absolute;
    top: 190px;
    left: 166px;
    color: #fff;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: 1200px) {
      left: 15%
    }
    @media (max-width: 1000px) {
      left: 12%
    }

    @media (max-width: 500px) {
      top: 90%;
      left: 36px
    }
  }
}

</style>