<template>
  <div>
    <img width="200" :src="imagePath" :alt="cardKind" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api';
import { Card, CardKind, imagePathFor } from '~/lib/card';

export default defineComponent({
  name: 'CardDisplay',
  props: {
    card: { type: Object as PropType<Card<CardKind>>, required: true },
  },
  setup(props) {
    const imagePath = computed(() => imagePathFor(props.card));
    const cardKind = computed(() => props.card.Kind);
    return { cardKind, imagePath };
  },
});
</script>
