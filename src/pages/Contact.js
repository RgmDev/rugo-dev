import React, { useEffect, useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import { Container } from '@material-ui/core';
import { Grid, Box, TextField, Button, Snackbar, IconButton, Fade, Slide, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';
import validator from 'validator';

export default function Contact() {

  const form = useRef();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('Contact page');
    document.title = "rugo.dev | Contact"
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = {};
    setErrors(errors);

    if(!validator.isEmail(email)) {
      errors.email = "Invalid email"
    }
    if(validator.isEmpty(email)) {
      errors.email = "Insert your email";
    }
    if(validator.isEmpty(name)) {
      errors.name = "Insert your name";
    }
    if(!validator.isLength(message, {min: 10, max: 140})) {
      errors.message = "Write 10 characters at least";
    }
    if(validator.isEmpty(message)) {
      errors.message = "Insert your message";
    }
    
    if(!(Object.keys(errors).length === 0 && errors.constructor === Object)) {
      setErrors(errors);
      return;
    }

    emailjs.sendForm('service_p0z3oho','template_gm1564l', form.current, 'user_890fzYwBk2Wsc2dH2LV3i')
      .then((result) => {
        setOpen(true);
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Navigation />
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Note archived"
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal:  'center' }}
      >
        <Alert onClose={handleClose} severity="success" >
          Message send!  
        </Alert>
      </Snackbar>
      <Container maxWidth="lg">
        <h1>Contact</h1>
        <h3>Send me a message for anything</h3>
        <form ref={form} onSubmit={sendEmail}>
          <Grid sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column' },
            alignItems: 'center',
            justifyContent: 'center',
          }} >
            <Grid sx={{ bgcolor: 'white', padding: '8px', borderRadius: '8px', my: '5px', width: '100%', maxWidth: '400px' }}>
              <TextField fullWidth id="user-name" value={name} onChange={ e => setName(e.target.value) } label="name" variant="outlined" name="user_name" error={errors.name ? true : false} helperText={errors.name} />
            </Grid>
            <Grid sx={{ bgcolor: 'white', padding: '8px', borderRadius: '8px', my: '5px', width: '100%', maxWidth: '400px' }}>
              <TextField fullWidth id="user-email" value={email} onChange={ e => setEmail(e.target.value) } label="email" variant="outlined" name="user_email" error={errors.email ? true : false} helperText={errors.email} />
            </Grid>
            <Grid sx={{ bgcolor: 'white', padding: '8px', borderRadius: '8px', my: '5px', width: '100%', maxWidth: '400px' }}>
              <TextField fullWidth id="message" value={message} onChange={ e => setMessage(e.target.value) } label="message" variant="outlined" name="message" multiline rows={4} error={errors.message ? true : false} helperText={errors.message} />             
            </Grid>
            <Grid sx={{ my: '8px' }}>
              <Button type="submit" variant="contained">Send</Button>            
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}