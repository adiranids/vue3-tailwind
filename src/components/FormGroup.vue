<template>
  <div class="form-group-wrapper">
    <div
      v-bind="$attrs"
      :class="`form-group-default ${row ? 'form-group-row' : 'form-group-col'}`"
    >
      <Label :class="`${row ? 'label-row' : 'label-col'} ${labelClasses}`">{{
        label
      }}</Label>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        @input="passValue"
        :class="`
            ${inputClasses} 
            input-default
            ${row ? 'input-row' : 'input-col'}
            `"
      />
    </div>
    <ToastMessage type="error" v-if="errorVal">{{ errorVal }}</ToastMessage>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from "vue";

const Label = defineAsyncComponent(() => import("./Label.vue"));
const ToastMessage = defineAsyncComponent(() => import("./ToastMessage.vue"));

export default defineComponent({
  components: {
    Label,
    ToastMessage,
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    row: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    inputClasses: {
      type: String,
      default: "",
    },
    labelClasses: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: (propValue: string): boolean => {
        return (
          [
            "text",
            "email",
            "tel",
            "number",
            "password",
            "search",
            "otp",
            "radio",
            "checkbox",
            "url",
            "date",
            "color",
            "week",
            "datetime-local",
            "reset",
            "file",
            "month",
            "image",
            "time",
            "hidden",
          ].indexOf(propValue) > -1
        );
      },
    },
    placeholder: {
      type: String,
      default: (props: any) => "Enter " + props.label.toLowerCase(),
    },
    confirm: {
      type: Boolean,
      default: false,
    },
    confirmWith: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    function passValue(e: Event): void {
      const target = e.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    }

    const errorVal = computed(() => {
      if (
        props.confirm &&
        props.modelValue != props.confirmWith &&
        props.modelValue
      )
        return (
          props.error || "Confirm password and password needs to be the same"
        );
      else if (props.confirm && props.modelValue == props.confirmWith)
        return "";
      else if (!props.confirm) return props.error;
    });

    return { passValue, errorVal };
  },
});
</script>
<style scoped>
.form-group-wrapper {
  @apply flex flex-col space-y-1;
}
.form-group-default {
  @apply w-full flex;
}
.form-group-row {
  @apply flex-row items-center md:flex-nowrap flex-wrap md:space-x-3;
}
.form-group-col {
  @apply flex-col space-y-1;
}
.label-row {
  @apply md:pr-2 md:w-1/4 w-full;
}
.label-col {
  @apply pb-2;
}
.input-default {
  @apply p-2
            border
            focus:outline-none
            rounded
            transition-all
            duration-200
            ease-in-out;
}
.input-row {
  @apply md:w-3/4 w-full;
}
.input-col {
  @apply w-full;
}
</style>
