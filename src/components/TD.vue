<template>
    <td class="px-6 py-4 whitespace-nowrap">
        <slot />
    </td>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TD'
})
</script>