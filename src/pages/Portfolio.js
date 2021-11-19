import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Container } from '@material-ui/core';

export default function Portfolio() {

  useEffect(() => {
    console.log('Portfolio page');
  })

  return (
    <div>
      <Navigation />
      <Container maxWidth="lg">
        <h1>PORTFOLIO</h1>
      </Container>
    </div>
  )
}