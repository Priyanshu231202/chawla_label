import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const Thankyou = lazy(() => import("./pages/Thankyou"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
import { CustomCursor } from "./components/ui/CustomCursor";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="app-theme">
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <CustomCursor />
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="min-h-screen bg-background flex items-center justify-center">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/thankyou" element={<Thankyou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
      </QueryClientProvider>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
