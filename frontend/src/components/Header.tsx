import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, Select, MenuItem, Box, Container } from '@mui/material';
import { FiSearch } from "react-icons/fi";

const Header = () => {
    return (
        <Box className="bg-white">
            <Container maxWidth="xl">
                <AppBar
                    position="static"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                    className="border-b shadow-md"
                >
                    <Toolbar className="flex flex-col md:flex-row items-center justify-between p-4">
                        <Box className="flex items-center mb-4 md:mb-0">
                            <img src="https://placehold.co/40x40" alt="6Valley logo" className="mr-2" />
                            <Typography variant="h6" className="text-2xl font-bold text-blue-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                SaodEcom
                            </Typography>
                        </Box>
                        <Box className="flex items-center w-full max-w-lg border border-gray-300 rounded shadow-sm overflow-hidden">
                            {/* Select Dropdown */}
                            <Select
                                defaultValue="ALL CATEGORIES"
                                className="flex-1 border-r border-gray-300"
                                variant="outlined"
                                size="small"
                                sx={{
                                    borderRadius: 0,
                                    '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                                    fontFamily: 'Roboto, sans-serif',
                                }}
                            >
                                <MenuItem value="ALL CATEGORIES">ALL CATEGORIES</MenuItem>
                            </Select>

                            {/* Input Field */}
                            <InputBase
                                placeholder="Search for items..."
                                className="flex-1 px-4 py-2"
                                sx={{
                                    fontSize: '0.875rem',
                                    fontFamily: 'Roboto, sans-serif',
                                }}
                            />

                            {/* Search Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                className="flex items-center justify-center px-4 py-2"
                                sx={{
                                    backgroundColor: '#1d4ed8',
                                    color: 'white',
                                    borderRadius: 0,
                                    fontFamily: 'Roboto, sans-serif',
                                    '&:hover': {
                                        backgroundColor: '#1e40af',
                                    },
                                }}
                            >
                                <FiSearch size={20} />
                            </Button>
                        </Box>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="bg-blue-700 text-white px-4 py-2 rounded hidden md:block"
                            sx={{
                                fontFamily: 'Roboto, sans-serif',
                                textTransform: 'none',
                            }}
                        >
                            GET 50% OFF <span className="font-bold">DOWNLOAD APP NOW</span>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
};

export default Header;
