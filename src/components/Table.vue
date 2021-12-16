<template>
  <div class="table-wrapper-main">
    <div class="table-wrapper">
      <div :class="`table-container  ${bordered ? 'container-border' : 'container-no-border'}`">
        <table class="table">
          <thead :class="darkMode ? 'header-dark' : 'header-light'">
            <slot name="header" />
          </thead>
          <tbody :class="darkMode ? 'body-dark' : 'body-light'" >
            <slot name="body" />
          </tbody>
          <tfoot :class="darkMode ? 'footer-dark' : 'footer-light'">
            <slot name="footer" />
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table",
  props:{
      bordered: {
          type: Boolean,
          default: true
      },
      darkMode:{
          type: Boolean,
          default: false
      }
  },
});

</script>

<style scoped>
.header-dark{
  @apply bg-black text-gray-50;
}
.header-light{
  @apply bg-gray-50 text-gray-500;
}
.body-dark{
  @apply bg-gray-900 text-gray-50 divide-y divide-gray-500;
}
.body-light{
  @apply bg-white text-gray-900 divide-y divide-gray-200;
}
.footer-dark{
  @apply bg-black text-gray-50;
}
.footer-light{
  @apply bg-gray-50 text-gray-500;
}

.table-wrapper-main{
  @apply overflow-x-auto;
}
.table-wrapper{
  @apply py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8;
}
.table-container{
  @apply overflow-hidden shadow;
}
.container-border{
  @apply border border-gray-100;
}
.container-no-border{
  @apply border-none;
}
.table{
  @apply min-w-full divide-y divide-gray-200;
}
</style>