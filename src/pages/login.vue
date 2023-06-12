<template>
  <!-- flex布局 -->
  <el-row class="min-h-screen bg-indigo-500">
    <el-col :span="16" class="flex items-center justify-center">
      <div>
        <div class="text-light-50 font-bold text-5xl mb-4">欢迎光临</div>
        <div class="text-gray-200 text-sm">此站点为《vue3 + vite实战商城后台开发》演示地址</div>
      </div>
    </el-col>
    <el-col :span="8" class=" bg-light-50 flex justify-center items-center flex-col">
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round class="w-[250px] bg-indigo-500" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>


<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}

</script>