import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Container } from '@material-ui/core';

export default function Portfolio() {

  useEffect(() => {
    console.log('Portfolio page');
    document.title = "rugo.dev | Portfolio"
  })

  return (
    <div>
      <Container maxWidth="lg">
        <h1>PORTFOLIO</h1>
      </Container>
    </div>
  )
}