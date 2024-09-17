

// Si el JSX no funciona en este archivo, intenta instalar:
// npm install --save-dev @types/react @types/react-dom
import { Box } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  RegisterComponent  from "./components/organisms/SignUpComponent";

export default function App() {
  return (
    <Box>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Box>
  );
}


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<RegisterComponent />} />
    </Routes>
  )
}
