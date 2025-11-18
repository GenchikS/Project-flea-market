import axios from "axios";

export const fetchArticleAnnouncementsAll = async () => {
   const response = await axios.get(`/announcements`);
//   console.log(`response`, response);
  return response.data.data;
};

export const fetchArticleAddAnnouncement = async (payload) => {
  // console.log(`payload`, payload);
  const response = await axios.post(`/announcement/add`, payload);
  if (!response) return console.log(`No response`);
  // console.log(`response`, response)
  return response.data.data;
}

export const fetchArticleUpdataAnnouncement = async (payload) => {
  const [idAnnoun] = [payload.idAnnoun];
  // console.log(`payload`, payload);
  const response = await axios.patch(
    `/announcement/updata/${idAnnoun}`,
    payload
  );
  // console.log(`response`, response)
  return response.data.data;
};

export const fetchArticleDeleteAnnouncement = async (id) => {
  // console.log(`id`, id)
    const response = await axios.delete(`/announcement/delete/${id}`);
  // console.log(`response`, response.data.data);
  if (!response) return
  return;
}