<template>
  <section class="market w-3/4 my-5">
    <h3 class="block text-xl mb-2">
      Market (+{{ gameState.mainDeck.length }})
    </h3>

    <div class="grid grid-cols-5">
      <card-display
        v-for="card in gameState.cardMarket"
        :key="card.Id"
        :card="card"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { GameState } from '~/lib/game_state';

export default defineComponent({
  props: {
    gameState: { type: Object as PropType<GameState>, required: true },
  },
  setup() {},
});
</script>
