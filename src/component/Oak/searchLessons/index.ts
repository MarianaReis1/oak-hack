import axios from "axios";

const APIKey = process.env.NEXT_PUBLIC_OAK_API_KEY as string;
const APIEndpoint = process.env.NEXT_PUBLIC_OAK_API_ENDPOINT as string;

type LessonSearchTerms = {
  search: string;
  subject?: string;
  keyStage?: string;
};

export const searchLessons = async (params: LessonSearchTerms) => {
  const { search, subject, keyStage } = params;

  const subjectLowerCase = subject?.toLowerCase() as string;
  const keyStageLowerCase = keyStage?.toLowerCase() as string;
  const queryString = `${APIEndpoint}/search/lessons?q=${encodeURIComponent(search)}&subject=${encodeURIComponent(subjectLowerCase)}&keyStage=${encodeURIComponent(keyStageLowerCase)}`;

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

export default searchLessons;
