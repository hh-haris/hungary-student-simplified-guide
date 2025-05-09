
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Bell, 
  Calendar, 
  Mail, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle,
  AlertCircle 
} from "lucide-react";

const NotificationSystem = () => {
  const [email, setEmail] = useState("");
  const [notificationType, setNotificationType] = useState<"email" | "whatsapp">("email");
  const [subscribed, setSubscribed] = useState(false);
  
  // Mock notification preferences
  const [preferences, setPreferences] = useState({
    deadlines: true,
    usatUpdates: true,
    universityUpdates: false,
    documentReminders: true,
    visaUpdates: true,
    scholarshipNews: false,
    weeklyDigest: true
  });
  
  // Mock notifications
  const recentNotifications = [
    {
      id: 1,
      title: "USAT Registration Open",
      message: "USAT registration for the 2025-26 cycle is now open. Register before December 20.",
      date: "1 day ago",
      type: "deadline",
      read: false
    },
    {
      id: 2,
      title: "New University Added",
      message: "University of Pécs has added new programs for Stipendium Hungaricum applicants.",
      date: "3 days ago",
      type: "university",
      read: true
    },
    {
      id: 3,
      title: "Document Verification Reminder",
      message: "Don't forget to get your documents attested by MOFA before January 15.",
      date: "1 week ago",
      type: "document",
      read: true
    }
  ];

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      // In a real app, this would send the email to a backend service
    }
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6 text-deep-teal">Notification System</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Subscribe Card */}
          <div className="md:col-span-2">
            <Card className="backdrop-blur-sm bg-white/70 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Bell className="h-6 w-6 text-accent-orange mr-2" />
                  <h2 className="font-syne font-semibold text-2xl">Stay Updated</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Receive timely notifications about deadlines, USAT updates, university announcements, and more.
                </p>
                
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger 
                      value="email" 
                      onClick={() => setNotificationType("email")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </TabsTrigger>
                    <TabsTrigger 
                      value="whatsapp" 
                      onClick={() => setNotificationType("whatsapp")}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="email" className="mt-4">
                    {subscribed ? (
                      <div className="text-center py-6">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                        <h3 className="font-syne font-medium text-lg mb-2">Successfully Subscribed!</h3>
                        <p className="text-gray-600">
                          You'll now receive email notifications at <span className="font-medium">{email}</span>
                        </p>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => setSubscribed(false)}
                        >
                          Change Email
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <div className="flex mt-1">
                            <Input 
                              id="email"
                              type="email" 
                              placeholder="your.email@example.com" 
                              className="flex-1 rounded-r-none"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button 
                              className="rounded-l-none bg-accent-orange hover:bg-accent-orange/90"
                              onClick={handleSubscribe}
                              disabled={!email}
                            >
                              <Send className="h-4 w-4 mr-1" />
                              Subscribe
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          We'll only send important notifications based on your preferences.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="whatsapp" className="mt-4">
                    <div className="bg-blue-50 p-4 rounded-md mb-4">
                      <p className="text-blue-800">
                        To receive WhatsApp notifications, join our WhatsApp group by clicking the button below.
                      </p>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Join WhatsApp Group
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Notification Preferences */}
            <Card className="backdrop-blur-sm bg-white/70 shadow-sm hover:shadow-md transition-all mt-6">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-deep-teal" />
                      <Label htmlFor="deadlines" className="cursor-pointer">Deadlines & Important Dates</Label>
                    </div>
                    <Switch 
                      id="deadlines" 
                      checked={preferences.deadlines} 
                      onCheckedChange={() => handlePreferenceChange('deadlines')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-accent-orange" />
                      <Label htmlFor="usatUpdates" className="cursor-pointer">USAT Updates</Label>
                    </div>
                    <Switch 
                      id="usatUpdates" 
                      checked={preferences.usatUpdates} 
                      onCheckedChange={() => handlePreferenceChange('usatUpdates')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-deep-teal" />
                      <Label htmlFor="documentReminders" className="cursor-pointer">Document Reminders</Label>
                    </div>
                    <Switch 
                      id="documentReminders" 
                      checked={preferences.documentReminders} 
                      onCheckedChange={() => handlePreferenceChange('documentReminders')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-accent-orange" />
                      <Label htmlFor="visaUpdates" className="cursor-pointer">Visa Process Updates</Label>
                    </div>
                    <Switch 
                      id="visaUpdates" 
                      checked={preferences.visaUpdates} 
                      onCheckedChange={() => handlePreferenceChange('visaUpdates')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-deep-teal" />
                      <Label htmlFor="weeklyDigest" className="cursor-pointer">Weekly Digest Email</Label>
                    </div>
                    <Switch 
                      id="weeklyDigest" 
                      checked={preferences.weeklyDigest} 
                      onCheckedChange={() => handlePreferenceChange('weeklyDigest')}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Notifications */}
          <div>
            <Card className="backdrop-blur-sm bg-white/70 shadow-sm hover:shadow-md transition-all h-full">
              <CardContent className="p-6">
                <h2 className="font-syne font-semibold text-xl mb-6">Recent Notifications</h2>
                
                {recentNotifications.length === 0 ? (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-500">No notifications yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentNotifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 rounded-md border-l-4 ${
                          notification.read ? 'bg-gray-50 border-l-gray-300' : 'bg-blue-50 border-l-blue-500'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h3 className={`font-medium ${notification.read ? 'text-gray-700' : 'text-blue-800'}`}>
                            {notification.title}
                          </h3>
                          <span className="text-xs text-gray-500">{notification.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Clock className="h-3.5 w-3.5 text-gray-400" />
                          <span className="text-xs text-gray-500">{notification.date}</span>
                          
                          {!notification.read && (
                            <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <Button variant="outline" className="w-full">
                    View All Notifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotificationSystem;
