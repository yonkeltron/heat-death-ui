<template>
  <div>
    <h2>Game: {{ id }}</h2>
    <card-display :card="card" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';
import { Card } from '~/lib/card';

export default defineComponent({
  setup() {
    const card: Card = {
      kind: 'Unit',
      image: 'units_00.png',
      name: 'Merchant',
    };
    const { route } = useContext();
    const id = computed(() => route.value.params.id);
    return { card, id };
  },
});
</script>
