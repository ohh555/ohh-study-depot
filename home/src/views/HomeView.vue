<template>
  <div class="home">
    <p>首页</p>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'
import { onMounted,ref } from 'vue';

const route = useRoute()
const bool = ref();

onMounted(() => {
  bool.value = route.query.bool;
  console.log(bool.value);
})
</script>

<style lang="scss" scoped></style>
