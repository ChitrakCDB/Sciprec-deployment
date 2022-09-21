import * as React from "react";
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ProductCard from '../components/productCard';
import Products, { categories } from "../constants/productlist";
import DrawerMenu from "../components/drawerMenu";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          color: 'white',
        },
        scrollButtons: {
          '&.Mui-disabled': {
            opacity: 0.3,
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'white',
        }
      }
    }
  }
})

const headerLinks = [
  {
    text: 'About',
    link: '/'
  },
  {
    text: 'Presence',
    link: '/'
  },
  {
    text: 'Contact',
    link: '/contact'
  }
]

function Product() {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [menuClick, setMenuClick] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [description, setDescription] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState(0);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  const handleClickOpen = (props) => {
    setImage(props.image);
    setText(props.text);
    setDescription(props.description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event, newValue) => {
    setCurrentCategory(newValue);
  };

  const handleMenuClick = () => {
    setMenuClick(true);
  };

  const handleMenuClose = () => {
    setMenuClick(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: 'black' }}>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item lg={4} md={4} sm={10} xs={10}>
            <Link to={'/'}>
              <img src='SCIPREC_LOGO_WHITE-removebg-preview.png' alt='logo'
                style={{
                  height: screenWidth > 900 ? 150 : 75,
                }}
              />
            </Link>
          </Grid>
          {screenWidth > 900 ? null :
            <Grid item sm={2} xs={2} textAlign='center'>
              <IconButton
                aria-label="menu"
                id="menu-button"
                style={{ color: 'white' }}
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <DrawerMenu open={menuClick} list={headerLinks} screenWidth={screenWidth} handleClose={handleMenuClose} />
            </Grid>
          }
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Typography variant="h3" style={{ textAlign: 'center', fontFamily: 'Nunito', fontSize: '35px', color: 'white', fontWeight: 'bold', padding: '30px 0' }}>EYE DROPS</Typography>
          </Grid>
          {screenWidth > 900 ?
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Stack direction="row" style={{ margin: '0 20px' }} spacing={screenWidth > 900 ? 2 : 1} justifyContent={screenWidth > 900 ? 'flex-end' : 'space-around'}>
                {headerLinks.map((item, index) => (
                  <Link key={index} to={item.link} style={{ textDecoration: 'none' }}>
                    <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#fff', fontWeight: 700 }}>{item.text}</Typography>
                  </Link>
                ))}
              </Stack>
            </Grid> : null
          }
        </Grid>
        <Grid container>
          <Tabs
            value={currentCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {categories.map((item, index) => (
              <Tab key={index} label={item} />
            ))}
          </Tabs>
        </Grid>
        {/* <Grid container>
        {Products.map((item, index) =>
          <Grid key={index} item lg={4} md={6} sm={6} xs={12} onClick={() => handleClickOpen(item)}>
            <ProductCard {...item} />
          </Grid>
        )}
      </Grid> */}
        <Dialog
          maxWidth={'md'}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {text}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <img src={image} alt="" width='100%' />
            {description.length !== 0 &&
              <>
                <Typography>Other information:</Typography>
                <ul>
                  {description.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))}
                </ul>
              </>
            }
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default Product;