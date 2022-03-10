<template>
  <p>{{mainStore.count}}</p>
</template>

<script lang="ts" setup>
import {useMainStore} from "../store";

const mainStore = useMainStore()
console.log(mainStore.count)
</script>