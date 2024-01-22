<template>
    <div class="p-4 border-gray-800 shadow-md">hello word</div>
    <button class="... ring-2 ring-blue-500">Create account{{ msg }}</button>
    <div ref="target">{{ x }}{{ y }}</div>
    <HelloWorld msg="auto-vue-components"></HelloWorld>
    <UserComponents></UserComponents>
    <el-tag>测试</el-tag>
    <ReloadPrompt></ReloadPrompt>
</template>

<script setup lang="ts">
const msg = ref(0)
const target = ref(null)
import { registerSW } from 'virtual:pwa-register'
const { x, y } = useMouseInElement(target)
onMounted(() => {
    registerSW({
        immediate: true,
        onNeedRefresh() {
            console.log('🚀 ~ onNeedRefresh ~ onNeedRefresh:')
        },
        onRegisteredSW(_url, registration) {
            setInterval(() => {
                registration && registration.update()
            }, 5000)
        }
    })
})
</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: default
</route>
