import { defineStore,createPinia } from 'pinia';
import{ ref } from 'vue';
const pinia = createPinia();

export const useCounterStore = defineStore('counter', () => {
  let token = ref<boolean>() // 定义登录后传过来的身份参数
  return {
    token
  }
});

export default pinia;