<template>
    <div v-bind="$attrs" class="menubar" :class="ardsMenuOpen ? 'full-height' : props.heightClass ">
        <slot />
    </div>
</template>

<script setup lang="ts">
import {ref, provide, watch} from "vue"

interface Props {
  heightClass?: string
}

const emit = defineEmits<{
    (e:"onToggle", value:boolean) : void
}>()
const props = withDefaults(defineProps<Props>(),
    {
        heightClass: ""
    }
)

const ardsMenuOpen = ref(false)

provide("ardsMenuOpen", ardsMenuOpen)

watch(ardsMenuOpen, ()=>{
    emit("onToggle", ardsMenuOpen.value)
})

</script>

<style scoped>
.menubar{
    @apply w-full transition-all ease-in-out duration-150;
}
.full-height{
    @apply h-screen;
}
</style>