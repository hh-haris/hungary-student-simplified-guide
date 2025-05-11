
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface TimelineFormProps {
  timelineEntry?: any;
  onSuccess: () => void;
  onCancel: () => void;
}

const TimelineForm = ({ timelineEntry, onSuccess, onCancel }: TimelineFormProps) => {
  const isEditing = !!timelineEntry;
  
  const [formData, setFormData] = useState({
    id: timelineEntry?.id || '',
    step_number: timelineEntry?.step_number || 0,
    title: timelineEntry?.title || '',
    date_range: timelineEntry?.date_range || '',
    description: timelineEntry?.description || '',
    link: timelineEntry?.link || ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let parsedValue: string | number = value;
    if (name === "step_number") {
      parsedValue = parseInt(value) || 0;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const dataToSubmit = {
        ...formData,
        step_number: Number(formData.step_number) // Ensure step_number is a number when submitting
      };
      
      if (isEditing) {
        // Update existing timeline entry
        const { error } = await supabase
          .from('timeline')
          .update(dataToSubmit)
          .eq('id', timelineEntry.id);
          
        if (error) throw error;
        
        toast({
          title: "Timeline entry updated",
          description: `Step ${formData.step_number}: ${formData.title} has been updated successfully.`
        });
      } else {
        // Create new timeline entry
        const { error } = await supabase
          .from('timeline')
          .insert(dataToSubmit);
          
        if (error) throw error;
        
        toast({
          title: "Timeline entry created",
          description: `Step ${formData.step_number}: ${formData.title} has been added successfully.`
        });
      }
      
      onSuccess();
    } catch (error: any) {
      console.error('Error saving timeline entry:', error);
      toast({
        title: "Error",
        description: error.message || "There was an error saving the timeline entry.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="step_number">Step Number</Label>
            <Input
              id="step_number"
              name="step_number"
              type="number"
              value={formData.step_number}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date_range">Date Range</Label>
            <Input
              id="date_range"
              name="date_range"
              value={formData.date_range}
              onChange={handleChange}
              required
              placeholder="e.g. Jan 2024 - Mar 2024"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="link">Link (Optional)</Label>
            <Input
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://example.com/timeline-details"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isEditing ? "Update" : "Create"} Timeline Entry
        </Button>
      </div>
    </form>
  );
};

export default TimelineForm;
