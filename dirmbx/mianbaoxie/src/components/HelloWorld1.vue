<template>
    <p>{{ mainStore.count }}</p>
    <el-button>Default</el-button>
</template>

<script lang="ts" setup>
import { useMainStore } from '../store'

const mainStore = useMainStore()
console.log(mainStore.count)
</script>
