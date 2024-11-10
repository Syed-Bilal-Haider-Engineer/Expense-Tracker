<template>
  <div data-test="Balance-record">
    <h4 data-test="balance-item">Your Balance</h4>
    <h1 id="balance" data-test="balance-item">${{ total }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
