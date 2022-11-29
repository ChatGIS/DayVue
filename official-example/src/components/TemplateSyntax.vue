<script setup lang='ts'>
import {ref} from 'vue'

const msg = ref(0)
const rawHtml = ref('<span style="color: red">This should be red.</span>')
const dynamicId = ref('myDiv')
const isButtonDisabled = ref(true)
const objectOfAttrs = {
    id: 'container',
    class: 'wrapper'
}
const helloWorld = ref('HelloWorld')
const isIf = ref(true)
</script>

<template>
    <div>
        <h2>文本插值</h2>
        <span>文本插值：{{ msg }}</span>
    </div>
    <div>
        <h2>原始HTML</h2>
        <p>html语句使用文本插值： {{ rawHtml }}</p>
        <p>html语句使用v-html指令： <span v-html="rawHtml"></span></p>
    </div>
    <div>
        <h2>Attribute 绑定</h2>
        <div :id="dynamicId">v-bind指令，实现动态id</div>
        <button :disabled="isButtonDisabled">Button, 布尔值属性</button>
        <div v-bind="objectOfAttrs">动态绑定多个值</div>
    </div>
    <div>
        <h2>JavaScript表达式</h2>
        <p>在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：</p>
        <p>1、在文本插值中（双大括号）</p>
        <span>加法表达式：{{ msg + 1 }}</span>
        <br>
        <span>三元表达式：{{ isButtonDisabled? '真' : '假' }}</span>
        <br>
        <span>字符串函数表达式：{{ helloWorld.split('').reverse().join('') }}</span>
        <p>
            2、在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中
        </p>
        <div :id="`list-${msg}`">该div的id是模板字符串</div>
    </div>
    <div>
        <h2>指令 Directives</h2>
        <p v-if="isIf">v-if指令</p>
    </div>
</template>

<style scoped>
h2 {
    margin-top: 20px;
}
</style>