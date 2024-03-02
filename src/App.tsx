import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

const theme = createTheme({
  typography: {
    fontFamily: "Outfit",
    h5: {
      fontFamily: "ClashDisplaySemiBold",
      color: "rgb(0,0,0,.7)",
    },
  },
  palette: {
    background: {
      default: "#F5F0F6",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Outfit",
          color: "#000000",
          borderColor: "#000000",
        },
        contained: {
          backgroundColor: "#ff5f5c",
          color: "#ffffff",
          ":hover": {
            backgroundColor: "#ff5f5c",
            color: "#ffffff",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#000000",
          borderColor: "#ff5f5c",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingBottom: "5px",
          paddingTop: "5px",
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
