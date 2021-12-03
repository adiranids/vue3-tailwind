<template>
  <input
    v-bind="$attrs"
    :value="props.modelValue"
    @input="passValue"
    class="p-1 focus:outline-none rounded shadow transition-all duration-200 ease-in-out"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
 modelValue: {
      type: [String, Number],
      default: "",
    },
}>()

const emits = defineEmits<{
  (e:"update:modelValue", value: string) : void
}>()


function passValue(e : Event) : void
{
 const target = e.target as HTMLInputElement
 emits('update:modelValue', target.value || '')
}

</script>
