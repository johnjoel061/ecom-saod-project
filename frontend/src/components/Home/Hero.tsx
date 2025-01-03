import React from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Card,
    CardMedia,
} from "@mui/material";
import "tailwindcss/tailwind.css";

const Hero = () => {
    const categories = [
        "Network Components",
        "Laptop, Tabs & Notebooks",
        "Consumer electronics",
        "Gadgets",
        "Computer & Office",
        "Mobile Accessories",
        "Smartphone",
        "Wearable",
        "Camera Accessories",
        "TV & Home Appliance",
        "Audio",
    ];

    const coupons = [
        { title: "Free delivery", store: "TECH SHOP", code: "I2oDTjKF3z", icon: "local_shipping" },
        { title: "10% Off", store: "6VALLEY", code: "rzx8n8lr" },
        { title: "75% Off", store: "TECH SHOP", code: "Ffh7x7XiCm" },
    ];

    return (
        <Box className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen">
            {/* Sidebar */}
            <Box className="w-full md:w-1/4 bg-white p-4 shadow-md">
                <List>
                    {categories.map((category, index) => (
                        <ListItem key={index} button className="cursor-pointer">
                            <ListItemText primary={category} style={{ color: 'black' }} />
                            <i className="fas fa-chevron-right" />
                        </ListItem>
                    ))}
                    <ListItem button className="cursor-pointer">
                        <ListItemText primary="View all" className="text-blue-500" />
                    </ListItem>
                </List>
            </Box>

            {/* Main Content */}
            <Box className="w-full md:w-3/4 p-4">
                {/* Banner and Happy Club Section */}
                <Box className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    {/* Banner */}
                    <Box className="w-full md:w-2/3">
                        <Card className="rounded-md shadow-md">
                            <CardMedia
                                component="img"
                                alt="Special offer on mobile phones"
                                height="300"
                                image="https://placehold.co/600x300"
                            />
                        </Card>
                    </Box>

                    {/* Happy Club */}
                    <Box className="w-full md:w-1/3 bg-white p-4 shadow-md">
                        <Typography variant="h6" className="text-blue-600 font-bold">
                            Happy Club
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                            Collect coupons from stores and apply to get special discounts from stores
                        </Typography>
                        <Box className="mt-4 space-y-2">
                            {coupons.map((coupon, index) => (
                                <Box key={index} className="p-2 border rounded-md">
                                    <Typography variant="body2" className="font-bold" style={{ color: '#E53935' }}>
                                        {coupon.title}{" "}
                                        {coupon.icon && <span className="material-icons">{coupon.icon}</span>}
                                    </Typography>
                                    <Typography variant="caption" className="text-gray-600">
                                        For {coupon.store}{" "}
                                    </Typography>
                                    <Typography variant="caption" className="text-blue-500">
                                        Code: {coupon.code}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Additional Banners */}
                <Box className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    <Box className="w-full md:w-1/2">
                        <Card className="rounded-md shadow-md">
                            <CardMedia
                                component="img"
                                alt="Black Friday Sale on earphones"
                                height="150"
                                image="https://placehold.co/300x150"
                            />
                        </Card>
                    </Box>
                    <Box className="w-full md:w-1/2">
                        <Card className="rounded-md shadow-md">
                            <CardMedia
                                component="img"
                                alt="Black Friday Sale on watches"
                                height="150"
                                image="https://placehold.co/300x150"
                            />
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
