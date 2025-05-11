
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProgramFormProps {
  program?: any;
  onSuccess: () => void;
  onCancel: () => void;
}

const ProgramForm = ({ program, onSuccess, onCancel }: ProgramFormProps) => {
  const isEditing = !!program;
  
  const [formData, setFormData] = useState({
    name: program?.name || "",
    university_id: program?.university_id || "",
    degree_level: program?.degree_level || "",
    field_of_study: program?.field_of_study || "",
    description: program?.description || "",
    duration: program?.duration || "",
    language: program?.language || "English",
    credit_hours: program?.credit_hours || 0,
    min_usat_score: program?.min_usat_score || 0
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [universities, setUniversities] = useState<any[]>([]);
  
  // Fetch universities for dropdown
  useEffect(() => {
    const fetchUniversities = async () => {
      const { data, error } = await supabase
        .from('universities')
        .select('id, name')
        .order('name');
        
      if (error) {
        console.error('Error fetching universities:', error);
        return;
      }
      
      setUniversities(data || []);
    };
    
    fetchUniversities();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let parsedValue = value;
    if (name === "min_usat_score" || name === "credit_hours") {
      parsedValue = parseInt(value) || 0;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (isEditing) {
        // Update existing program
        const { error } = await supabase
          .from('programs')
          .update(formData)
          .eq('id', program.id);
          
        if (error) throw error;
        
        toast({
          title: "Program updated",
          description: `${formData.name} has been updated successfully.`
        });
      } else {
        // Create new program
        const { error } = await supabase
          .from('programs')
          .insert(formData);
          
        if (error) throw error;
        
        toast({
          title: "Program created",
          description: `${formData.name} has been added successfully.`
        });
      }
      
      onSuccess();
    } catch (error: any) {
      console.error('Error saving program:', error);
      toast({
        title: "Error",
        description: error.message || "There was an error saving the program.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const degreeOptions = ["Bachelor", "Master", "PhD", "Associate", "Certificate", "Diploma"];
  const languageOptions = ["English", "German", "French", "Spanish", "Italian", "Russian", "Chinese"];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Program Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="university_id">University</Label>
            <Select 
              name="university_id"
              value={formData.university_id} 
              onValueChange={(value) => handleSelectChange("university_id", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select University" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((uni) => (
                  <SelectItem key={uni.id} value={uni.id}>{uni.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="degree_level">Degree Level</Label>
            <Select 
              name="degree_level"
              value={formData.degree_level} 
              onValueChange={(value) => handleSelectChange("degree_level", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Degree Level" />
              </SelectTrigger>
              <SelectContent>
                {degreeOptions.map((degree) => (
                  <SelectItem key={degree} value={degree}>{degree}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="field_of_study">Field of Study</Label>
            <Input
              id="field_of_study"
              name="field_of_study"
              value={formData.field_of_study}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select 
              name="language"
              value={formData.language} 
              onValueChange={(value) => handleSelectChange("language", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((lang) => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g. 4 years, 2 semesters"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="credit_hours">Credit Hours</Label>
            <Input
              id="credit_hours"
              name="credit_hours"
              type="number"
              value={formData.credit_hours}
              onChange={handleChange}
              min="0"
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
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
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
          {isEditing ? "Update" : "Create"} Program
        </Button>
      </div>
    </form>
  );
};

export default ProgramForm;
