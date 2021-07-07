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

    <section class="market w-1/2 my-5">
      <h3 class="block">Market</h3>

      <div class="grid grid-cols-5">
        <card-display
          v-for="card in gameState.cardMarket"
          :key="card.Id"
          :card="card"
        />
      </div>
    </section>

    <section
      v-for="(playerData, playerName) in gameState.players"
      :key="playerData.name"
    >
      <h4 class="block">
        Player: {{ playerName }} &mdash;&gt; {{ playerData.health }}
      </h4>

      <div class="grid grid-cols-5">
        <card-display
          v-for="card in playerData.drawableCards"
          :key="card.Id"
          :card="card"
        />
      </div>
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
