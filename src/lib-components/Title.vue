<template>
  <h1 v-bind="$attrs" :class="sizeClassMapArray[size]">
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    size: {
      type: String,
      validator: function (propValue: string) {
        return ["h1", "h2", "h3", "small", "normal"].indexOf(propValue) > -1;
      },
    },
  },

  setup() {
    const sizeClassMapArray = ref<Record<string, string>>({
      h1: "md:text-3xl text-2xl",

      h2: "md:text-2xl text-xl",

      h3: "md:text-xl text-lg",

      small: "text-sm",

      normal: "text-base",
    });

    return {
        sizeClassMapArray
    }
  },
});
</script>
