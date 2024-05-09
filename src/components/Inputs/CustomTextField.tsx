'use client'

import { TextField, styled } from "@mui/material";

export const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#451A03',
  },
  '& .MuiFilledInput-root': {
    '&:after': {
      borderColor: '#451A03',
    }
  },
});
