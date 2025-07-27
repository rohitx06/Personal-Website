import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, ExternalLink, FileText, Image as ImageIcon } from "lucide-react";
import UploadModal from "./UploadModal";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  type: 'web' | 'mobile' | 'design' | 'document';
}

const WorkSection = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [workItems, setWorkItems] = useState<WorkItem[]>([
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js, featuring real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      type: 'web'
    },
    {
      id: '2',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction tracking.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'API'],
      type: 'mobile'
    },
    {
      id: '3',
      title: 'Brand Identity Design',
      description: 'Complete brand identity design including logo, color palette, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&fit=crop',
      tags: ['Branding', 'Design', 'Adobe'],
      type: 'design'
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText className="h-4 w-4" />;
      case 'design':
        return <ImageIcon className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
          <Button 
            onClick={() => setShowUploadModal(true)}
            className="bg-gradient-primary hover:shadow-glow"
          >
            <Upload className="h-4 w-4 mr-2" />
            Add New Work
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-border hover:shadow-elegant transition-smooth">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button size="sm" variant="secondary">
                    {getIcon(item.type)}
                    <span className="ml-2">View</span>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <UploadModal 
        open={showUploadModal} 
        onOpenChange={setShowUploadModal}
        onUpload={(newItem) => {
          setWorkItems([...workItems, { ...newItem, id: Date.now().toString() }]);
          setShowUploadModal(false);
        }}
      />
    </section>
  );
};

export default WorkSection;