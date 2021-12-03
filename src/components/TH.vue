<template>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                <slot />
    </th>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TH'
})
</script>