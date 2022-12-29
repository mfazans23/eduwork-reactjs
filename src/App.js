import React from 'react'
import { Container } from 'react-bootstrap'
import About from './components/About'

const App = () => {
  return (
    <Container
      className='d-flex flex-wrap justify-content-center'
      style={{ gap: '1rem' }}
    >
      <About
        name='Faza'
        city='Jepara'
        hobbies={['sleep', 'study', 'watch footbal and movies']}
      />
      <About
        name='John Doe'
        city='San Fransisco'
        hobbies={['travel', 'reading books', 'diving']}
      />
      <About
        name='John Doe'
        city='San Fransisco'
        hobbies={['travel', 'reading books', 'diving']}
      />
      <About
        name='John Doe'
        city='San Fransisco'
        hobbies={['travel', 'reading books', 'diving']}
      />
      <About
        name='John Doe'
        city='San Fransisco'
        hobbies={['travel', 'reading books', 'diving']}
      />
      <About
        name='John Doe'
        city='San Fransisco'
        hobbies={['travel', 'reading books', 'diving']}
      />
    </Container>
  )
}

export default App
