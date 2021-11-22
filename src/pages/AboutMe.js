import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Container } from '@material-ui/core';

export default function AboutMe() {

  useEffect(() => {
    console.log('AboutMe page');
    document.title = "rugo.dev | About Me"
  })

  return (
    <div>
      <Navigation />
      <Container maxWidth="lg">
        <h1>About me</h1>
      </Container>
    </div>
  )
}