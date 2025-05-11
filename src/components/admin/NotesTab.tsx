import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, FileText } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FileUpload from "./FileUpload";

// Define the Note type explicitly with the shape that matches our database
interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  attachment_url?: string | null;
  attachment_name?: string | null;
}

const NotesTab = () => {
  const queryClient = useQueryClient();
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [isViewNoteOpen, setIsViewNoteOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    attachment_url: "",
    attachment_name: ""
  });

  const { data: notes, isLoading } = useQuery({
    queryKey: ['admin-notes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Note[];
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewNote(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (url: string, fileName: string) => {
    setNewNote(prev => ({
      ...prev,
      attachment_url: url,
      attachment_name: fileName
    }));
  };

  const handleAddNote = async () => {
    try {
      const { error } = await supabase
        .from('notes')
        .insert([{
          title: newNote.title,
          content: newNote.content,
          attachment_url: newNote.attachment_url || null,
          attachment_name: newNote.attachment_name || null
        }]);

      if (error) throw error;

      toast({
        title: "Note added",
        description: "Your note has been saved successfully."
      });

      setNewNote({
        title: "",
        content: "",
        attachment_url: "",
        attachment_name: ""
      });
      setIsAddNoteOpen(false);
      
      queryClient.invalidateQueries({ queryKey: ['admin-notes'] });
    } catch (error: any) {
      console.error('Error adding note:', error);
      toast({
        title: "Error",
        description: error.message || "There was a problem saving your note.",
        variant: "destructive"
      });
    }
  };

  const handleDeleteNote = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Note deleted",
        description: "Your note has been deleted successfully."
      });
      
      queryClient.invalidateQueries({ queryKey: ['admin-notes'] });
      
      if (selectedNote?.id === id) {
        setIsViewNoteOpen(false);
        setSelectedNote(null);
      }
    } catch (error: any) {
      console.error('Error deleting note:', error);
      toast({
        title: "Error",
        description: error.message || "There was a problem deleting your note.",
        variant: "destructive"
      });
    }
  };

  const viewNote = (note: Note) => {
    setSelectedNote(note);
    setIsViewNoteOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-syne text-xl font-semibold">Notes</h2>
            <Button className="bg-deep-teal hover:bg-deep-teal/90" onClick={() => setIsAddNoteOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Note
            </Button>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-deep-teal"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes && notes.length > 0 ? (
                notes.map((note: Note) => (
                  <Card key={note.id} className="overflow-hidden">
                    <div className="p-4 cursor-pointer hover:bg-gray-50" onClick={() => viewNote(note)}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-syne font-medium text-lg truncate">{note.title}</h3>
                        {note.attachment_url && (
                          <FileText size={16} className="text-gray-500 flex-shrink-0 ml-2" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{formatDate(note.created_at)}</p>
                      <p className="text-gray-700 line-clamp-3">{note.content}</p>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-6 text-gray-500">
                  No notes found. Add your first note to get started.
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add Note Dialog */}
      <Dialog open={isAddNoteOpen} onOpenChange={setIsAddNoteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Note</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={newNote.title}
                onChange={handleInputChange}
                placeholder="Note title"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={newNote.content}
                onChange={handleInputChange}
                placeholder="Note content"
                rows={6}
                required
              />
            </div>
            <FileUpload
              bucketName="documents"
              onUploadComplete={handleFileUpload}
            />
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsAddNoteOpen(false)}>Cancel</Button>
              <Button onClick={handleAddNote} className="bg-deep-teal hover:bg-deep-teal/90">
                Save Note
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Note Dialog */}
      {selectedNote && (
        <Dialog open={isViewNoteOpen} onOpenChange={setIsViewNoteOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedNote.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-sm text-gray-500">{formatDate(selectedNote.created_at)}</p>
              <p className="whitespace-pre-wrap">{selectedNote.content}</p>
              
              {selectedNote.attachment_url && (
                <div className="pt-2">
                  <Label className="block mb-2">Attachment</Label>
                  <a
                    href={selectedNote.attachment_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-deep-teal hover:underline"
                  >
                    <FileText size={16} className="mr-2" />
                    {selectedNote.attachment_name || "Download attachment"}
                  </a>
                </div>
              )}
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsViewNoteOpen(false)}>Close</Button>
                <Button 
                  variant="destructive" 
                  onClick={() => handleDeleteNote(selectedNote.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default NotesTab;
