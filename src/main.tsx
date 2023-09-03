import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme } from '@mui/material/styles';
import App from './App.tsx'
import {CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#A000A6',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
)
