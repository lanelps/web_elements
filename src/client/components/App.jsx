import React from 'react'
import { Route } from 'react-router-dom'

import Test1 from './Test1'
import Test2 from './Test2'

const App = () => {
  return (
    <React.Fragment>
      <Test1 />
      <Test2 />
      <Test1 />
      <Test2 />
      <Test1 />
      <Test2 />
      <Test1 />
      <Test2 />
      <Test1 />
      <Test2 />
    </React.Fragment>
  )
}

export default App
