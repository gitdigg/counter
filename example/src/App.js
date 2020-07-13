import React from 'react'

import { Counter, Thumbup } from 'counter'

const App = () => {
  return (
    <div>
      <Counter hit baseURL="http://localhost:8080" />
      <br />
      <Thumbup baseURL="http://localhost:8080" />
    </div>
  )
}

export default App
