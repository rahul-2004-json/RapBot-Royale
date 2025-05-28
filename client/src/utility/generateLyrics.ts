import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const generateLyrics = async (
  rapperName: string,
  theme: string
): Promise<{ text: string; duration: number }[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/api/generate-lyrics`, {
      rapperName,
      theme,
    });
        
    return response.data.lyrics;
  } catch (error) {
    console.error("Error fetching lyrics:", error);
    return [];
  }
};
