<template>
    <div class="logo-container">
        <el-image class="logo-image" src="../public/favicon.ico" :fit="fit" />
        <span class="logo-text">面包屑导航</span>
    </div>
</template>

<script>
export default {
    name: 'index',
}
</script>

<style scoped>
.logo-container {
    vertical-align: center;
}
.logo-image {
    display: inline-block;
    height: 54px;
    width: 54px;
}
.logo-text {
    font-family: fangsong;
    font-size: x-large;
    font-weight: bold;
    vertical-align: super;
}
</style>
