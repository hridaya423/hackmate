import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl font-display text-white mb-4">
            Getting Started Guide
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Resources to help you build your collaborative app.
          </p>
        </div>

        <div className="space-y-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold text-white font-display">1. Understand the Core Concepts</h2>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Collaborative apps work by having a shared state that all users can see and modify in real-time. The magic is in synchronizing this state across all connected clients. The most common technology for this is WebSockets.
              </p>
              <a
                href="https://www.youtube.com/watch?v=1BfCnjr_Vjg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
              >
                Learn about WebSockets in 100 seconds →
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold text-white font-display">2. Set Up Hackatime (Required)</h2>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                <span className="text-emerald-400 font-semibold">Hackatime is mandatory</span> for tracking your coding time. You must have it set up before you start coding to be eligible for rewards.
              </p>
              
              <a
                href="https://hackatime.hackclub.com/my/wakatime_setup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
              >
                Set Up Hackatime →
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold text-white font-display">3. Get Inspired</h2>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Check out our <a href="/gallery" className="text-emerald-400 hover:text-emerald-300 underline">project gallery</a> to see what others have built, or browse these ideas:
              </p>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  A collaborative pixel art canvas.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  A multiplayer tic-tac-toe or chess game.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  A shared whiteboard for brainstorming.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  A simple chat room.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  A collaborative story-writing app.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  A synchronized pomodoro timer for study groups.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold text-white font-display">4. Get Help</h2>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed">
                The best place to get help is the Slack. We will have a dedicated{' '}
                <span className="font-mono bg-gray-700 text-emerald-400 px-2 py-1 rounded">
                  #hackmate
                </span>{' '}
                channel where you can ask questions, share your progress, and get inspired by others.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuidePage; 