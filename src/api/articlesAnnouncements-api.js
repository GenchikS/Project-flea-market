import axios from "axios";

export const fetchArticleAnnouncementsAll = async () => {
   const response = await axios.get(`/announcements`);
//   console.log(`response`, response);
  return response.data.data;
};