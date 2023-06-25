import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";

function App() {
  // useSelector is a hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
  const mode = useSelector((state) => state.global.mode);

  // themeSettings(mode) returns the colour pallete according to the mode
  // createTheme(theme) returns a theme object recognized by mui from given theme settings
  // By using useMemo() we dont have to re-render the function inside everytime.

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* With ThemeProvider wrapped around, we can be suer that the colour pallete is available to the whole site */}
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> is like Css reset */}
          <CssBaseline />
          <Routes>
            {/* Layout is the common component which has the navbar and sidebar fixed */}
            <Route element={<Layout />}>
              {/* Always navigate to dashboard when at home route */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
