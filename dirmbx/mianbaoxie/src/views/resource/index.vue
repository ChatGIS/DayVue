<template>
    <div class="common-layout">
        <Type @selectedType="getTagSelected"></Type>
        <el-row>
            <el-col :span="4" v-for="(item, index) in websiteData" :key="index">
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
                                        @click="clickWeb(item.id)"
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
        <el-pagination
            v-model:currentPage="pageParam.pagenum"
            v-model:page-size="pageParam.pagesize"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :hide-on-single-page="isSinglePage"
            :total="total"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts" setup>
import Type from '../../components/type/index.vue'
import { getWebsite, clickWebsite } from '../../api/resource'
import { reactive, ref } from 'vue'

// 查询结果总数
const total = ref(0)
// 分页查询条件
const pageParam = ref({
    query: '',
    pagenum: 1,
    pagesize: 30,
    tags: [0],
})
// 查询结果是否只有一页，是则不显示分页组件
const isSinglePage = ref(true)
// 查询结果
const websiteData = ref([])
// 查询网站
const initGetWebsitesList = async (tagSelected) => {
    let tags = tagSelected ? tagSelected : []
    pageParam.value.tags = tags
    const res = await getWebsite(pageParam.value)
    total.value = res.total
    websiteData.value = res.websites
}
// 初始化查询
initGetWebsitesList([])

// 选择页码
const handleCurrentChange = (val: number) => {
    pageParam.value.pagenum = val
    initGetWebsitesList([])
}

// 点击网站
const clickWeb = (id: number) => {
    debugger
    clickWebsite(id)
}

// 获取标签值
const getTagSelected = (val) => {
    if (val.length == 1 && val.includes(0)) {
        val = []
    }
    initGetWebsitesList(val)
}
</script>

<style scoped>
.el-avatar {
    --el-avatar-text-color: #fff;
    --el-avatar-bg-color: #f4f6f7;
}
.webcard {
    margin: 5px;
}
</style>
