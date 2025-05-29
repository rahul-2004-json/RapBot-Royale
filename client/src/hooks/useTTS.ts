import {useState, useRef } from "react";
import axios from "axios";

interface TTSOptions {
  voiceId: string;
  pitch?: number;
  rate?: number;
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

// useTTS.ts
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





// export const useTTS = () => {
//   const [speaking, setSpeaking] = useState(false);
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

//   const speak = useCallback(async (text: string, options: TTSOptions) => {
//     if (!text || !options.voiceId) return;

//     try {
//       // Stop any existing audio
//       if (audio) {
//         audio.pause();
//         audio.src = "";
//       }

//       const response = await axios.post(
//         `${BASE_URL}/api/stream-audio`,
//         {
//           text,
//           voiceId: options.voiceId,
//         },
//         {
//           responseType: "blob", 
//         }
//       );

//       const audioUrl = URL.createObjectURL(response.data);
//       const newAudio = new Audio(audioUrl);
//       newAudio.autoplay = true;

//       newAudio.onplay = () => setSpeaking(true);
//       newAudio.onended = () => {
//         setSpeaking(false);
//         setAudio(null);
//         URL.revokeObjectURL(audioUrl); // Cleanup
//       };
//       newAudio.onerror = (err) => {
//         console.error("Audio playback error:", err);
//         setSpeaking(false);
//         setAudio(null);
//         URL.revokeObjectURL(audioUrl);
//       };

//       setAudio(newAudio);
//     } catch (err) {
//       console.error("TTS error:", err);
//       setSpeaking(false);
//     }
//   }, [audio]);

//   const stop = useCallback(() => {
//     if (audio) {
//       audio.pause();
//       audio.currentTime = 0;
//       setSpeaking(false);
//     }
//   }, [audio]);

//   return { speak, stop, speaking };
// };




// import { useCallback, useEffect, useState } from 'react';

// interface TTSOptions {
//   pitch?: number;
//   rate?: number;
//   voice?: number; // 0-4 for different voices
// }

// export const useTTS = () => {
//   const [speaking, setSpeaking] = useState(false);
//   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

//   useEffect(() => {
//     const loadVoices = () => {
//       const availableVoices = window.speechSynthesis.getVoices();
//       setVoices(availableVoices);
//     };

//     loadVoices();
//     if (window.speechSynthesis.onvoiceschanged !== undefined) {
//       window.speechSynthesis.onvoiceschanged = loadVoices;
//     }

//     return () => {
//       window.speechSynthesis.cancel();
//     };
//   }, []);

//   const speak = useCallback((text: string, options: TTSOptions = {}) => {
//     const utterance = new SpeechSynthesisUtterance(text);
    
//     // Set voice based on rapper
//     if (voices.length > 0) {
//       const voiceIndex = options.voice || 0;
//       utterance.voice = voices[Math.min(voiceIndex, voices.length - 1)];
//     }
    
//     // Customize voice
//     utterance.pitch = options.pitch || 1;
//     utterance.rate = options.rate || 1;

//     utterance.onstart = () => setSpeaking(true);
//     utterance.onend = () => setSpeaking(false);
//     utterance.onerror = () => setSpeaking(false);

//     window.speechSynthesis.cancel(); // Cancel any ongoing speech
//     window.speechSynthesis.speak(utterance);
//   }, [voices]);

//   const stop = useCallback(() => {
//     window.speechSynthesis.cancel();
//     setSpeaking(false);
//   }, []);

//   return { speak, stop, speaking };
// };