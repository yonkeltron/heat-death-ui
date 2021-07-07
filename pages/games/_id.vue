<template>
  <div>
    <game-board :game-state="gameState" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';
import { newGameState } from '~/lib/game_state';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const id = computed(() => route.value.params.id);
    const gameState = newGameState(id.value, ['panda', 'bamboo']);
    return { gameState };
  },
});
</script>
