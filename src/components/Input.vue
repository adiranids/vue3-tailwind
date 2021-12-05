<template>
  <input
    v-bind="$attrs"
    :value="props.modelValue"
    @input="passValue"
    class="p-2 focus:outline-none rounded shadow transition-all duration-200 ease-in-out"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";

interface Props {
  modelValue: string | number
}

// setup script props with default
const props = withDefaults(defineProps<Props>(), {
  modelValue: ""
})

const emits = defineEmits<{
  (e:"update:modelValue", value: string) : void
}>()


function passValue(e : Event) : void
{
 const target = e.target as HTMLInputElement
 emits('update:modelValue', target.value || '')
}

</script>
