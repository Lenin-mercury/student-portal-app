import React from 'react'
import Homepage from './pages/Homepage'
import axios from 'axios'

const App = () => {
  // axios.defaults.baseURL = "https://us-central1-student-portal-66069.cloudfunctions.net/api"
  return (
    <div>
      <Homepage/>
    </div>
  )
}

export default App