import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { store } from './store'

const root = document.getElementById('root') as HTMLElement

const render = () => ReactDOM.render(
  <App state={store.getState()} dispatch={store.dispatch} />,
  root,
)

render()
store.subscribe(render)
registerServiceWorker()
