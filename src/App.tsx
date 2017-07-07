import * as React from 'react'
import './App.css'
import * as actions from './store/actions'
import { State } from './store'

const logo = require('./logo.svg')

interface Props {
  state: State
  dispatch: actions.Dispatch
}

export default function App(props: Props) {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to React</h2>
      </div>
      <p className='App-intro'>
        To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      <pre>{JSON.stringify(props.state, null, ' ')}</pre>

      <button onClick={() => incrementAsync(props.dispatch, 3)}>Increment</button>
    </div>
  )
}

function incrementAsync(dispatch: actions.Dispatch, by: number) {
  setTimeout(() => {
    dispatch(actions.increment(by))
  }, 1000)
}
