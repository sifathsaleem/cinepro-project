import { AllRoutes } from "./routes/AllRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/MovieTheme";
import { useState } from "react";
import { UIProvider } from "./context/UIContext";

const App = () => {
  return (
    <UIProvider>
      <ThemeProvider>
        <Header />
        <AllRoutes />
        <Footer />
      </ThemeProvider>
    </UIProvider>
  );
};

export default App;
