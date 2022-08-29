import { Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import './contactus.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'lightgray',
          background: 'white',
          borderRadius: '3px',
          padding: '0px 5px',
          '&.Mui-focused': {
            color: 'tomato',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: 'white',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'tomato',
          '&:hover': {
            background: 'tomato',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

function ContactUs() {
  return (
    <ThemeProvider theme={theme}>
      <div className='ContactBackgroundImage'>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Link to={'/'}>
              <img src='SCIPREC_LOGO_WHITE-removebg-preview.png' alt='logo'
                style={{
                  height: 150,
                }}
              />
            </Link>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Stack direction="row" spacing={2} justifyContent='flex-end'>
              <Typography variant="h6" style={{ color: '#fff', fontWeight: 700 }}>About</Typography>
              <Link to={'/facility'} style={{ textDecoration: 'none' }}>
                <Typography variant="h6" style={{ color: '#fff', fontWeight: 700 }}>Product</Typography>
              </Link>
              <Typography variant="h6" style={{ color: '#fff', fontWeight: 700 }}>Presence</Typography>
              <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                <Typography variant="h6" style={{ color: '#fff', fontWeight: 700, marginRight: '20px' }}>Contact</Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <Typography variant='h3' style={{
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            margin: '50px 0 20px'
          }}>
            Get in touch
          </Typography>
          <Typography style={{ color: 'white', marginBottom: '10px' }}>
            <PhoneIcon sx={{ fontSize: 16 }} /> Phone : 91-2752-241548
          </Typography>
          <Typography style={{ color: 'white', marginBottom: '10px' }}>
            <MailOutlineIcon sx={{ fontSize: 16 }} /> Email : <a href="mailto:info.sciprec@gmail.com" style={{ color: 'tomato', textDecoration: 'none' }}>
              info.sciprec@gmail.com</a>
          </Typography>
          <Typography style={{ color: 'white', marginBottom: '30px' }}>
            <LocationOnIcon sx={{ fontSize: 16 }} /> Address: GIDC Estate, Plot No. 6/D/1, Shop No. 5/6, Opp.- Anand Tiles, Ambavadi, Wadhwan, Surendranagar, Gujarat, 363035
          </Typography>
        </div>
        <Grid container columnSpacing={7} justifyContent='center'>
          <Grid item lg={4} mg={4} sm={5} xs={11}>
            <TextField
              id="outlined-basic"
              label="YOUR NAME"
              variant="outlined"
              fullWidth
              color="error"
              style={{ marginBottom: '25px' }} />
            <TextField
              id="outlined-basic"
              label="YOUR EMAIL"
              variant="outlined"
              fullWidth
              color="error"
              style={{ marginBottom: '25px' }} />
            <TextField
              id="outlined-basic"
              label="YOUR PHONE"
              variant="outlined"
              fullWidth
              color="error"
              style={{ marginBottom: '25px' }} />
          </Grid>
          <Grid item lg={4} mg={4} sm={5} xs={11}>
            <TextField
              id="outlined-basic"
              label="YOUR MESSAGE"
              variant="outlined"
              fullWidth
              color="error"
              multiline
              rows={8}
              style={{ marginBottom: '25px' }} />
          </Grid>
        </Grid>
        <Grid container justifyContent='center' style={{ marginBottom: '20px' }}>
          <Button variant="contained">Send Message</Button>
        </Grid>
        <Stack direction="row" spacing={2} justifyContent='center'>
          <Typography style={{ color: 'white' }}>Follow us: </Typography>
          <IconButton
            color="error"
            aria-label="facebook"
            onClick={() => window.open('https://www.facebook.com/scipreclifesciences/')}>
            <FacebookIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton
            color="error"
            aria-label="instagram"
            onClick={() => window.open('https://www.instagram.com/scipreclifesciences/')}>
            <InstagramIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default ContactUs;