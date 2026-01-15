
import React, { useState, useEffect } from 'react';
import { generatePortfolioImage } from '../services/geminiService';

interface GeminiImageProps {
  prompt: string;
  className?: string;
  fallbackText?: string;
}

const GeminiImage: React.FC<GeminiImageProps> = ({ prompt, className = "", fallbackText = "Generating..." }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      setLoading(true);
      const url = await generatePortfolioImage(prompt);
      if (isMounted) {
        if (url) {
          setImageUrl(url);
          setError(false);
        } else {
          setError(true);
        }
        setLoading(false);
      }
    };

    fetchImage();
    return () => { isMounted = false; };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-slate-900/50 animate-pulse border border-white/10 rounded-xl ${className}`}>
        <span className="text-slate-400 text-sm font-medium">{fallbackText}</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`flex items-center justify-center bg-slate-800 border border-white/10 rounded-xl ${className}`}>
        <span className="text-slate-500 text-xs">Failed to load AI visual</span>
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt="AI Generated Engineering Visualization" 
      className={`object-cover rounded-xl transition-opacity duration-700 ${className}`}
    />
  );
};

export default GeminiImage;
