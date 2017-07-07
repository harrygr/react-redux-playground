import { createStore } from 'redux'
import { reducer } from './reducer'

export interface State {
  count: number
}

export const store = createStore<State>(reducer, {
  count: 1,
})
