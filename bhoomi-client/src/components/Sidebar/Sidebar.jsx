import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import "./Sidebar.css"
import { Link } from 'react-router-dom';

const drawerWidth = 140;

const Sidebar = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >

                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />

                    <List style={{ paddingLeft: "30px", justifyContent: "center" }}>
                        <Link to="/"> <ListItemButton> <ListItemIcon><HomeIcon fontSize='large' style={{ color: "blue" }} /> </ListItemIcon></ListItemButton></Link>
                        <Link to="/report/pdfreport"> <ListItemButton> <ListItemIcon><PictureAsPdfIcon fontSize='large' style={{ color: "blue" }} /></ListItemIcon></ListItemButton></Link>
                        <Link to="/charts"> <ListItemButton> <ListItemIcon><QueryStatsIcon fontSize='large' style={{ color: "blue" }} /></ListItemIcon></ListItemButton></Link>
                    </List>


                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                </Box>
            </Box>


        </div >
    )
}

export default Sidebar