<template>
  <div v-bind='$attrs'
    class="vcard-container"
  >
    <div class="vcard-wrap">
      <div class="vcard-section-1">
        <div class="company-logo-container">
          <img :src="companyLogo" alt="Logo" class="logo-image" />
          <div class="social-icons">
            <slot name="socialicons" />
          </div>
        </div>

        <div class="person-details-container">
          <h1 class="person-name">
            <slot name="name" />
          </h1>
          <h2 class="person-title">
            <slot name="title" />
          </h2>
          <h2 class="person-contact">
            <slot name="contact" />
          </h2>
        </div>
      </div>

      <div
        class="profileimage-qrcode-wrapper"
      >
        <div
          class="profile-image"
          :style="`background-image:url(${profileImage})`"
        ></div>
        <slot name="qrcode" />
      </div>
    </div>

    <div class="bottom-line" :class="lineColor"></div>
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
<style scoped>
.vcard-container {
  @apply w-80 h-52 shadow m-auto rounded-lg lg:transform lg:scale-150 flex flex-col overflow-hidden relative bg-white;
}
.vcard-wrap {
  @apply flex w-full h-48 relative;
}
.vcard-section-1{
  @apply h-48 w-48 pl-3;
}
.company-logo-container{
  @apply flex absolute -top-7 justify-between;
}
.logo-image{
  @apply h-36 w-36;
}
.social-icons{
  @apply mt-12 space-y-3;
  }
.person-details-container{
  @apply pl-3 space-y-1 mt-20 pr-3;
}
.person-name{
  @apply text-gray-800 font-bold uppercase;
}
.person-title{
  @apply text-xs italic tracking-wide;
}
.person-contact{
  @apply text-xs tracking-wide;
}
.profileimage-qrcode-wrapper{
  @apply space-y-2 grid grid-rows-2 place-items-center items-center mx-auto py-1;
}
.profile-image{
  @apply h-20 w-20 rounded-md relative bg-cover bg-center;
}
.bottom-line{
  @apply col-span-2 h-4;
}
</style>