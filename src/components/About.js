import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const About = ({ name, city, hobbies }) => {
  return (
    <Card
      bg='danger'
      text='white'
      style={{ width: '18rem', display: 'inline-block' }}
    >
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          Hello, my name is {name}. I am from {city}. These are my hobbies:{' '}
        </Card.Text>
      </Card.Body>
      <ListGroup>
        {hobbies.map((hobby) => (
          <ListGroup.Item>
            {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default About
