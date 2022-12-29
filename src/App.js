import React from 'react'
import { Container } from 'react-bootstrap'
import About from './components/About'

const App = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: '100vh' }}
    >
      <About
        name='Faza'
        city='Jepara'
        hobbies={['sleep', 'study', 'watch footbal and movies']}
      />
    </Container>
  )
}

export default App
