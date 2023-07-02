<template>
    <div>
        后台首页
    </div>
    
    用户信息: {{ userInfoStore.user }}

</template>

<script setup>
import { useUserInfoStore } from '~/store/index'

const userInfoStore = useUserInfoStore()

</script>