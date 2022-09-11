import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from './Categories';
export default function SwipeableTemporaryDrawer({SetCategory,setLoadmore}) {
  const [state, setState] = React.useState({
    left: false,
 });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
 
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{paddingTop:100}}>
         <ListItem style={{fontSize:15,color:"#808290"}}>Categories</ListItem>
         <Divider/>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>{SetCategory(text);setLoadmore(20)}}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color:"black"}}/><p style={{marginBottom:35,fontSize:14,fontWeight:300,color:"black"}}>Menu</p></Button>
          <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          </ThemeProvider>
         
        </React.Fragment>
      ))}
    </div>
  );
}
