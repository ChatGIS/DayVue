<template>
    <div class="common-layout">
        <el-container>
            <el-header id="header">Header</el-header>
            <el-main>
                <el-row>
                    <el-col :span="4" v-for="(item, index) in tableData" :key="index">
                        <el-card shadow="hover" class="webcard">
                            <el-row>
                                <el-col :span="8">
                                    <el-avatar :size="50" :src="item.favicon" />
                                </el-col>
                                <el-col :span="16">
                                    <el-row>
                                        <el-col
                                            ><el-link
                                                :href="item.url"
                                                target="_blank"
                                                :title="item.name"
                                                >{{
                                                    item.name.length < 8
                                                        ? item.name
                                                        : item.name.substring(0, 8)
                                                }}</el-link
                                            ></el-col
                                        >
                                    </el-row>
                                    <el-row>
                                        <el-tag class="mx-1" size="small">前端</el-tag>
                                        <el-tag class="mx-1" size="small">JS</el-tag>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer id="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { getWebsite } from '../api/resource'
import { reactive, ref } from 'vue'

const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['small', '', 'large'] as const,
})
const tableData = ref([])
const test = ref('aaa')
const initGetUsersList = async () => {
    const par = {
        query: '',
        pagenum: 1,
        pagesize: 100,
    }
    const res = await getWebsite(par)
    tableData.value = res.websites
}

initGetUsersList()
</script>

<style scoped>
#header,
#footer {
    background-color: #5ca8b5;
}

.el-avatar {
    --el-avatar-text-color: #fff;
    --el-avatar-bg-color: #f4f6f7;
}
.webcard {
    margin: 5px;
}
</style>
