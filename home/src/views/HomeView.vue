<template>
  <div class="home">
    <p>首页</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, h } from 'vue';
import { ElNotification } from 'element-plus'
import { useCounterStore } from '@/store/pinia';


const counterStore = useCounterStore();

const num = ref(999999);

const open = () => {
  ElNotification({
    title: '欢迎您光临我和宝子的小窝',
    message: h('i', { style: 'color: teal' }, `我和宝子相爱${num.value}天啦`),
    duration: 3000,
    offset: 100,
  })
}

onMounted(() => {
  console.log(counterStore.token);
  open()
})
</script>

<style lang="scss" scoped>
</style>


