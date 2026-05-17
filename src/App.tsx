import { Suspense, lazy } from "react";
import Header from "./layouts/Header";
import "dayjs/locale/es";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

function PageSkeleton() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="h-64 w-full max-w-[1440px] mx-8 rounded-xl bg-primary-muted animate-pulse" />
    </div>
  );
}

function App() {
  return (
    <div className="text-foreground transition-colors duration-300">
      <LanguageProvider>
        <ThemeProvider>
          <Header />
          <BrowserRouter>
            <main id="main-content">
              <Suspense fallback={<PageSkeleton />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
