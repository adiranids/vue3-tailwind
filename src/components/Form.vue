<template>
  <form v-bind="$attrs" class='form'>
      <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent} from "vue";
export default defineComponent({
  name: "Form",
});
</script>
<style scoped>
.form {
  @apply flex flex-col space-y-5 p-3;
}
</style>