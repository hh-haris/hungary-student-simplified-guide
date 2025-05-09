
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index";
import UsatGuide from "./pages/UsatGuide";
import UsatCategory from "./pages/UsatCategory";
import UniversityFinder from "./pages/UniversityFinder";
import UniversityDetail from "./pages/UniversityDetail";
import CityDetail from "./pages/CityDetail";
import Seniors from "./pages/Seniors";
import ApplyScholarship from "./pages/ApplyScholarship";
import TempusPortal from "./pages/TempusPortal";
import HecPortal from "./pages/HecPortal";
import Documents from "./pages/Documents";
import VisaProcess from "./pages/VisaProcess";
import FirstMonth from "./pages/FirstMonth";
import AlternativeScholarships from "./pages/AlternativeScholarships";
import NotFound from "./pages/NotFound";

const App = () => {
  // Create a QueryClient outside of the render function
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
            <Route path="/apply" element={<ApplyScholarship />} />
            <Route path="/apply/tempus" element={<TempusPortal />} />
            <Route path="/apply/hec" element={<HecPortal />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/visa" element={<VisaProcess />} />
            <Route path="/first-month" element={<FirstMonth />} />
            <Route path="/alternative-scholarships" element={<AlternativeScholarships />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
