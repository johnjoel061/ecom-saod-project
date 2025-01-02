import React from "react";
import { AppBar, Toolbar, Typography, MenuItem, Menu, Box, Container } from "@mui/material";
import { Phone as PhoneIcon, ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import { useState } from "react";

export default function HeaderTop() {
  const [currencyAnchorEl, setCurrencyAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);

  const handleCurrencyClick = (event) => {
    setCurrencyAnchorEl(event.currentTarget);
  };

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleCurrencyClose = () => {
    setCurrencyAnchorEl(null);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <AppBar position="static" color="default" className="bg-white">
          <Toolbar className="flex flex-col sm:flex-row justify-between items-center p-2">
            <Box className="flex items-center mb-2 sm:mb-0">
              <PhoneIcon className="text-blue-500 mr-2" />
              <Typography variant="body2">+8801xxxxxxxxx</Typography>
            </Box>

            <Box className="flex items-center space-x-4">
              <Box className="flex items-center space-x-1 cursor-pointer" onClick={handleCurrencyClick}>
                <Typography variant="body2">USD $</Typography>
                <ArrowDropDownIcon />
              </Box>
              <Menu
                anchorEl={currencyAnchorEl}
                open={Boolean(currencyAnchorEl)}
                onClose={handleCurrencyClose}
              >
                <MenuItem onClick={handleCurrencyClose}>USD $</MenuItem>
                <MenuItem onClick={handleCurrencyClose}>EUR €</MenuItem>
                <MenuItem onClick={handleCurrencyClose}>GBP £</MenuItem>
              </Menu>

              <Box className="flex items-center space-x-1 cursor-pointer" onClick={handleLanguageClick}>
                <Typography variant="body2">English</Typography>
                <ArrowDropDownIcon />
              </Box>
              <Menu
                anchorEl={languageAnchorEl}
                open={Boolean(languageAnchorEl)}
                onClose={handleLanguageClose}
              >
                <MenuItem onClick={handleLanguageClose}>English</MenuItem>
                <MenuItem onClick={handleLanguageClose}>Spanish</MenuItem>
                <MenuItem onClick={handleLanguageClose}>French</MenuItem>
              </Menu>

              <Typography
                variant="body2"
                className="text-blue-500 cursor-pointer"
                component="a"
                href="#"
              >
                Become A Vendor
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}