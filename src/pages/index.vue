<template>
    <div>
        后台首页
    </div>
    <el-button type="primary" @click="get">get</el-button>
    <el-button type="primary" @click="remove">remove</el-button>
</template>

<script setup>
import { getToken, removeToken } from '~/composables/auth'

function get() {
    console.log(getToken())
}

function remove() {
    removeToken()
}

</script>