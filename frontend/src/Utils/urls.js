export const BASE = '';
// The above was to solve dev server issues.. 
// probs should use the below? Depends on eventual architecture
// export const BASE = 'http://127.0.0.1:8000'

export const NEW_GAME = `${BASE}/new_game`;

export const NEW_PLAYER = gameID => `${BASE}/${gameID}/new_player`;
export const PLAYERS = gameID => `${BASE}/${gameID}/players`;