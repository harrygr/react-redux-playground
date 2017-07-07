import { Action } from './actions'
import * as ActionTypes from './action-types'
import { State } from '../store'

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + action.by }
    case ActionTypes.DECREMENT:
      return { ...state, count: Math.max(1, state.count - 1) }
    case 'ADD10':
      return { ...state, count: state.count + 10 }
  }
  return state
}
