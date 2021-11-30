<template>
  <div class="overflow-x-auto">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div :class="`overflow-hidden ${bordered ? 'border border-gray-100' : 'border-none'} shadow`">
        <table class="min-w-full divide-y divide-gray-200">
          <thead :class="headerStyle">
            <slot name="header" />
          </thead>
          <tbody :class="bodyStyle" >
            <slot name="body" />
          </tbody>
          <tfoot :class="footerStyle">
            <slot name="footer" />
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

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
  setup(props){
     const headerStyle = computed(()=>props.darkMode ? 'bg-black text-gray-50' : 'bg-gray-50 text-gray-500' )
     const bodyStyle = computed(()=>props.darkMode ? 'bg-gray-900 text-gray-50 divide-y divide-gray-500' : 'bg-white text-gray-900 divide-y divide-gray-200')
     const footerStyle = computed(()=>props.darkMode ? 'bg-black text-gray-50' : 'bg-gray-50 text-gray-500')

     return{
         headerStyle,
         bodyStyle,
         footerStyle
     }
  }
});

</script>
