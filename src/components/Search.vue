<template>
  <div class="search-wrapper" v-bind="$attrs">
    <div class="search-input-container" 
    :class="inputClasses">
      <div class="icon-container" v-if="defaultIcon">
        <svg
          class="svg-inline--fa fa-magnifying-glass"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="magnifying-glass"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
          ></path>
        </svg>
      </div>
      <div v-else>
        <slot />
      </div>
      <input
        type="search"
        :value="modelValue"
        :placeholder="placeholder"
        @input="passInput"
        class="search-input"
      />
    </div>

    <ul
      class="list-container"
      v-if="show"
      :class="resultContainerClasses"
    >
      <transition-group name="fade">
        <li
          @click="callBackFunction"
          v-for="(item, index) in searchResult"
          class="list-item"
          :class="`${bordered ? 'border-b-2' : ''} ${resultListClasses}`"
          :key="index"
        >
          {{ resultKey != "" ? item[resultKey] : item }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    inputClasses: {
      type: [String],
      default: "",
    },
    searchResult: {
      type: [Array, Object],
      default: () => {},
    },
    //   if it's an array of object
    resultKey: {
      type: String,
      default: "",
    },
    resultContainerClasses: {
      type: String,
      default: "",
    },
    resultListClasses: {
      type: String,
      default: "",
    },
    resultCallBack: {
      type: Function,
      default: () => () => console.log(""),
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    defaultIcon: {
        type: Boolean,
        default: true
    }
  },

  emits: ['udpate:modelValue'],

  setup(props, {emit} : any) {
    const show = ref<boolean>(false);
    watch(
      () => props.searchResult,
      (newValue) => {
        if (newValue) show.value = true;
      }
    );

    function callBackFunction() : void {
      show.value = false;
      props.resultCallBack();
    }

    function passInput(e : Event) : void{
      const target = e.target as HTMLInputElement
      emit('update:modelValue', target.value)
    }

    return {
      passInput,
      callBackFunction,
      show,
    };
  },
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.search-wrapper{
  @apply flex flex-col;
}
.search-input-container{
  @apply w-full flex items-center relative px-2 border;
}
.icon-container{
  @apply w-5 h-5 ml-2;
}
.search-input{
  @apply p-2 ml-12 focus:outline-none h-full border-none transition-all duration-200 ease-in-out border w-11/12;  
}
.list-container{
  @apply w-full border space-y-1 rounded-b transition-all duration-200 ease-in-out;
}
.list-item{
  @apply w-full p-2 cursor-pointer transition-all duration-200 ease-in-out;
}
</style>
