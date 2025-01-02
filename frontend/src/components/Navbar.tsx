import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RefreshIcon from '@mui/icons-material/Refresh';
import StarIcon from '@mui/icons-material/Star';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = () => (
        <div
            className="w-64"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['HOME', 'OFFERS', 'STORES', 'BRANDS', 'DISCOUNTED PRODUCTS', 'LOGIN/REGISTER'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box className="bg-white">
            <Container maxWidth="xl">
                <AppBar
                    position="static"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                    className="border-b shadow-md"
                >   <Toolbar className="flex justify-between px-4 md:px-8">
                        <div className="flex items-center">
                            <IconButton
                                edge="start"
                                sx={{
                                    display: {  md: 'none' }, // Show only on small screens
                                    backgroundColor: '#007bff',            
                                    color: 'white',                     
                                    borderRadius: '50%',                
                                    '&:hover': {
                                        backgroundColor: 'darkblue',
                                    },
                                }}
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <HomeIcon />
                            </IconButton>

                            <Button
                                aria-controls="category-menu"
                                aria-haspopup="true"
                                onClick={handleMenuClick}
                                className="text-white bg-blue-600 px-4 py-2 rounded hidden md:flex items-center"
                                style={{ fontSize: '14px', fontWeight: 'bold' }}
                            >
                                <MenuIcon className="mr-2" />
                                <span>Select Category</span>
                                <ArrowDropDownIcon className="ml-2" />
                            </Button>

                            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                                {drawerList()}
                            </Drawer>
                            <Menu
                                id="category-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Category 3</MenuItem>
                            </Menu>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#" className="text-gray-700 font-medium text-sm">HOME</a>
                            <div className="relative flex items-center">
                                <a href="#" className="text-gray-700 font-medium text-sm">OFFERS</a>
                                <ArrowDropDownIcon className="ml-1" style={{ fontSize: '16px' }} />
                            </div>
                            <div className="relative flex items-center">
                                <a href="#" className="text-gray-700 font-medium text-sm">STORES</a>
                                <ArrowDropDownIcon className="ml-1" style={{ fontSize: '16px' }} />
                            </div>
                            <div className="relative flex items-center">
                                <a href="#" className="text-gray-700 font-medium text-sm">BRANDS</a>
                                <ArrowDropDownIcon className="ml-1" style={{ fontSize: '16px' }} />
                            </div>
                            <a href="#" className="text-gray-700 font-medium flex items-center text-sm">
                                DISCOUNTED PRODUCTS <StarIcon className="text-yellow-500 ml-1" style={{ fontSize: '16px' }} />
                            </a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-700 font-medium text-sm hidden md:block">LOGIN/REGISTER</a>
                            <RefreshIcon className="text-gray-700" style={{ fontSize: '20px' }} />
                            <FavoriteIcon className="text-gray-700" style={{ fontSize: '20px' }} />
                            <div className="relative">
                                <ShoppingBagIcon className="text-gray-700" style={{ fontSize: '20px' }} />
                                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full px-1">0</span>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
};

export default Navbar;
