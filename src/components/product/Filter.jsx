import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

const Filter = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  useEffect(() => {
    getCategories();
  }, []);
  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;
    fetchByParams("category", selectedCategory);
  };
  return (
    <Paper sx={{ padding: 2, width: "250px" }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Категория</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={handleFilterChange}
        >
          <FormControlLabel control={<Radio />} value={"all"} label={"ALL"} />
          {categories.map((elem) => (
            <FormControlLabel
              key={elem.id}
              value={elem.name}
              label={elem.name}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default Filter;
