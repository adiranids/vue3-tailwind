<template>
    <th scope="col" class="th-default">
                <slot />
    </th>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TH'
})
</script>

<style scoped>
.th-default {
@apply px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider;
}
</style>