import { useCallback, useEffect, useState } from 'react';

interface TTSOptions {
  pitch?: number;
  rate?: number;
  voice?: number; // 0-4 for different voices
}

export const useTTS = () => {
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = useCallback((text: string, options: TTSOptions = {}) => {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice based on rapper
    if (voices.length > 0) {
      const voiceIndex = options.voice || 0;
      utterance.voice = voices[Math.min(voiceIndex, voices.length - 1)];
    }
    
    // Customize voice
    utterance.pitch = options.pitch || 1;
    utterance.rate = options.rate || 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    window.speechSynthesis.speak(utterance);
  }, [voices]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  return { speak, stop, speaking };
};