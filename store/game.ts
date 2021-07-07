import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { GameState, newGameState } from '~/lib/game_state';
import { GameTurn, newGameTurn } from '~/lib/game_turn';

export const state = () => ({
  currentGameState: {} as GameState,
  currentTurn: {} as GameTurn,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  currentGameState: (state) => state.currentGameState,
  currentTurn: (state) => state.currentTurn,
};

export const mutations: MutationTree<RootState> = {
  INITIALIZE: (state, firstGameState: GameState) => {
    state.currentGameState = firstGameState;
    state.currentTurn = newGameTurn(firstGameState, '');
  },
  UPDATE_CURRENT_TURN: (state, newTurn: GameTurn) =>
    (state.currentTurn = newTurn),
};

export const actions: ActionTree<RootState, RootState> = {
  initialize({ commit }, payload) {
    const gameState = newGameState(payload.id, payload.players);
    commit('INITIALIZE', gameState);
  },
};
