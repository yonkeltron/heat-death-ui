<template>
  <main class="m-5 font-mono">
    <h2 class="float-right">
      <button
        class="rounded p-2 ring-4 ring-black hover:bg-black hover:text-white"
      >
        End Turn
      </button>
    </h2>
    <h2 class="text-2xl">Heat Death: Game {{ gameState.id }}</h2>
    <ul>
      <li>
        <strong>Between:</strong>
        {{ Object.keys(gameState.players).join(' and ') }}
      </li>
      <li><strong>Turn:</strong> {{ gameState.turn }}</li>
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
