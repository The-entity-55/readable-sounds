import React from 'react';
import Navigation from '@/components/Navigation';
import FileUpload from '@/components/FileUpload';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-secondary-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/sonic-vision-logo.png" 
            alt="Sonic Vision Logo" 
            className="w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold text-center mb-4 text-secondary">Sonic Vision</h1>
          <p className="text-center text-lg mb-12 text-gray-300">
            Transform your educational materials into accessible audiobooks
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <section aria-labelledby="upload-heading" className="bg-black/50 p-6 rounded-lg border border-secondary/20">
            <h2 id="upload-heading" className="text-2xl font-semibold mb-4 text-secondary">
              Upload Document
            </h2>
            <FileUpload />
          </section>

          <section aria-labelledby="player-heading" className="bg-black/50 p-6 rounded-lg border border-secondary/20">
            <h2 id="player-heading" className="text-2xl font-semibold mb-4 text-secondary">
              Audio Player
            </h2>
            <AudioPlayer />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;