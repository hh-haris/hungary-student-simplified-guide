
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import FileUpload from "../FileUpload";

interface UniversityFormProps {
  university?: any;
  onSuccess: () => void;
  onCancel: () => void;
}

const UniversityForm = ({ university, onSuccess, onCancel }: UniversityFormProps) => {
  const isEditing = !!university;
  
  const [formData, setFormData] = useState({
    id: university?.id || "",
    name: university?.name || "",
    city: university?.city || "",
    intro: university?.intro || "",
    website: university?.website || "",
    min_usat_score: university?.min_usat_score || 0,
    programs: university?.programs || [],
    image_url: university?.image_url || ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let parsedValue: string | number = value;
    if (name === "min_usat_score") {
      parsedValue = parseInt(value) || 0;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleImageUpload = (url: string) => {
    setImageFile(url);
    setFormData(prev => ({
      ...prev,
      image_url: url
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const dataToSubmit = {
        ...formData,
        min_usat_score: Number(formData.min_usat_score) // Ensure min_usat_score is a number when submitting
      };
      
      if (isEditing) {
        // Update existing university
        const { error } = await supabase
          .from('universities')
          .update(dataToSubmit)
          .eq('id', university.id);
          
        if (error) throw error;
        
        toast({
          title: "University updated",
          description: `${formData.name} has been updated successfully.`
        });
      } else {
        // Create new university
        const { error } = await supabase
          .from('universities')
          .insert(dataToSubmit);
          
        if (error) throw error;
        
        toast({
          title: "University created",
          description: `${formData.name} has been added successfully.`
        });
      }
      
      onSuccess();
    } catch (error: any) {
      console.error('Error saving university:', error);
      toast({
        title: "Error",
        description: error.message || "There was an error saving the university.",
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
            <Label htmlFor="name">University Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="min_usat_score">Minimum USAT Score</Label>
            <Input
              id="min_usat_score"
              name="min_usat_score"
              type="number"
              value={formData.min_usat_score}
              onChange={handleChange}
              required
              min="0"
              max="100"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website">Website URL</Label>
            <Input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.edu"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="intro">Introduction</Label>
            <Textarea
              id="intro"
              name="intro"
              value={formData.intro}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <FileUpload 
              bucketName="documents"
              accept="image/*"
              label="University Image"
              onUploadComplete={(url) => handleImageUpload(url)}
            />
            {(imageFile || formData.image_url) && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">Image selected</p>
                <img 
                  src={imageFile || formData.image_url} 
                  alt="University" 
                  className="mt-2 h-20 w-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isEditing ? "Update" : "Create"} University
        </Button>
      </div>
    </form>
  );
};

export default UniversityForm;
