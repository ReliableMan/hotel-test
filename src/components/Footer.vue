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
@import '@/assets/styles/footer.styles.scss';
</style>