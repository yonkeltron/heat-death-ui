<template>
  <div>
    <button class="m-2" @click="newGame()">NEW GAME</button>
    <game-board v-if="gameState" :game-state="gameState" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useContext,
  useStore,
} from '@nuxtjs/composition-api';
import { GameState } from '~/lib/game_state';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const store = useStore();
    const newGame = async () => {
      const id = computed(() => route.value.params.id);
      await store.dispatch('game/initialize', {
        id: id.value,
        players: ['panda', 'bamboo'],
      });
    };

    newGame();

    const gameState = computed(
      (): GameState => store.getters['game/currentGameState']
    );

    return { gameState, newGame };
  },
});
</script>
