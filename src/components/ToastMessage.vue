<template>
    <div v-bind="$attrs" :class="type">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        type:{
            type: String,
            validator: (propValue: string)=>{
                return ['error', 'success', 'normal'].indexOf(propValue) > -1
            },
            default: 'normal'
        }
    },
})
</script>

<style scoped>
.error {
    @apply text-red-500;
}
.success{
    @apply text-green-500;
}
.normal{
    @apply text-base;
}
</style>