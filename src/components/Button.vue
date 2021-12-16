<template>
  <button
    :class="`${typeClass} ${
      pillShape ? 'rounded-circle' : 'rounded-corner'
    } ${buttonType}-ringoutline button`"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    buttonType: {
      type: String,
      validator: (propValue: string) => {
        return (
          [
            "primary",
            "success",
            "danger",
            "dark",
            "light",
            "warning",
            "secondary",
          ].indexOf(propValue) > -1
        );
      },
      default: "primary",
    },
    gradient: {
      type: Boolean,
      default: true,
    },
    gradientDirection: {
      type: String,
      validator: (propValue: string) => {
        return ["r", "l", "t", "b"].indexOf(propValue) > -1;
      },
      default: "r",
    },
    pillShape: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const typeClass = computed(()=>{
      return props.gradient ? `gradient-${props.gradientDirection} ${props.buttonType}-gradient` : props.buttonType
    })
    return {
      typeClass,
    };
  },
});
</script>
<style scoped>
.primary-ringoutline{
    @apply ring-blue-600;
}
.danger-ringoutline{
    @apply ring-red-600;
}
.success-ringoutline{
    @apply ring-green-600;
}
.dark-ringoutline{
    @apply ring-gray-900;
}
.secondary-ringoutline{
    @apply ring-gray-600;
}
.light-ringoutline{
    @apply ring-gray-200;
}
.warning-ringoutline{
    @apply ring-yellow-600;
}
.button{
    @apply px-5 
    py-2 font-semibold focus:outline-none focus:ring-1;
}
.rounded-circle{
    @apply rounded-full;
}
.rounded-corner{
    @apply rounded;
}
.gradient-r{
    @apply bg-gradient-to-r; 
}

.gradient-l{
    @apply bg-gradient-to-l; 
}

.gradient-t{
    @apply bg-gradient-to-t; 
}
.gradient-b{
    @apply bg-gradient-to-b; 
}
.primary-gradient{
    @apply from-blue-400 to-blue-500 text-gray-50;
}

.warning-gradient{
    @apply from-yellow-400 to-yellow-500 text-gray-50;
}

.secondary-gradient{
    @apply from-gray-500 to-gray-600 text-gray-50;
}

.danger-gradient{
    @apply from-red-400 to-red-500 text-gray-50;
}

.success-gradient{
    @apply from-green-400 to-green-500 text-gray-50;
}
.dark-gradient{
    @apply  from-gray-800 to-gray-900 text-gray-50;
}
.light-gradient{
    @apply from-gray-50 to-gray-100 text-gray-700;
}

.primary{
    @apply bg-blue-400 text-gray-50;
}
.danger{
    @apply bg-red-400 text-gray-50;
}
.warning{
    @apply bg-yellow-400 text-gray-50;
}
.secondary{
    @apply bg-gray-600 text-gray-50;
}
.success{
    @apply bg-green-400 text-gray-50;
}

.dark{
@apply bg-gray-900 text-gray-50;
}
.light{
    @apply bg-gray-100 text-gray-700;
}
</style>