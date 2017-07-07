import * as React from 'react'
import * as ReactDOM from 'react-dom'
import pages, { Page } from './pages'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { store } from './store'
import * as rlite from 'rlite-router'

const root = document.getElementById('root') as HTMLElement
const NotFound: () => Page = () => () => <p>Not Found</p>

const routes = rlite(NotFound, {
  '': () => pages.Home,
  'about': () => pages.About,
})

const layout = (Page: Page) => {
  return (
    <div style={{ border: '8px solid teal' }}>
      <Page state={store.getState()} dispatch={store.dispatch} />
    </div>
  )
}

const render = () => ReactDOM.render(
  layout(routes(location.pathname)),
  root,
)

render()
store.subscribe(render)
registerServiceWorker()
