import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, Select, MenuItem, Box, Container } from '@mui/material';

const Header = () => {
    return (
        <Box className="bg-white">
            <Container maxWidth="xl">
                <AppBar
                    position="static"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                    className="border-b shadow-md"
                >   <Toolbar className="flex flex-col md:flex-row items-center justify-between p-4">
                        <Box className="flex items-center mb-4 md:mb-0">
                            <img src="https://placehold.co/40x40" alt="6Valley logo" className="mr-2" />
                            <Typography variant="h6" className="text-2xl font-bold text-blue-700">6Valley</Typography>
                        </Box>

                        <Box className="flex items-center flex-grow mx-4 mb-4 md:mb-0 w-full md:w-auto">
                            <Select
                                defaultValue="ALL CATEGORIES"
                                className="border border-gray-300 rounded-l px-4 py-2"
                                variant="outlined"
                                size="small"
                            >
                                <MenuItem value="ALL CATEGORIES">ALL CATEGORIES</MenuItem>
                            </Select>

                            <InputBase
                                placeholder="Search for items..."
                                className="flex-grow border border-gray-300 px-4 py-2"
                                size="small"
                            />

                            <Button variant="contained" color="primary" className="bg-blue-700 text-white px-4 py-2 rounded-r">
                                <i className="fas fa-search"></i>
                            </Button>
                        </Box>

                        <Button variant="contained" color="primary" className="bg-blue-700 text-white px-4 py-2 rounded hidden md:block">
                            GET 50% OFF <span className="font-bold">DOWNLOAD APP NOW</span>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
};

export default Header;