<template>
  <div :title="cardName">
    <img width="150" :src="imagePath" :alt="cardKind" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api';
import { Card, CardKind } from '~/lib/card';

export default defineComponent({
  name: 'CardDisplay',
  props: {
    card: { type: Object as PropType<Card<CardKind>>, required: true },
  },
  setup(props) {
    const imagePath = computed(() => props.card.Image);
    const cardKind = computed(() => props.card.Kind);
    const cardName = computed(() => props.card.Name);
    return { cardKind, cardName, imagePath };
  },
});
</script>
