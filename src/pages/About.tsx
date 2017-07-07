import * as React from 'react'
import { Page } from './'

const About: Page = (props) => {
  return (
    <div className='About'>
      <h1>About</h1>
      <button onClick={() => props.dispatch({ type: 'ADD10' })}>Add 10</button>
    </div>
  )
}

export default About
