
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { populateSampleData } from "@/utils/sampleData";

interface SampleDataButtonProps {
  onSuccess?: () => void;
}

const SampleDataButton = ({ onSuccess }: SampleDataButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const result = await populateSampleData();
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Sample data added successfully",
        });
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: "Error",
          description: result.message || "Unknown error occurred",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error adding sample data:", error);
      toast({
        title: "Error",
        description: "Failed to add sample data",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      disabled={isLoading}
      variant="outline"
      className="border-deep-teal text-deep-teal hover:bg-deep-teal/10"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Adding Data...
        </>
      ) : (
        'Add Sample Data'
      )}
    </Button>
  );
};

export default SampleDataButton;
