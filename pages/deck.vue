<template>
  <div class="grid grid-cols-5">
    <card-display v-for="card in cards" :key="card.image" :card="card" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import units from '~/content/units.json';

export default defineComponent({
  setup() {
    const cards = units.map((unit, index) => {
      const displayIndex = `${index}`.padStart(2, '0');

      return {
        kind: 'Unit',
        image: `units_${displayIndex}.png`,
        name: unit.Name,
      };
    });
    return { cards };
  },
});
</script>
