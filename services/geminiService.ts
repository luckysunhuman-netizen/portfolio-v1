
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
    try {
        return (typeof process !== 'undefined' && process.env?.API_KEY) || "";
    } catch (e) {
        return "";
    }
};

const API_KEY = getApiKey();

export const generatePortfolioImage = async (prompt: string): Promise<string | null> => {
  if (!API_KEY) {
      console.warn("API Key is missing for image generation. Please check your Vercel Environment Variables.");
      return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `${prompt} Professional engineering portfolio style, high resolution, dark tech aesthetic, dark mode compatible, no text in image.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
