<template>
    <div class="p-4 border-gray-800 shadow-md">
        hello word
    </div>
    <button class="... ring-2 ring-blue-500">
        Create account{{ msg }}
    </button>
    <div ref="target">
        {{ x }}{{ y }}
    </div>
    <HelloWorld msg="auto-vue-components"></HelloWorld>
    <UserComponents></UserComponents>
</template>

<script setup lang="ts">
const msg = ref(0)
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>