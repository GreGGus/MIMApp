/**
 * Created by Gohma on 04/06/2017.
 */
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const DO_SMTHING_REQUEST = 'DO_SMTHING_REQUEST'

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function doSmthgin(value) {
  return {
    type: DO_SMTHING_REQUEST,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: COUNTER_DOUBLE_ASYNC,
          payload: getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC]: (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: "nonX"
}
export default function newsReduceur(state = initialState, action) {

  switch (action.type) {
    case DO_SMTHING_REQUEST :
      return {
        data: "lol"
      }
      break;
    default :
      return {
        data:"c non"
      }
  }
}
