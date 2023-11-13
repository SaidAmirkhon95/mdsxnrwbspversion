import React, { useState } from 'react';
import {
  styled,
  Drawer,
  Divider,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// rotas
import { Link } from 'react-router-dom';
// icons
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { createTheme } from '@mui/material/styles';
import TranslationButton from '../../components/TranslationButton';
import { useLanguage } from '../../LanguageContext';
import AddchartIcon from '@mui/icons-material/Addchart';

const drawerWidth = 240;
const theme = createTheme({
  palette: {
    primary: {
      light: '#005B7F',
      main: '#11998E',
      dark: '#005946',
      contrastText: '#fff',
    },
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 5),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

//rotas
const itemList = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    to: '/',
  },
  {
    text: 'MDSxNRW',
    icon: <PublicIcon />,
    to: '/info',
  },
  {
    text: 'Über uns',
    icon: <InfoIcon />,
    to: '/about',
  },
  {
    text: 'Kontakt',
    icon: <EmailIcon />,
    to: '/contact',
  },
];

const itemListEn = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    to: '/',
  },
  {
    text: 'MDSxNRW',
    icon: <PublicIcon />,
    to: '/info',
  },
  {
    text: 'About',
    icon: <InfoIcon />,
    to: '/about',
  },
  {
    text: 'Contact',
    icon: <EmailIcon />,
    to: '/contact',
  },
];

const DrawerItem = () => {
  const { isDeutsch } = useLanguage();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        /* color='primary' */
        aria-label='open drawer'
        edge='end'
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant='persistent'
        anchor='right'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {isDeutsch
            ? itemList.map((item) => {
                const { text } = item;
                return (
                  <ListItem
                    key={text}
                    component={Link}
                    to={item.to}
                    sx={{
                      color: '#414141',
                      '&:hover': {
                        backgroundColor: '#e9e5e5',
                        color: '#1c2859',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#1c2859',
                        },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })
            : itemListEn.map((item) => {
                const { text } = item;
                return (
                  <ListItem
                    key={text}
                    component={Link}
                    to={item.to}
                    sx={{
                      color: '#414141',
                      '&:hover': {
                        backgroundColor: '#e9e5e5',
                        color: '#1c2859',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#1c2859',
                        },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
          <div style={{ marginLeft: '8px' }}>
            <TranslationButton />
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default DrawerItem;
