import Header from "./layouts/Header";
import Home from "./pages/Home";
import "dayjs/locale/es";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="text-foreground transition-colors duration-300">
      <LanguageProvider>
        <ThemeProvider>
          <Header />
          <BrowserRouter>
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
