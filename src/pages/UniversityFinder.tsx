// Update the handleFind function in UniversityFinder.tsx
const handleFind = () => {
  if (!allFiltersApplied) {
    return;
  }
  
  setShowResults(true);
  
  const uniData = universities || universityData;
  
  // Filter universities based on USAT score only
  const topChoices = uniData.filter(uni => uni.min_usat_score <= usatScore);
  const secondaryChoices = [];
  
  // Further filter by selected program if one is chosen
  if (selectedProgram) {
    const filteredByProgram = (unis: University[]) => unis.filter(uni => 
      uni.programs.some(prog => prog.toLowerCase().includes(selectedProgram.toLowerCase()))
    );
    
    setFilteredFirstChoice(filteredByProgram(topChoices));
    setFilteredSecondChoice(filteredByProgram(secondaryChoices));
  } else {
    setFilteredFirstChoice(topChoices);
    setFilteredSecondChoice(secondaryChoices);
  }
};