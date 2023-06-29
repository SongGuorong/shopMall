<template>
    <div>
        后台首页
    </div>
    <el-button type="primary" @click="get">get</el-button>
    <el-button type="primary" @click="remove">remove</el-button>
</template>

<script setup>
import { useCookies } from "@vueuse/integrations/useCookies"

const cookies = useCookies()

function get() {
    console.log(cookies.get('admin-token'))
}

function remove() {
    cookies.remove('admin-token')
}

</script>