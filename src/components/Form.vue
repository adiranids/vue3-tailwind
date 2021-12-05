<template>
  <form v-bind="$attrs" class='flex flex-col space-y-5 p-3'>
      <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent} from "vue";
export default defineComponent({
  name: "Form",
});
</script>
