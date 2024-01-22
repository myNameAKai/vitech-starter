<template>
    <div>home</div>
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
