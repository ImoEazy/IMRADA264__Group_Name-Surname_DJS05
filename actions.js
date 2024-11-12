// actionTypes in redux context
//consts used to describe what happened in app. Strings that will be dispatched as part of an action
export const ADD = 'ADD';//This is the actual value of the constant, a string that will be used to identify the action in the system.
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';

// action creators; functions that will return action object
//add(): This action creator returns an action with the type ADD, signaling that an "add" action should be processed.
export function add() {
  return { type: ADD };
}

//subtract(): This action creator returns an action with the type SUBTRACT, signaling a "subtract" operation.
export function subtract() {
  return { type: SUBTRACT };
}

//reset(): This action creator returns an action with the type RESET, signaling a reset operation.
export function reset() {
  return { type: RESET };
}