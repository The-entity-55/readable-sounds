import React from 'react';
import Navigation from '@/components/Navigation';
import FileUpload from '@/components/FileUpload';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto py-8 px-4 space-y-8">
        <section className="max-w-2xl mx-auto" aria-labelledby="upload-heading">
          <h2 id="upload-heading" className="sr-only">Upload PDF</h2>
          <FileUpload />
        </section>

        <section className="max-w-3xl mx-auto" aria-labelledby="player-heading">
          <h2 id="player-heading" className="sr-only">Audio Player</h2>
          <AudioPlayer />
        </section>
      </main>
    </div>
  );
};

export default Index;