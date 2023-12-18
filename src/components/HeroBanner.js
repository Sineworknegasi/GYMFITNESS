import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p={"20px"}
    >
      <Typography
        style={{ color: "#ff2625", fontWeight: "600", fontSize: "26px" }}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "45px", xs: "43px" } }}
        mt={"35px"}
        mb={"23px"}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="24px" lineHeight="35px" mb={5} component="h2">
      Check out the most effective exercises personalized to you
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#ff2625', p:"16px", width:"220px", mt:"42px", fontSize:"18px"}}  >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
