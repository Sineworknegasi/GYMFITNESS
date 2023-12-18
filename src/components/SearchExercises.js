import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          textAlign: "center",
          lineHeight: "1.2",
          mb: "50px",
        }}
      >
        Awesome exercises you <br /> Should know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg:"1170px", xs:'350px'},
            backgroundColor:"#fff", borderRadius:"40px"
          }}
          height="76px"
          value={""}
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor:'#ff2625',
            color:"white",
            textTransform:'none',
            width: { lg: '175px', xs:'80px'},
            fontSize:{ lg:'20px', xs:'14px'},
            height:'56px',
            position:"absolute",
            right:"0"
          }}>
            Search
          </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
