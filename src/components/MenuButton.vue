<template>
    <button @click="open=!open" v-bind="$attrs">
        <slot />
    </button>
</template>

<script setup lang="ts">
import {inject} from "vue"
const open = inject("ardsMenuOpen")
</script>

