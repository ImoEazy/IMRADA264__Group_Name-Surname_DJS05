// actionTypes in redux context
export const ADD = 'ADD';//This is the actual value of the constant, a string that will be used to identify the action in the system.
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';

// action creators
export function add() {
  return { type: ADD };
}

export function subtract() {
  return { type: SUBTRACT };
}

export function reset() {
  return { type: RESET };
}