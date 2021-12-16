<template>
    <td class="td-default">
        <slot />
    </td>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TD'
})
</script>

<style scoped>
.td-default{
    @apply px-6 py-4 whitespace-nowrap;
}
</style>