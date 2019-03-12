import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Test1 from './Test1'

const App = () => {
  return (
    <React.Fragment>
      Hey
      <Route Nav path="/" Component={Nav} />
      <Route Test1 path="/test-1" Component={Test1} />
    </React.Fragment>
  )
}

export default App
