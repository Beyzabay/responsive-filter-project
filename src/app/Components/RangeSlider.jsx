"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

function valuetext(value) {
  return `${value}°C`;
}

// Özelleştirilmiş Slider bileşeni
const CustomSlider = styled(Slider)({
  color: 'rgb(249 115 22)', // orange-500
  '& .MuiSlider-thumb': {
    backgroundColor: 'rgb(249 115 22)', // orange-500
  },
  '& .MuiSlider-track': {
    backgroundColor: 'rgb(249 115 22)', // orange-500
  },
  '& .MuiSlider-rail': {
    backgroundColor: 'rgb(249 250 255)', // gray-50
  },
});

export default function RangeSlider() {
  const [value, setValue] = React.useState([200, 536]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (index) => (event) => {
    const newValue = [...value];
    newValue[index] = event.target.value === '' ? '' : Number(event.target.value);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <CustomSlider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={100}
        max={1000}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField
          label="Min Value"
          value={value[0]}
          onChange={handleInputChange(0)}
          inputProps={{
            step: 10,
            min: 100,
            max: 1000,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
        <TextField
          label="Max Value"
          value={value[1]}
          onChange={handleInputChange(1)}
          inputProps={{
            step: 10,
            min: 100,
            max: 1000,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Box>
    </Box>
  );
}

