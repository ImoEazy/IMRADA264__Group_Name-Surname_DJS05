//initialize store with createstore function//
export function createStore(reducer) {
    let state = reducer(undefined, {});
    const listeners = [];
    
    //getstate function to return the current state
    function getState() {
        return state;
    }

    //dispatch function dispatches an action to update state
    function dispatch(action){
        state = reducer(state, action);
        listeners.forEach(listener => listener());// this will notify all subs
    }

    //subscribe function; registers a listener to be notified regarding state changees
    function subscribe(listener) {
        listeners.push(listener);
    }

    return { getState, dispatch, subscribe};
}    