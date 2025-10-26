<script setup>
import { computed, useAttrs } from "vue";

// No props by design — this component should be used as a child with slot content and optional attributes
const attrs = useAttrs();
const emit = defineEmits(["click"]);

const base =
  "cursor-pointer bg-gradient-to-r from-[#c29224] via-[#d4af37] to-[#f5d36b] text-white py-2 px-3 rounded-md hover:from-[#eac95a] hover:via-[#cfa84a] hover:to-[#b8821f] transition-colors duration-300 font-medium";

const classes = computed(() => {
  const extra = attrs.class || "";
  const disabled =
    "disabled" in attrs || attrs.disabled
      ? " opacity-50 pointer-events-none"
      : "";
  return [base, extra, disabled];
});
</script>

<template>
  <!-- Use as a child: <ButtonComponents class="px-6">Ver mas</ButtonComponents> -->
  <button v-bind="attrs" :class="classes" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<style scoped></style>
