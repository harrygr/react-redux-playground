import * as ActionTypes from './action-types'

export interface Increment {
  type: ActionTypes.INCREMENT
  by: number
}

export function increment(by: number = 1): Increment {
  return {
    type: ActionTypes.INCREMENT,
    by,
  }
}

export interface Decrement {
  type: ActionTypes.DECREMENT
}

export function decrement(): Decrement {
  return {
    type: ActionTypes.DECREMENT,
  }
}

export interface Add10 {
  type: 'ADD10'
}

export type Action = Increment | Decrement | Add10

export type Dispatch = (action: Action) => any
