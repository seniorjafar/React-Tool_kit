import React from 'react'
import Navbar from './components/navbar/Navbar'
import IncrementCreator from './components/increments/IncrementCreator'
import DecrementCreator from './components/decrements/DecrementCreator'
import ResetCreator from './components/resets/ResetCreator'

import { Card, Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Container className=' d-flex justify-content-center'>
        <Card className='w-75 p-5 m-4 align-items-center'>
          <div className='d-flex justify-content-center'>
            <Navbar/>
          </div>
          <div className='d-flex justify-content-center gap-5'>
            <IncrementCreator />
            <ResetCreator />
            <DecrementCreator />

          </div>
          
        </Card>
      </Container>
    </div>
  )
}

export default App