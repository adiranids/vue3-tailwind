<template>
    <label v-bind="$attrs" class="label-default"><slot /></label>
</template>
<style scoped>
.label-default {
    @apply text-base text-gray-800 tracking-wide font-semibold;
}
</style>