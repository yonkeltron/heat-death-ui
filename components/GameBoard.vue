<template>
  <main class="m-5">
    <h2>
      Heat Death: Game {{ gameState.id }} between
      {{ Object.keys(gameState.players).join(' and ') }}
    </h2>
    <ul>
      <li><strong>Turn:</strong> {{ gameState.turn }}</li>
      <li></li>
      <li>
        <strong>Remaining Cards in Main Deck:</strong>
        {{ gameState.mainDeck.length }}
      </li>
    </ul>
    <h3>Market</h3>
    <section class="market grid grid-cols-5">
      <card-display
        v-for="card in gameState.cardMarket"
        :key="card.Image"
        :card="card"
      />
    </section>
  </main>
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
