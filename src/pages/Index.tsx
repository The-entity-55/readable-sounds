import React from 'react';
import Navigation from '@/components/Navigation';
import FileUpload from '@/components/FileUpload';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">AudioEdu</h1>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Convert your educational materials into accessible audiobooks
        </p>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <section aria-labelledby="upload-heading">
            <h2 id="upload-heading" className="text-2xl font-semibold mb-4">
              Upload Document
            </h2>
            <FileUpload />
          </section>

          <section aria-labelledby="player-heading">
            <h2 id="player-heading" className="text-2xl font-semibold mb-4">
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