<template>
  <button
    :class="`${typeMap[buttonType]} ${
      pillShape ? 'rounded-full' : 'rounded'
    } ${buttonType}-ringoutline px-5 
    py-2 font-semibold focus:outline-none focus:ring-1`"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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
    const typeMap = ref<Record<string, string>>({
      primary: props.gradient
        ? `bg-gradient-to-${props.gradientDirection} from-blue-400 to-blue-500 text-gray-50`
        : `bg-blue-400 text-gray-50`,
      danger: props.gradient
        ? `bg-gradient-to-${props.gradientDirection} from-red-400 to-red-500 text-gray-50`
        : `bg-red-400 text-gray-50`,
      success: props.gradient
        ? `bg-gradient-to-${props.gradientDirection} from-green-400 to-green-500 text-gray-50`
        : `bg-green-400 text-gray-50`,
      dark: props.gradient
        ? `bg-gradient-to-${props.gradientDirection} from-gray-800 to-gray-900 text-gray-50`
        : `bg-gray-900 text-gray-50`,
      light: props.gradient
        ? `bg-gradient-to-${props.gradientDirection} from-gray-50 to-gray-100 text-gray-700`
        : `bg-gray-100 text-gray-700`,
      warning: props.gradient
        ? `bg-gradient-to-${props.gradientDirection} from-yellow-400 to-yellow-500 text-gray-50`
        : `bg-yellow-400 text-gray-50`,
      secondary: props.gradient
        ? `bg-gradient-to-${props.gradientDirection} from-gray-500 to-gray-600 text-gray-50`
        : `bg-gray-600 text-gray-50`,
    });

    return {
      typeMap,
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

</style>