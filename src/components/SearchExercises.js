import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

import { ExerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([])
  const [BodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodypartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodypartlist', ExerciseOptions);


      setBodyParts(['all', ...bodypartData]);
    }
  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const exercisesDate = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );

      const searchedExercises = exercisesDate.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodypart.toLowerCase().includes(search)
      );


      setSearch('');
      setExercises(searchedExercises);
    }
  };

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
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p:'20px'}}>
        <HorizontalScrollbar data={BodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
