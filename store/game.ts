import _ from 'lodash';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { GameState, newGameState } from '~/lib/game_state';
import { GameTurn, newGameTurn } from '~/lib/game_turn';

export const state = () => ({
  gameStates: [] as GameState[],
  currentTurn: {} as GameTurn,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  currentGameState: (state) => _.last(state.gameStates),
  currentTurn: (state) => state.currentTurn,
};

export const mutations: MutationTree<RootState> = {
  INITIALIZE: (state, firstGameState: GameState) => {
    state.gameStates.push(firstGameState);
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
