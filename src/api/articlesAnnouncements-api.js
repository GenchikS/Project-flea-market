import axios from "axios";

export const fetchArticleAnnouncementsAll = async () => {
   const response = await axios.get(`/announcements`);
//   console.log(`response`, response);
  return response.data.data;
};

export const fetchArticleAddAnnouncement = async (payload) => {
  // console.log(`payload`, payload);
  const response = await axios.post(`/announcement/add`, payload);
  // console.log(`response`, response)
  return;
}