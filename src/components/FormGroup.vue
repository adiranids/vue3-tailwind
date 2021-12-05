<template>
  <div class="flex flex-col space-y-1">
    <div
      v-bind="$attrs"
      :class="`w-full flex ${
        row
          ? 'flex-row items-center md:flex-nowrap flex-wrap md:space-x-3'
          : 'flex-col space-y-1'
      }`"
    >
      <Label
        :class="`${row ? 'md:pr-2 md:w-1/4 w-full' : 'pb-2'} ${labelClasses}`"
        >{{ label }}</Label
      >
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        @input="passValue"
        :class="`
            ${inputClasses} 
            p-2
            border
            focus:outline-none
            rounded
            transition-all
            duration-200
            ease-in-out
            ${row ? 'md:w-3/4 w-full' : 'w-full'}
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
      default: 'text',
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
        default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    function passValue(e: Event): void {
      const target = e.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    }

  
    const errorVal = computed(()=>{
        if (props.confirm && props.modelValue != props.confirmWith && props.modelValue) 
            return props.error || "Confirm password and password needs to be the same";
        else if (props.confirm && props.modelValue == props.confirmWith)
            return "";
        else if(!props.confirm)
            return props.error
    })



    return { passValue, errorVal };
  },
});
</script>
