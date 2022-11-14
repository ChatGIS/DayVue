<template>
    <div class="search-container">
        <el-input
            v-model="input"
            placeholder="开始搜索吧"
            clearable
            @keyup.enter.native="openSearchTab('Bing')"
        />
        <el-button color="#5CA8B5" plain @click="openSearchTab('Bing')">Bing</el-button>
        <el-button color="#5CA8B5" plain @click="openSearchTab('Baidu')">Baidu</el-button>
        <el-button color="#5CA8B5" plain @click="openSearchTab('Google')">Google</el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const input = ref('')
const openSearchTab = (type) => {
    if (input.value == '') {
        ElMessage({
            message: '请输入搜索关键词',
            type: 'warning',
        })
        return
    }
    let url = 'https://cn.bing.com'
    debugger
    if (type == 'Bing') {
        url = `https://cn.bing.com/search?q=${input.value}`
    } else if (type == 'Baidu') {
        url = `https://kaifa.baidu.com/searchPage?wd=${input.value}`
    } else {
        url = `https://www.google.com/search?q=${input.value}`
    }

    window.open(url)
}
</script>

<style scoped>
.search-container {
    flex: 1 0 auto;
    display: flex;
}
.el-input {
    padding-top: 12px;
}

.el-button {
    margin: 12px 6px;
}
</style>
