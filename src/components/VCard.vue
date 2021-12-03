<template>
  <div v-bind='$attrs'
    class="w-80 h-52 shadow m-auto rounded-lg lg:transform lg:scale-150 flex flex-col overflow-hidden relative bg-white"
  >
    <div class="flex w-full h-48 relative">
      <div class="h-48 w-48 pl-3">
        <div class="flex absolute -top-7 justify-between">
          <img :src="companyLogo" alt="Logo" class="h-36 w-36" />
          <div class="mt-12 space-y-3">
            <slot name="socialicons" />
          </div>
        </div>

        <div class="pl-3 space-y-1 mt-20 pr-3">
          <h1 class="text-gray-800 font-bold uppercase">
            <slot name="name" />
          </h1>
          <h2 class="text-xs italic tracking-wide">
            <slot name="title" />
          </h2>
          <h2 class="text-xs tracking-wide">
            <slot name="contact" />
          </h2>
        </div>
      </div>

      <div
        class="space-y-2 grid grid-rows-2 place-items-center items-center mx-auto py-1"
      >
        <div
          class="h-20 w-20 rounded-md relative bg-cover bg-center"
          :style="`background-image:url(${profileImage})`"
        ></div>
        <slot name="qrcode" />
      </div>
    </div>

    <div class="col-span-2 h-4" :class="lineColor"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    profileImage: {
      type: String,
      default: "",
    },
    companyLogo: {
      type: String,
      default: "",
    },
    lineColor: {
      type: String,
      default: "",
    },
  },
});
</script>
