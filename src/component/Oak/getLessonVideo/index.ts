import axios from "axios";

const APIKey = process.env.NEXT_PUBLIC_OAK_API_KEY;
const endpoint = process.env.NEXT_PUBLIC_OAK_API_ENDPOINT;

export const getLessonVideo = async (slug: string) => {
  const queryString = `${endpoint}/download/${slug}/type/video`;
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      const response = await axios.get(queryString, {
        headers: {
          Authorization: `Bearer ${APIKey}`,
          "Cache-Control": "no-cache",
          Accept: "application/json",
        },
      });

      return response.data;
    } catch (error) {
      attempts++;
      console.error(`Attempt ${attempts} failed:`, error);
      if (attempts >= maxAttempts) {
        return null;
      }
    }
  }
};

export default getLessonVideo;
