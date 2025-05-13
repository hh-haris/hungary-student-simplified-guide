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
import UniversityTemplate from "./pages/UniversityTemplate";
import CityDetail from "./pages/CityDetail";
import CityTemplate from "./pages/CityTemplate";
import Seniors from "./pages/Seniors";
import ApplyScholarship from "./pages/ApplyScholarship";
import TempusPortal from "./pages/TempusPortal";
import HecPortal from "./pages/HecPortal";
import Documents from "./pages/Documents";
import VisaProcess from "./pages/VisaProcess";
import FirstMonth from "./pages/FirstMonth";
import AlternativeScholarships from "./pages/AlternativeScholarships";
import LetterOfMotivation from "./pages/LetterOfMotivation";
import UpcomingFeatures from "./pages/UpcomingFeatures";
import NotFound from "./pages/NotFound";

const App = () => {
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
            <Route path="/universities/bme" element={<UniversityTemplate />} />
            <Route path="/universities/debrecen" element={<UniversityTemplate />} />
            <Route path="/universities/pecs" element={<UniversityTemplate />} />
            <Route path="/city/:cityId" element={<CityDetail />} />
            <Route path="/city/budapest" element={<CityTemplate />} />
            <Route path="/city/debrecen" element={<CityTemplate />} />
            <Route path="/city/pecs" element={<CityTemplate />} />
            <Route path="/seniors" element={<Seniors />} />
            <Route path="/apply" element={<ApplyScholarship />} />
            <Route path="/apply/tempus" element={<TempusPortal />} />
            <Route path="/apply/hec" element={<HecPortal />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/visa" element={<VisaProcess />} />
            <Route path="/first-month" element={<FirstMonth />} />
            <Route path="/alternative" element={<AlternativeScholarships />} />
            <Route path="/alternative-scholarships" element={<AlternativeScholarships />} />
            <Route path="/letter-of-motivation" element={<LetterOfMotivation />} />
            <Route path="/upcoming-features" element={<UpcomingFeatures />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;