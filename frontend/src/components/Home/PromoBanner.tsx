import { Box, Container, Grid } from "@mui/material";

export default function PromoBanner() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box
                            component="div"
                            className="flex justify-between items-center py-2"
                            sx={{background: "#8BC34A"}}
                        >
                            {/* Add your content here */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
