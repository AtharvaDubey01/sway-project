
import { toast } from "sonner";

export interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  numberResults?: number;
  outputFormat?: string;
  width?: number;
  height?: number;
  CFGScale?: number;
  scheduler?: string;
  strength?: number;
  seed?: number | null;
}

export interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed?: number;
  NSFWContent?: boolean;
}

export class RunwareService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    try {
      const response = await fetch('https://api.runware.ai/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          { taskType: 'authentication', apiKey: this.apiKey },
          {
            taskType: 'imageInference',
            taskUUID: crypto.randomUUID(),
            positivePrompt: params.positivePrompt,
            model: params.model || 'runware:100@1',
            width: params.width || 1024,
            height: params.height || 1024,
            numberResults: params.numberResults || 1,
            outputFormat: params.outputFormat || 'WEBP',
            CFGScale: params.CFGScale || 1,
            scheduler: params.scheduler || 'FlowMatchEulerDiscreteScheduler',
            strength: params.strength || 0.8,
          }
        ])
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.errorMessage || 'Image generation failed');
      }

      const imageData = data.data.find((d: any) => d.taskType === 'imageInference');
      
      if (!imageData || !imageData.imageURL) {
        throw new Error('No image URL found');
      }

      return {
        imageURL: imageData.imageURL,
        positivePrompt: params.positivePrompt,
        seed: imageData.seed,
        NSFWContent: imageData.NSFWContent
      };
    } catch (error) {
      console.error('Runware API error:', error);
      toast.error('Failed to generate image');
      throw error;
    }
  }
}
