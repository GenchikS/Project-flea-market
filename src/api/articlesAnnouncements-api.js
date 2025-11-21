import axios from "axios";

export const fetchArticleAnnouncementsAll = async () => {
   const response = await axios.get(`/announcements`);
//   console.log(`response`, response);
  return response.data.data;
};

export const fetchArticleAddAnnouncement = async (payload) => {
  // console.log(`payload`, payload);
  const response = await axios.post(`/announcement/add`, payload);
  // if (!response) return console.log(`No response`);
  // console.log(`response2`, response)
  return response.data.data;
}

export const fetchArticleUpdataAnnouncement = async (payload) => {
  const [idAnnoun] = [payload.idAnnoun];
  // console.log(`payload`, payload);
  const responseSourseId = await axios.get(`/announcements/${idAnnoun}`);
  const responseEnd = responseSourseId.data.data;
  const payloadObject = {
    category:
      payload.category.trim().length > 0
        ? payload.category
        : responseEnd.category,
    chapter:
      payload.chapter.trim().length > 0 ? payload.chapter : responseEnd.chapter,
    idAnnoun: idAnnoun,
    price: payload.price.trim().length > 0 ? payload.price : responseEnd.price,
    purchaseSale:
      payload.purchaseSale.trim().length > 0
        ? payload.purchaseSale
        : responseEnd.purchaseSale,
    yar: payload.yar.trim().length > 0 ? payload.yar : responseEnd.yar,
    text: payload.text.trim().length > 0 ? payload.text : responseEnd.text,
  };
  // console.log(`responseId`, responseSourseId)

const response = await axios.patch(
  `/announcement/updata/${idAnnoun}`,
  payloadObject
);
  // console.log(`response`, response.data.data)
  return response.data.data;
};

export const fetchArticleDeleteAnnouncement = async (id) => {
  // console.log(`id`, id)
    const response = await axios.delete(`/announcement/delete/${id}`);
  // console.log(`response`, response.data.data);
  if (!response) return
  return;
}

export const fetchAnnouncementFilterChapter = async (payload) => { 
  // console.log(`payload`, payload);
  const { chapter, category, purchaseSale } = payload;
  // console.log(`chapter2`, chapter);
  const response = await axios.get(`/announcements/?chapter=${chapter}&category=${category}&purchaseSale=${purchaseSale}`);
  // console.log(`response`, response.data.data);
  return response.data.data;
}

export const fetchArticleAnnouncementId = async (id) => {
  // console.log(`id`, id);
  const response = await axios.get(`/announcements/${id}`);
  // console.log(`response`, response);
  return response.data.data;
};