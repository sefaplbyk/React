import React from 'react'

import { Button } from 'buttontypefore'
import 'buttontypefore/dist/index.css'

const App = () => {
  return (
    <div>
      <Button type='primary' /> <br />
      <Button />
      <Button type='secondary' /> <br />
      <Button type='dashed' /> <br />
      <Button type='link' /> <br />
    </div>
  )
}

export default App
