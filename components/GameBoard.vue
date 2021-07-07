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

    <market-display :game-state="gameState" />

    <player-display
      v-for="playerState in gameState.players"
      :key="playerState.name"
      :player-state="playerState"
    />
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
