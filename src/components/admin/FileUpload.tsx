
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Loader2, Upload } from "lucide-react";

interface FileUploadProps {
  bucketName?: string;
  onUploadComplete?: (url: string, fileName: string) => void;
  accept?: string;
  label?: string;
}

const FileUpload = ({ 
  bucketName = "documents", 
  onUploadComplete, 
  accept = ".pdf",
  label = "Upload PDF"
}: FileUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

      // Create a unique file name
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}-${Date.now()}.${fileExt}`;
      const filePath = fileName;

      // Upload file to Supabase storage
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

      if (error) throw error;

      // Get public URL for the file
      const { data: { publicUrl } } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      toast({
        title: "File uploaded successfully",
        description: `File name: ${file.name}`,
      });

      if (onUploadComplete) {
        onUploadComplete(publicUrl, file.name);
      }
    } catch (error: any) {
      console.error("Error uploading file:", error);
      toast({
        title: "Upload failed",
        description: error.message || "There was an error uploading the file",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Reset the input field
      event.target.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex gap-4 items-center">
        <Input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          disabled={isUploading}
          className="max-w-sm"
        />
        {isUploading && <Loader2 className="animate-spin size-4" />}
      </div>
    </div>
  );
};

export default FileUpload;
