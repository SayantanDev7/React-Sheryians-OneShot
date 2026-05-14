import React from 'react'
import Card from "./components/Card"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Card title = "Title" description = "Description" username="Alice"/>
      <Card title = "Title" description = "Description" username="Bob"/>
      <Card title = "Title" description = "Description" username="Charlie"/>
    </div>
    
    </>
  )
}

export default App