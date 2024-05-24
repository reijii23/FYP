import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Typography, CssBaseline } from '@mui/material';
import { Dashboard, Person, TableChart, TextFields, Image, Map, Notifications } from '@mui/icons-material';

const drawerWidth = 240;

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
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
                <List>
                    {['Dashboard', 'User Profile', 'Table List', 'Typography', 'Icons', 'Maps', 'Notifications'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 && <Dashboard />}
                                {index === 1 && <Person />}
                                {index === 2 && <TableChart />}
                                {index === 3 && <TextFields />}
                                {index === 4 && <Image />}
                                {index === 5 && <Map />}
                                {index === 6 && <Notifications />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px` }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
