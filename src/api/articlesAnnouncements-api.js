import axios from "axios";

export const fetchArticleAnnouncementsAll = async (payload) => {
  // console.log(`payload`, payload);
  const { page } = payload;
   const response = await axios.get(`/announcements/?page=${page}`);
  // console.log(`response api`, response.data);
  return response.data.data;
};

export const fetchArticleAddAnnouncement = async (payload) => {
  // console.log(`payload`, payload);
  try {
    const response = await axios.post(`/announcement/add`, payload);
    // console.log(`response`, response);
    return response.data;
  } catch (error) {
    // console.log(`response`, error.response.data.data);
    return error.response.data;
  }
 }

export const fetchArticleUpdataAnnouncement = async (payload) => {
  const [idAnnoun] = [payload.idAnnoun];
  // console.log(`payload`, payload);
  try {
     const responseSourseId = await axios.get(`/announcements/${idAnnoun}`);
     const responseEnd = responseSourseId.data.data;
     const payloadObject = {
       category:
         payload.category.trim().length > 0
           ? payload.category
           : responseEnd.category,
       chapter:
         payload.chapter.trim().length > 0
           ? payload.chapter
           : responseEnd.chapter,
       idAnnoun: idAnnoun,
       price:
         payload.price.trim().length > 0 ? payload.price : responseEnd.price,
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
    //  console.log(`response`, response.data)
     return response.data;
  } catch (error) {
    // console.log(`error updata`, error.response.data)
    return error.response.data;
  }
 
};

export const fetchArticleDeleteAnnouncement = async (id) => {
  // console.log(`id`, id)
  try {
    const response = await axios.delete(`/announcement/delete/${id}`);
    // console.log(`response`, response);
    return response;
  } catch (error) {
    return error.response;
  }
}

export const fetchAnnouncementFilterChapter = async (payload) => {
  // console.log(`payload`, payload);
  const { chapter, category, purchaseSale, page } = payload;
  // console.log(`chapter2`, chapter);
  // console.log(`page`, page);

  const response = await axios.get(
    `/announcements/?chapter=${chapter}&category=${category}&purchaseSale=${purchaseSale}&page=${page}`
  );
  // console.log(`response`, response.data.data.data);
  return response.data.data;
}

export const fetchArticleAnnouncementId = async (payload) => {
  const { id, page } = payload;
  // console.log(`id`, id);
  try {
    const response = await axios.get(`/announcements/${id}/?page=${page}`);
    // console.log(`response`, response.data);
    return response.data;
  } catch (error) {
    // console.log(`error`, error)
    return error.response.data;
  }
};