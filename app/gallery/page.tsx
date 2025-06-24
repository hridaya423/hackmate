/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Project {
  id: string;
  projectName: string;
  codeUrl: string;
  playableUrl?: string;
  description: string;
  slackId: string;
  screenshot?: string;
}

const GalleryPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api2.hackclub.com/v0.1/Hackmate/Hackmate%20Project%20Submission`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        
        const formattedProjects: Project[] = data?.map((record: any, index: number) => ({
          id: record.id || index.toString(),
          projectName: record.fields['Project Name'] || 'Untitled Project',
          codeUrl: record.fields['Code URL'] || '',
          playableUrl: record.fields['Playable URL'],
          description: record.fields['Description'] || 'No description provided',
          slackId: record.fields['Slack ID'] || 'Anonymous',
          screenshot: record.fields['Screenshot']?.[0]?.url
        })) || [];
        
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl font-display text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-gray-400">Loading amazing projects...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-800 rounded-lg h-64 mb-4"></div>
                <div className="bg-gray-800 rounded h-4 mb-2"></div>
                <div className="bg-gray-800 rounded h-4 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Oops!</h1>
          <p className="text-xl text-gray-400 mb-8">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl font-display text-white mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover amazing apps built by the project.
          </p>
          <div className="mt-8">
            <Button 
              size="lg"
              onClick={() => window.open('https://forms.hackclub.com/t/jAAFcfkEJ1us', '_blank')}
            >
              Submit Your Project
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                {project.screenshot ? (
                  <img 
                    src={project.screenshot} 
                    alt={project.projectName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-500 text-6xl">🚀</div>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white font-display">{project.projectName}</h3>
                </div>
                <p className="text-gray-400 text-sm">by {project.slackId}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex gap-2">
                  {project.playableUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(project.playableUrl, '_blank')}
                    >
                      Demo
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white mb-4">No projects yet!</h3>
            <p className="text-gray-400 mb-8">Be the first to submit your project.</p>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage; 