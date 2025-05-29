import {useState, useRef } from "react";
import axios from "axios";

interface TTSOptions {
  voiceId: string;
  pitch?: number;
  rate?: number;
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const useTTS = () => {
  const [speaking, setSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speak = async (text: string, options: TTSOptions) => {
    setSpeaking(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/stream-audio`,
        {
          text,
          voiceId: options.voiceId,
        },
        { responseType: "blob" }
      );

      const audioUrl = URL.createObjectURL(response.data);
      return new Promise<void>((resolve, reject) => {
        const audio = new Audio(audioUrl);
        audioRef.current = audio;

        audio.onended = () => {
          setSpeaking(false);
          resolve();
        };

        audio.onerror = (e) => {
          console.error("Audio playback error:", e);
          setSpeaking(false);
          reject(e);
        };

        audio.play();
      });
    } catch (error) {
      setSpeaking(false);
      console.error("TTS error:", error);
      throw error;
    }
  };

  const stop = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    setSpeaking(false);
  };

  return { speak, stop, speaking };
};
