import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const Filter = ({ type, setType }) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">По категориям</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="phone"
            control={<Radio />}
            label="Телефоны"
          />
          <FormControlLabel
            value="laptop"
            control={<Radio />}
            label="Ноутбуки"
          />
          <FormControlLabel value="watch" control={<Radio />} label="Часы" />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все товары"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
