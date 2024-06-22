<template>
  <div>
    <div class="LoginView__container">
      <div class="LoginView__container__content">
        <div class="LoginView__container__content__form">
          <p>和宝子的小窝</p>
          <el-form 
            :label-position="labelPosition" 
            label-width="auto" 
            :model="userMessage" 
            style="max-width: 600px"
            :rules="rules"
          >
            <el-form-item prop="username">
              <span class="form__textColor">账号</span>
              <el-input 
                v-model="userMessage.username" 
                clearable
                placeholder="自己的名字(真实姓名)"
              />
            </el-form-item>
            <el-form-item prop="userpass">
              <span class="form__textColor">密码</span>
              <el-input 
                v-model="userMessage.userpass" 
                clearable 
                show-password
                placeholder="自己的生日(8位哦)"
              />
            </el-form-item>
            <el-form-item style="margin-top:30px">
              <el-button size="large" type="primary" @click="onSubmit(true)">登录</el-button>
              <el-button size="large" @click="onSubmit(false)">游客登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="LoginView__container__content__canvas">
          <VerificationCode/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps, FormRules } from 'element-plus'
import router from '@/config/router/index';
import VerificationCode from './components/VerificationCode.vue';

const labelPosition = ref<FormProps['labelPosition']>('top')// 定义输入框位置
const userMessage = reactive({// 定义输入框存储位置
  username: '',
  userpass: '',
})

const validatePass = (rule: any, value: any, callback: any) => {
  console.log(rule)
  if(!value) {
    callback(new Error('账号不能为空哦'))
  }else {
    const regular = /[\u4e00-\u9fa5]{3,3}/;
    if(regular.test(value)) {
      
    }else {
      
    }
  }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
  console.log(rule)
  if(!value) {
    callback(new Error('密码不能为空哦'))
  }else {
    const regular = /[0-9]{8,8}/;
    if(regular.test(value)) {
      console.log("nihao",regular.test(value));
      
    }else {
      console.log("wo nihao",regular.test(value));

    }
  }
}

const rules = reactive<FormRules<typeof userMessage>>({
  username: [{ validator: validatePass, trigger: 'blur' },],
  userpass: [{ validator: validatePass2, trigger: 'blur' },],
})

const onSubmit = (bool: Boolean) => {
  // 登录判断，当bool值为false时，直接跳转页面
  if (!bool) {
    router.push({
      path: '/home',
      query: {
        bool: bool
      }
    })
  } else {

  }
}
</script>

<style lang="scss" scoped>
@import 'element-plus/dist/index.css';
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
    display: flex;
    justify-content: center;
    align-items: center;

    &__form {
      width: 350px;
      height: 220px;

      p {
        font-size: 24px;
        text-align: center;
        font-weight: 900;
        color: $white;
      }

      .form__textColor {
        font-weight: 900;
        color: $white;
      }
    }
    &__canvas{
      width:600px;
      height:400px;
      background-color: red;
      position:fixed;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>