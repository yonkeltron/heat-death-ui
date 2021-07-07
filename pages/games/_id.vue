<template>
  <div>
    <button class="m-2" @click="newGame()">NEW GAME</button>
    <game-board :game-state="gameState" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useContext,
  useStore,
} from '@nuxtjs/composition-api';
import { RootState } from '~/store/game';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const store = useStore<RootState>();
    const newGame = () => {
      const id = computed(() => route.value.params.id);
      store.dispatch('game/initialize', {
        id: id.value,
        players: ['panda', 'bamboo'],
      });
    };

    newGame();

    const gameState = computed(() => store.state.currentGameState);

    return { gameState, newGame };
  },
});
</script>
