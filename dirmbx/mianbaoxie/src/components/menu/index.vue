<template>
    <el-menu default-active="/resource" router="true" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/resource">资源</el-menu-item>
        <el-menu-item index="/my">我的</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'index.vue',
}
</script>

<style scoped></style>
