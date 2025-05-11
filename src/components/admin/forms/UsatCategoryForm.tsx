
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface UsatCategoryFormProps {
  category?: any;
  onSuccess: () => void;
  onCancel: () => void;
}

const UsatCategoryForm = ({ category, onSuccess, onCancel }: UsatCategoryFormProps) => {
  const isEditing = !!category;
  
  const [formData, setFormData] = useState({
    name: category?.name || "",
    description: category?.description || "",
    min_passing_score: category?.min_passing_score || 70
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let parsedValue = value;
    if (name === "min_passing_score") {
      parsedValue = parseInt(value) || 70;
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
      if (isEditing) {
        // Update existing category
        const { error } = await supabase
          .from('usat_categories')
          .update(formData)
          .eq('id', category.id);
          
        if (error) throw error;
        
        toast({
          title: "USAT category updated",
          description: `${formData.name} has been updated successfully.`
        });
      } else {
        // Create new category
        const { error } = await supabase
          .from('usat_categories')
          .insert(formData);
          
        if (error) throw error;
        
        toast({
          title: "USAT category created",
          description: `${formData.name} has been added successfully.`
        });
      }
      
      onSuccess();
    } catch (error: any) {
      console.error('Error saving USAT category:', error);
      toast({
        title: "Error",
        description: error.message || "There was an error saving the USAT category.",
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
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="min_passing_score">Minimum Passing Score</Label>
            <Input
              id="min_passing_score"
              name="min_passing_score"
              type="number"
              value={formData.min_passing_score}
              onChange={handleChange}
              required
              min="0"
              max="100"
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
          {isEditing ? "Update" : "Create"} USAT Category
        </Button>
      </div>
    </form>
  );
};

export default UsatCategoryForm;
