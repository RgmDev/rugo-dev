import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Container } from '@material-ui/core';

export default function Contact() {

  useEffect(() => {
    console.log('Contact page');
  })

  return (
    <div>
      <Navigation />
      <Container maxWidth="lg">
        <h1>Contact</h1>
      </Container>
    </div>
  )
}