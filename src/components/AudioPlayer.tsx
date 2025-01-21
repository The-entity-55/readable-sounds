import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg" role="region" aria-label="Audio player">
      <div className="space-y-6">
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous section"
            className="h-12 w-12"
          >
            <SkipBack className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={togglePlay}
            size="icon"
            className="h-16 w-16 rounded-full"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8" />
            )}
          </Button>

          <Button
            variant="outline"
            size="icon"
            aria-label="Next section"
            className="h-12 w-12"
          >
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">0:00</span>
            <Slider
              value={[progress]}
              max={100}
              step={1}
              onValueChange={handleProgressChange}
              className="flex-1"
              aria-label="Audio progress"
            />
            <span className="text-sm text-gray-500">5:00</span>
          </div>

          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 text-gray-500" />
            <Slider
              value={[volume]}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="w-32"
              aria-label="Volume control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;