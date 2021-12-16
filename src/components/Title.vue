<template>
  <h1 v-bind="$attrs" :class="size">
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    size: {
      type: String,
      validator: (propValue: string) => {
        return ["h1", "h2", "h3", "small", "normal"].indexOf(propValue) > -1;
      },
      required: true,
    },
  },
});
</script>
<style scoped>
.h1{
  @apply md:text-3xl text-2xl;
}
.h2{
  @apply md:text-2xl text-xl;
}
  .h3{@apply md:text-xl text-lg;}

  .small{ @apply text-sm;}

  .normal{ @apply text-base;}
</style>