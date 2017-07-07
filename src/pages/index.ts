import * as actions from '../store/actions'
import { State } from '../store'

import About from './About'
import Home from './Home'

export interface PageProps {
  state: State
  dispatch: actions.Dispatch
}

export type Page = (props: PageProps) => JSX.Element

const pages: Record<string, Page> = {
  About,
  Home,
}

export default pages
