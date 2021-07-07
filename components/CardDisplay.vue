<template>
  <div :title="cardName" @click="toggleSelected()">
    <img
      class="shadow-md hover:shadow-2xl"
      width="150"
      :src="imagePath"
      :alt="cardKind"
      :class="{ 'bg-blue-600': selected, 'bg-opacity-30': selected }"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
} from '@nuxtjs/composition-api';
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

    const selected = ref(false);

    const toggleSelected = () => (selected.value = !selected.value);

    return { cardKind, cardName, imagePath, selected, toggleSelected };
  },
});
</script>
