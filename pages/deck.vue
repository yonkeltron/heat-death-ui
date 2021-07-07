<template>
  <div class="grid grid-cols-5">
    <card-display v-for="card in cards" :key="card.Image" :card="card" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { units } from '~/lib/card';

export default defineComponent({
  setup() {
    const cards = units;
    return { cards };
  },
});
</script>
