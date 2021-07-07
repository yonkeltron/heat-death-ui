<template>
  <div>
    <h2>Game: {{ id }}</h2>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';
// import { units } from '~/lib/card';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const id = computed(() => route.value.params.id);
    return { id };
  },
});
</script>
