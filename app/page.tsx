'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useRoughNotation } from "@/hooks/useRoughNotation";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const communityRef = useRoughNotation({ 
    type: 'highlight', 
    color: '#fbbf24',
    padding: 6,
    strokeWidth: 2
  }, isVisible);
  
  const collaborativeRef = useRoughNotation({ 
    type: 'box', 
    color: '#06d6a0',
    padding: 6,
    strokeWidth: 2
  }, isVisible);

  return (
    <div className="bg-gray-900 text-gray-100">
      <div className="relative text-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl font-display text-white mb-4">
            Hackmate
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-2xl font-semibold text-gray-300 font-handwritten">
            Turn Code into <span ref={communityRef} className="text-gray-100">Community</span>.
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            Spend at least <span className="font-mono text-emerald-400 font-bold">5 hours</span> building your collaborative app to earn <span className="font-bold text-emerald-400">$25</span> in cloud credits, or spend <span className="font-mono text-emerald-400 font-bold">10 hours</span> to earn <span className="font-bold text-emerald-400">$50</span> in credits or a <span className="font-bold text-emerald-400">Raspberry Pi 4 (2GB)</span>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See the Rewards
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://forms.hackclub.com/t/jAAFcfkEJ1us', '_blank')}
            >
              Submit Your Project
            </Button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-emerald-400 font-display mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Build a collaborative app, ship it, and get rewarded.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center" noTransform={true}>
              <CardHeader>
                <h3 className="text-2xl font-bold text-white font-display">1. Get an Idea</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  Think of a multiplayer or <span ref={collaborativeRef} className="text-gray-300">collaborative</span> experience. A shared whiteboard? A multiplayer game? A group scheduler? Check out our{' '}
                  <a href="/guide" className="text-emerald-400 hover:text-emerald-300 underline">
                    guide
                  </a>{' '}
                  for ideas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <h3 className="text-2xl font-bold text-white font-display">2. Build & Ship It</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  Use any tech stack you want. Build your app, push it to GitHub, and deploy it.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <h3 className="text-2xl font-bold text-white font-display">3. Get Rewarded</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  Submit your project. After it&apos;s reviewed, you&apos;ll earn your reward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div id="rewards" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-emerald-400 font-display mb-4">
              Rewards
            </h2>
            <p className="text-xl text-gray-400">Choose your reward based on time spent.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-emerald-500/30">
              <CardHeader>
                <h3 className="text-3xl font-bold text-white mb-2 font-display">
                  <span className="font-mono">5 Hours</span> = <span className="text-emerald-400">$25</span>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Spend at least 5 hours building and ship your collaborative app to earn $25 in cloud credits.
                </p>
               
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-500/30">
              <CardHeader>
                <h3 className="text-3xl font-bold text-white mb-2 font-display">
                  <span className="font-mono">10 Hours</span> = <span className="text-emerald-400">$50</span> or <span className="text-emerald-400">Pi 4</span>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Spend at least 10 hours on your project to get $50 in cloud credits or a Raspberry Pi 4 (2GB).
                </p>
             
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => window.open('https://forms.hackclub.com/t/jAAFcfkEJ1us', '_blank')}
            >
              Submit Your Project
            </Button>
          </div>
        </div>
      </div>

      <div id="faq" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-emerald-400 font-display mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold text-white font-display">
                  What counts as a &quot;collaborative&quot; project?
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Any app where the core experience involves multiple users interacting with the same data at the same time. Think multiplayer games, collaborative drawing boards, shared document editors, voting apps, or shared music playlists. A blog with a comment section doesn&apos;t count; a document editor where people type together does.
                </p>
              </CardContent>
            </Card>

           

            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold text-white font-display">
                  What technology can I use?
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Anything! As long as it&apos;s deployed and open source. Check out our{' '}
                  <a href="/guide" className="text-emerald-400 hover:text-emerald-300 underline">
                    Getting Started Guide
                  </a>{' '}
                  for recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold text-white font-display">
                  Where can I get help?
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  The Hack Club Slack is the best place. We will have a dedicated{' '}
                  <span className="font-mono bg-gray-700 text-emerald-400 px-2 py-1 rounded">
                    #hackmate
                  </span>{' '}
                  channel for questions, sharing progress, and finding inspiration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
