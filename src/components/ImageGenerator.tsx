
import React, { useState } from 'react';
import { RunwareService } from '@/lib/runware-service';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { Wand2, AlertCircle, Download } from 'lucide-react';

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState('');
  const [generatedImages, setGeneratedImages] = useState<Array<{url: string, prompt: string}>>([]);
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
        'Sparkling water can with cucumber mint flavor, minimalist design, photorealistic, studio lighting, professional product photography',
        'Sleek sparkling water can with tropical fruit design, modern packaging, photorealistic, high resolution product shot',
        'Refreshing water can with berry flavor, clean and elegant look, high resolution, professional product photography',
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
      
      const newImages = results.map(result => ({
        url: result.imageURL,
        prompt: result.positivePrompt
      }));
      
      setGeneratedImages(newImages);
      
      toast.success(`Generated ${newImages.length} can images`);
    } catch (error) {
      console.error('Image generation error:', error);
      toast.error('Failed to generate images');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `can-design-${index + 1}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Image downloaded successfully');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download image');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="mb-4">
            <label htmlFor="apiKey" className="block mb-2 font-medium">Runware API Key</label>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your Runware API key"
              />
              <p className="text-sm text-gray-500">
                <AlertCircle className="inline h-4 w-4 mr-1" />
                Get your API key from <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">Runware.ai</a>
              </p>
            </div>
          </div>
          <Button 
            onClick={generateCanImage} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <span className="loader mr-2"></span>
                Generating Images...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Generate Can Images
              </>
            )}
          </Button>
        </CardContent>
      </Card>
      
      {generatedImages.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Generated Can Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedImages.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative group">
                  <img 
                    src={image.url} 
                    alt={`Generated can ${index + 1}`} 
                    className="w-full h-auto aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="outline"
                      className="bg-white hover:bg-gray-100"
                      onClick={() => downloadImage(image.url, index)}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2" title={image.prompt}>
                    {image.prompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .loader {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 2px solid white;
          width: 16px;
          height: 16px;
          animation: spin 1s linear infinite;
          display: inline-block;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ImageGenerator;
