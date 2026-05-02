import { AllRoutes } from "./routes/AllRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/MovieTheme";

const App = () => {
  return (
      <ThemeProvider>
        <Header />
        <AllRoutes />
        <Footer />
      </ThemeProvider>
  );
};

export default App;
