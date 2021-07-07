<template>
  <section class="my-3 flex">
    <div class="flex-auto">
      <h4 class="block text-xl">
        Player <strong>{{ playerState.name }}</strong>
      </h4>
      <p>Current Health: {{ playerState.health }}</p>

      <div class="text-sm">
        <h5 class="mt-3 mb-1 underline">Deck</h5>
        <ul>
          <li>Remaining Cards: {{ playerState.drawableCards.length }}</li>
          <li>Discarded Cards: {{ playerState.discardedCards.length }}</li>
        </ul>

        <h5 class="mt-3 mb-1 underline">Crystals</h5>
        <ul>
          <li>
            Cracked Crystals: {{ playerState.crackedCrystalCards.length }}
          </li>
          <li>Intact Crystals: {{ playerState.intactCrystalCards.length }}</li>
        </ul>
      </div>
    </div>

    <div class="flex-auto">
      <div class="w-3/4 grid grid-cols-5">
        <card-display
          v-for="card in playerState.drawableCards"
          :key="card.Id"
          :card="card"
          class="mb-5"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { PlayerState } from '~/lib/player_state';

export default defineComponent({
  props: {
    playerState: { type: Object as PropType<PlayerState>, required: true },
  },
  setup() {},
});
</script>
