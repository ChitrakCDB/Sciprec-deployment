import { Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
          '&.Mui-disabled': {
            background: 'gray',
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

const validationSchema = yup.object({
  name: yup
    .string('That doesn\'t look like a name')
    .required('Without name we can\'t help'),
  email: yup
    .string('Enter your email')
    .email('That doesn\'t look like a email')
    .required('Without name we can\'t communicate'),
  phone: yup
    .number('That doesn\'t look like a phone number')
    .typeError('That doesn\'t look like a phone number')
    .positive('A phone number can\'t start with a minus')
    .integer('A phone number can\'t include a decimal point')
    .min(8),
  message: yup
    .string('How can we help')
    .required('Please tell us something'),
});

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            margin: '20px 0 20px'
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
          <Typography style={{ color: 'white', marginBottom: '10px' }}>
            <LocationOnIcon sx={{ fontSize: 16 }} /> Address: GIDC Estate, Plot No. 6/D/1, Shop No. 5/6, Opp.- Anand Tiles, Ambavadi, Wadhwan, Surendranagar, Gujarat, 363035
          </Typography>
          <Stack direction="row" spacing={2} justifyContent='center' style={{ marginBottom: '30px' }}>
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
        <form onSubmit={formik.handleSubmit}>
          <Grid container columnSpacing={7} justifyContent='center'>
            <Grid item lg={4} mg={4} sm={5} xs={11}>
              <TextField
                id="name"
                name="name"
                label="YOUR NAME*"
                variant="outlined"
                fullWidth
                color="error"
                style={{ marginBottom: '25px' }}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name} />
              <TextField
                id="email"
                name="email"
                label="YOUR EMAIL*"
                variant="outlined"
                fullWidth
                color="error"
                style={{ marginBottom: '25px' }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />
              <TextField
                id="phone"
                name="phone"
                label="YOUR PHONE"
                variant="outlined"
                fullWidth
                color="error"
                style={{ marginBottom: '25px' }}
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone} />
            </Grid>
            <Grid item lg={4} mg={4} sm={5} xs={11}>
              <TextField
                id="message"
                name="message"
                label="YOUR MESSAGE*"
                variant="outlined"
                fullWidth
                color="error"
                multiline
                rows={8}
                style={{ marginBottom: '25px' }}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message} />
            </Grid>
          </Grid>
          <Grid container justifyContent='center'>
            <Button
              disabled={formik.values.name === '' || formik.values.email === '' || formik.values.message === ''}
              variant="contained"
              type='submit'>
              Send Message
            </Button>
          </Grid>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default ContactUs;