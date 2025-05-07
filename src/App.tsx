
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UsatGuide from "./pages/UsatGuide";
import UsatCategory from "./pages/UsatCategory";
import UniversityFinder from "./pages/UniversityFinder";
import UniversityDetail from "./pages/UniversityDetail";
import CityDetail from "./pages/CityDetail";
import Seniors from "./pages/Seniors";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const App = () => {
  // Create a client instance inside the component
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/usat" element={<UsatGuide />} />
            <Route path="/usat/:category" element={<UsatCategory />} />
            <Route path="/university-finder" element={<UniversityFinder />} />
            <Route path="/universities/:universityId" element={<UniversityDetail />} />
            <Route path="/city/:cityId" element={<CityDetail />} />
            <Route path="/seniors" element={<Seniors />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
