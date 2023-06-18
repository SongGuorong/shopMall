<template>
    <div>
        后台首页
    </div>
    <el-button @click="add"> {{ count }} </el-button>
    <el-button type="primary" @click="increase"> {{ form.count }} </el-button>
    <NotFound />
</template>

<script setup>
import NotFound from '~/pages/404.vue'
import {reactive, ref} from 'vue'

const count = ref(0)

function add() {
    count.value++
}

const form = reactive({
    count: 0
})

function increase() {
    form.count++
}

</script>