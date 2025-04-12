
import React, { useState } from 'react';
import { RunwareService } from '@/lib/runware-service';  // We'll create this service
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState('');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCanImage = async () => {
    if (!apiKey) {
      toast.error('Please enter a Runware API key');
      return;
    }

    try {
      setIsGenerating(true);
      const runwareService = new RunwareService(apiKey);
      
      const productPrompts = [
        'Sparkling water can with cucumber mint flavor, minimalist design, photorealistic',
        'Sleek sparkling water can with tropical fruit design, modern packaging, photorealistic',
        'Refreshing water can with berry flavor, clean and elegant look, high resolution',
      ];

      const imagePromises = productPrompts.map(prompt => 
        runwareService.generateImage({
          positivePrompt: prompt,
          width: 1024,
          height: 1024,
          numberResults: 1
        })
      );

      const results = await Promise.all(imagePromises);
      
      const newImages = results.map(result => result.imageURL);
      setGeneratedImages(newImages);
      
      toast.success(`Generated ${newImages.length} can images`);
    } catch (error) {
      console.error('Image generation error:', error);
      toast.error('Failed to generate images');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Generate Can Images</h2>
      <div className="mb-4">
        <label htmlFor="apiKey" className="block mb-2">Runware API Key</label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your Runware API key"
        />
      </div>
      <Button 
        onClick={generateCanImage} 
        disabled={isGenerating}
        className="mb-4"
      >
        {isGenerating ? 'Generating...' : 'Generate Can Images'}
      </Button>
      
      <div className="grid grid-cols-3 gap-4">
        {generatedImages.map((imageUrl, index) => (
          <img 
            key={index} 
            src={imageUrl} 
            alt={`Generated can ${index + 1}`} 
            className="w-full h-auto rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
