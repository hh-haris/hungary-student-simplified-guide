import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

interface UsatCategoryFormProps {
  category: any;
  onSuccess: () => void;
  onCancel: () => void;
}

const UsatCategoryForm = ({ category, onSuccess, onCancel }: UsatCategoryFormProps) => {
  const [formData, setFormData] = useState({
    id: category?.id || '',
    name: category?.name || '',
    description: category?.description || '',
    min_passing_score: category?.min_passing_score || 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { id, ...rest } = formData;

      let response;
      if (id) {
        // Update existing category
        response = await supabase
          .from('usat_categories')
          .update(rest)
          .eq('id', id);
      } else {
        // Create new category
        response = await supabase
          .from('usat_categories')
          .insert([rest]);
      }

      if (response.error) {
        throw response.error;
      }

      toast({
        title: "Success",
        description: `USAT Category ${id ? 'updated' : 'created'} successfully.`,
      });
      onSuccess();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit the form.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="min_passing_score">Min Passing Score</Label>
        <Input
          type="number"
          id="min_passing_score"
          name="min_passing_score"
          value={formData.min_passing_score}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-deep-teal hover:bg-deep-teal/90">
          {formData.id ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
};

export default UsatCategoryForm;
