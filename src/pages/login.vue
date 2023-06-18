<template>
  <!-- flex布局 -->
  <el-row class="login-container">
    <!-- 响应式布局 -->
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div class="title">欢迎光临</div>
        <div class="subtitle">此站点为《vue3 + vite实战商城后台开发》演示地址</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="title">欢迎回来</h2>
      <div class="subtitle">
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form ref="ruleFormRef" :rules="rules" :model="form" class="w-[250px]">
        <el-form-item prop="username">
          <el-input :prefix-icon="User" v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input :prefix-icon="Lock" type="password" v-model="form.password" show-password placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round color="#626aef" class="w-[250px]" @click="onSubmit(ruleFormRef)">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})

const ruleFormRef = ref()

const rules = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' }
  ]
})

const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit')
    } else {
      console.log('error submit', fields)
    }
  })
}
</script>

<style scoped>
.login-container {
  @apply min-h-screen bg-indigo-500;
}

.login-container .left,
.login-container .right {
  @apply flex justify-center items-center;
}

.left .title {
  @apply text-light-50 font-bold text-5xl mb-4;
}

.left .subtitle {
  @apply text-gray-200 text-sm;
}

.right {
  @apply bg-light-50 flex-col;
}

.right .title {
  @apply font-bold text-3xl text-gray-800;
}

.right .subtitle {
  @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}

.line {
  @apply h-[1px] w-16 bg-gray-200;
}
</style>