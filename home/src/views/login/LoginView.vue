<template>
  <div>
    <div class="LoginView__container">
      <div class="LoginView__container__content">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '@/styles/pubilcStyle.scss';
.LoginView__container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url('@/static/image/login-img.jpg');
  background-size: cover;

  &__content {
    width: 500px;
    height: 500px;
    background-color: $transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
  }
}
</style>